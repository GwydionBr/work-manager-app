import type { RecurringExpenseResponse } from "@/types/action.types";
import type { TablesInsert } from "@/types/db.types";
import { supabase } from "@/utils/supabase";

interface CreateRecurringExpenseProps {
  recurringExpense: TablesInsert<"recurringExpense">;
}

export async function createRecurringExpense({
  recurringExpense,
}: CreateRecurringExpenseProps): Promise<RecurringExpenseResponse> {
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

  const newRecurringExpense = {
    ...recurringExpense,
    user_id: user.id,
  };

  const { data, error } = await supabase
    .from("recurringExpense")
    .insert(newRecurringExpense)
    .select()
    .single();

  if (error) {
    console.log("Error creating recurring expense", error.message);
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
