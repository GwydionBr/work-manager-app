import type { RecurringIncomeResponse } from "@/types/action.types";
import type { TablesUpdate } from "@/types/db.types";
import { supabase } from "@/utils/supabase";

interface UpdateRecurringIncomeProps {
  updatedRecurringIncome: TablesUpdate<"recurringIncome">;
}

export async function updateRecurringIncome({
  updatedRecurringIncome,
}: UpdateRecurringIncomeProps): Promise<RecurringIncomeResponse> {
  const { data, error } = await supabase
    .from("recurringIncome")
    .update(updatedRecurringIncome)
    .eq("id", updatedRecurringIncome.id)
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
