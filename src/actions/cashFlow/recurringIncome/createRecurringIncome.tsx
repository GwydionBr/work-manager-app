import type { RecurringIncomeResponse } from "@/types/action.types";
import type { TablesInsert } from "@/types/db.types";
import { supabase } from "@/utils/supabase";

interface CreateRecurringIncomeProps {
  recurringIncome: TablesInsert<"recurringIncome">;
}

export async function createRecurringIncome({
  recurringIncome,
}: CreateRecurringIncomeProps): Promise<RecurringIncomeResponse> {
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

  const newRecurringIncome = {
    ...recurringIncome,
    user_id: user.id,
  };

  const { data, error } = await supabase
    .from("recurringIncome")
    .insert(newRecurringIncome)
    .select()
    .single();

  if (error) {
    console.log("Error creating income", error.message);
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
