import type { IncomeResponse } from "@/types/action.types";
import type { TablesUpdate } from "@/types/db.types";
import { supabase } from "@/utils/supabase";

interface UpdateIncomeProps {
  updatedIncome: TablesUpdate<"income">;
}

export async function updateIncome({
  updatedIncome,
}: UpdateIncomeProps): Promise<IncomeResponse> {
  const { data, error } = await supabase
    .from("income")
    .update(updatedIncome)
    .eq("id", updatedIncome.id)
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
