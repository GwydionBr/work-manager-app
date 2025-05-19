import { create } from "zustand";
import * as actions from "@/actions";
import { Tables, TablesInsert, TablesUpdate } from "@/types/db.types";

export type CashFlow = Tables<"expense"> &
  Tables<"income"> & {
    type: "expense" | "income";
  };

interface FinancesStore {
  cashFlow: CashFlow[];
  expenses: Tables<"expense">[];
  incomes: Tables<"income">[];
  recurringExpenses: Tables<"recurringExpense">[];
  recurringIncomes: Tables<"recurringIncome">[];
  fetchFinanceData: () => Promise<void>;
  transformCashFlow: (data: {
    expenses: Tables<"expense">[];
    incomes: Tables<"income">[];
  }) => Promise<void>;
  addExpense: (expense: TablesInsert<"expense">) => Promise<boolean>;
  addIncome: (income: TablesInsert<"income">) => Promise<boolean>;
  addRecurringExpense: (
    recurringExpense: TablesInsert<"recurringExpense">
  ) => Promise<boolean>;
  addRecurringIncome: (
    recurringIncome: TablesInsert<"recurringIncome">
  ) => Promise<boolean>;
  updateExpense: (expense: TablesUpdate<"expense">) => Promise<boolean>;
  updateIncome: (income: TablesUpdate<"income">) => Promise<boolean>;
  updateRecurringExpense: (
    recurringExpense: TablesUpdate<"recurringExpense">
  ) => Promise<boolean>;
  updateRecurringIncome: (
    recurringIncome: TablesUpdate<"recurringIncome">
  ) => Promise<boolean>;
  deleteExpense: (id: number) => Promise<boolean>;
  deleteIncome: (id: number) => Promise<boolean>;
  deleteRecurringExpense: (id: number) => Promise<boolean>;
  deleteRecurringIncome: (id: number) => Promise<boolean>;
}

export const useFinancesStore = create<FinancesStore>((set, get) => ({
  cashFlow: [],
  expenses: [],
  incomes: [],
  recurringExpenses: [],
  recurringIncomes: [],

  async fetchFinanceData() {
    const [expenses, incomes, recurringExpenses, recurringIncomes] =
      await Promise.all([
        actions.getAllExpenses(),
        actions.getAllIncomes(),
        actions.getAllRecurringExpenses(),
        actions.getAllRecurringIncomes(),
      ]);

    if (
      !expenses.success ||
      !incomes.success ||
      !recurringExpenses.success ||
      !recurringIncomes.success
    ) {
      return;
    }

    set({
      expenses: expenses.data,
      incomes: incomes.data,
      recurringExpenses: recurringExpenses.data,
      recurringIncomes: recurringIncomes.data,
    });

    get().transformCashFlow({
      expenses: expenses.data,
      incomes: incomes.data,
    });
  },

  async transformCashFlow({ expenses, incomes }) {
    const transformedExpenses = expenses.map(
      (expense) =>
        ({
          ...expense,
          type: "expense",
        } as CashFlow)
    );
    const transformedIncomes = incomes.map(
      (income) =>
        ({
          ...income,
          type: "income",
        } as CashFlow)
    );

    const cashFlow = [...transformedExpenses, ...transformedIncomes];
    const sortedCashFlow = cashFlow.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });
    set({ cashFlow: sortedCashFlow });
  },

  async addExpense(expense) {
    const result = await actions.createExpense({ expense });
    if (result.success) {
      set((state) => ({
        expenses: [...state.expenses, result.data],
      }));
    }
    return result.success;
  },

  async addIncome(income) {
    const result = await actions.createIncome({ income });
    if (result.success) {
      set((state) => ({
        incomes: [...state.incomes, result.data],
      }));
    }
    return result.success;
  },

  async addRecurringExpense(recurringExpense) {
    const result = await actions.createRecurringExpense({ recurringExpense });
    if (result.success) {
      set((state) => ({
        recurringExpenses: [...state.recurringExpenses, result.data],
      }));
    }
    return result.success;
  },

  async addRecurringIncome(recurringIncome) {
    const result = await actions.createRecurringIncome({ recurringIncome });
    if (result.success) {
      set((state) => ({
        recurringIncomes: [...state.recurringIncomes, result.data],
      }));
    }
    return result.success;
  },

  async updateExpense(expense) {
    const result = await actions.updateExpense({ updatedExpense: expense });
    if (result.success) {
      set((state) => ({
        expenses: state.expenses.map((e) =>
          e.id === expense.id ? result.data : e
        ),
      }));
    }
    return result.success;
  },

  async updateIncome(income) {
    const result = await actions.updateIncome({ updatedIncome: income });
    if (result.success) {
      set((state) => ({
        incomes: state.incomes.map((i) =>
          i.id === income.id ? result.data : i
        ),
      }));
    }
    return result.success;
  },

  async updateRecurringExpense(recurringExpense) {
    const result = await actions.updateRecurringExpense({
      updatedRecurringExpense: recurringExpense,
    });
    if (result.success) {
      set((state) => ({
        recurringExpenses: state.recurringExpenses.map((re) =>
          re.id === recurringExpense.id ? result.data : re
        ),
      }));
    }
    return result.success;
  },

  async updateRecurringIncome(recurringIncome) {
    const result = await actions.updateRecurringIncome({
      updatedRecurringIncome: recurringIncome,
    });
    if (result.success) {
      set((state) => ({
        recurringIncomes: state.recurringIncomes.map((ri) =>
          ri.id === recurringIncome.id ? result.data : ri
        ),
      }));
    }
    return result.success;
  },

  async deleteExpense(id) {
    const result = await actions.deleteExpense({ expenseId: id });
    if (result.success) {
      set((state) => ({
        expenses: state.expenses.filter((e) => e.id !== id),
      }));
    }
    return result.success;
  },

  async deleteIncome(id) {
    const result = await actions.deleteIncome({ incomeId: id });
    if (result.success) {
      set((state) => ({
        incomes: state.incomes.filter((i) => i.id !== id),
      }));
    }
    return result.success;
  },

  async deleteRecurringExpense(id) {
    const result = await actions.deleteRecurringExpense({
      recurringExpenseId: id,
    });
    if (result.success) {
      set((state) => ({
        recurringExpenses: state.recurringExpenses.filter((re) => re.id !== id),
      }));
    }
    return result.success;
  },

  async deleteRecurringIncome(id) {
    const result = await actions.deleteRecurringIncome({
      recurringIncomeId: id,
    });
    if (result.success) {
      set((state) => ({
        recurringIncomes: state.recurringIncomes.filter((ri) => ri.id !== id),
      }));
    }
    return result.success;
  },
}));
