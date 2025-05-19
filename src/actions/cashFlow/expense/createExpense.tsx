import type { ExpenseResponse } from "@/types/action.types";
import type { TablesInsert } from "@/types/db.types";
import { supabase } from "@/utils/supabase";

interface CreateExpenseProps {
  expense: TablesInsert<"expense">;
}

export async function createExpense({
  expense,
}: CreateExpenseProps): Promise<ExpenseResponse> {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      data: null,
      error: "User not found",
      success: false,
    };
  }

  const newExpense = {
    ...expense,
    user_id: user.id,
  };

  const { data, error } = await supabase
    .from("expense")
    .insert(newExpense)
    .select()
    .single();

  if (error) {
    console.log("Error creating expense", error.message);
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
