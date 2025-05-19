import type { ExpenseListResponse } from "@/types/action.types";
import { supabase } from "@/utils/supabase";

export async function getAllExpenses(): Promise<ExpenseListResponse> {
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

  const { data, error } = await supabase
    .from("expense")
    .select("*")
    .eq("user_id", user.id);

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
