import { Tables } from "@/types/db.types";

// Error Response
interface ErrorResponse {
  success: false;
  data: null;
  error: string;
}

// Delete Success Response
interface DeleteSuccessResponse {
  success: true;
  data: null;
  error: null;
}
export type DeleteResponse = DeleteSuccessResponse | ErrorResponse;

// Session Responses

// Session List Success Response
interface SessionListSuccesResponse {
  success: true;
  data: Tables<"timerSession">[];
  error: null;
}
export type SessionListResponse = SessionListSuccesResponse | ErrorResponse;

// Session Succes Response
interface SessionSuccesResponse {
  success: true;
  data: Tables<"timerSession">;
  error: null;
}
export type SessionResponse = SessionSuccesResponse | ErrorResponse;

// Project Responses

// Project List Success Response
interface ProjectListSuccesResponse {
  success: true;
  data: Tables<"timerProject">[];
  error: null;
}
export type ProjectListResponse = ProjectListSuccesResponse | ErrorResponse;

// Project Success Response
interface ProjectSuccesResponse {
  success: true;
  data: Tables<"timerProject">;
  error: null;
}
export type ProjectResponse = ProjectSuccesResponse | ErrorResponse;

// Expense Responses

// Expense List Success Response
interface ExpenseListSuccesResponse {
  success: true;
  data: Tables<"expense">[];
  error: null;
}
export type ExpenseListResponse = ExpenseListSuccesResponse | ErrorResponse;

// Expense Success Response
interface ExpenseSuccesResponse {
  success: true;
  data: Tables<"expense">;
  error: null;
}
export type ExpenseResponse = ExpenseSuccesResponse | ErrorResponse;

// Income Responses

// Income List Success Response
interface IncomeListSuccesResponse {
  success: true;
  data: Tables<"income">[];
  error: null;
}
export type IncomeListResponse = IncomeListSuccesResponse | ErrorResponse;

// Income Success Response
interface IncomeSuccesResponse {
  success: true;
  data: Tables<"income">;
  error: null;
}
export type IncomeResponse = IncomeSuccesResponse | ErrorResponse;

// Recurring Expenses Responses

// Recurring Expense List Success Response
interface RecurringExpenseListSuccesResponse {
  success: true;
  data: Tables<"recurringExpense">[];
  error: null;
}
export type RecurringExpenseListResponse =
  RecurringExpenseListSuccesResponse | ErrorResponse;
// Recurring Expense Success Response
interface RecurringExpenseSuccesResponse {
  success: true;
  data: Tables<"recurringExpense">;
  error: null;
}
export type RecurringExpenseResponse =
  RecurringExpenseSuccesResponse | ErrorResponse;

// Recurring Income Responses

// Recurring Income List Success Response
interface RecurringIncomeListSuccesResponse {
  success: true;
  data: Tables<"recurringIncome">[];
  error: null;
}
export type RecurringIncomeListResponse =
  RecurringIncomeListSuccesResponse | ErrorResponse;
// Recurring Income Success Response
interface RecurringIncomeSuccesResponse {
  success: true;
  data: Tables<"recurringIncome">;
  error: null;
}
export type RecurringIncomeResponse =
  RecurringIncomeSuccesResponse | ErrorResponse;

