import type { IncomeResponse } from "@/types/action.types";
import type { TablesInsert } from "@/types/db.types";
import { supabase } from "@/utils/supabase";

interface CreateIncomeProps {
  income: TablesInsert<"income">;
}

export async function createIncome({
  income,
}: CreateIncomeProps): Promise<IncomeResponse> {
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

  const newIncome = {
    ...income,
    user_id: user.id,
  };

  const { data, error } = await supabase
    .from("income")
    .insert(newIncome)
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
