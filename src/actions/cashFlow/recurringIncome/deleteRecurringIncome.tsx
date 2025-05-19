import type { DeleteResponse } from '@/types/action.types';
import { supabase } from "@/utils/supabase";


interface DeleteRecurringIncomeProps {
  recurringIncomeId: number;
}

export async function deleteRecurringIncome({ recurringIncomeId }: DeleteRecurringIncomeProps): Promise<DeleteResponse> {

  const incomeResponse = await supabase
    .from('recurringIncome')
    .delete()
    .eq('id', recurringIncomeId);


  if (incomeResponse.error) {
    return {
      data: null,
      error: incomeResponse.error.message,
      success: false,
    };
  }

  return {
    data: null,
    error: null,
    success: true,
  };
}