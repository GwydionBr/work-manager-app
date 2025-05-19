import type { RecurringExpenseResponse } from "@/types/action.types";
import type { TablesUpdate } from "@/types/db.types";
import { supabase } from "@/utils/supabase";

interface UpdateRecurringExpenseProps {
  updatedRecurringExpense: TablesUpdate<"recurringExpense">;
}

export async function updateRecurringExpense({
  updatedRecurringExpense,
}: UpdateRecurringExpenseProps): Promise<RecurringExpenseResponse> {
  const { data, error } = await supabase
    .from("recurringExpense")
    .update(updatedRecurringExpense)
    .eq("id", updatedRecurringExpense.id)
    .select()
    .single();

  if (error) {
    return {
      data: null,
      error: error.message,
      success: false,
    };
  }

  return {
    data,
    error: null,
    success: true,
  };
}
