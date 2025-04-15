import type { DeleteResponse } from "@/types/action.types";
import { supabase } from "@/utils/supabase";

interface DeleteExpenseProps {
  expenseId: number;
}

export async function deleteExpense({
  expenseId,
}: DeleteExpenseProps): Promise<DeleteResponse> {
  const expenseResponse = await supabase
    .from("expense")
    .delete()
    .eq("id", expenseId);

  if (expenseResponse.error) {
    return {
      data: null,
      error: expenseResponse.error.message,
      success: false,
    };
  }

  return {
    data: null,
    error: null,
    success: true,
  };
}
