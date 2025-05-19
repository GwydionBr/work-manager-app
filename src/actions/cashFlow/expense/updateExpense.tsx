import type { ExpenseResponse } from "@/types/action.types";
import type { TablesUpdate } from "@/types/db.types";
import { supabase } from "@/utils/supabase";

interface UpdateExpenseProps {
  updatedExpense: TablesUpdate<"expense">;
}

export async function updateExpense({
  updatedExpense,
}: UpdateExpenseProps): Promise<ExpenseResponse> {
  const { data, error } = await supabase
    .from("expense")
    .update(updatedExpense)
    .eq("id", updatedExpense.id)
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
