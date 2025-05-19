import type { DeleteResponse } from '@/types/action.types';
import { supabase } from "@/utils/supabase";


interface DeleteIncomeProps {
  incomeId: number;
}

export async function deleteIncome({ incomeId }: DeleteIncomeProps): Promise<DeleteResponse> {

  const incomeResponse = await supabase
    .from('income')
    .delete()
    .eq('id', incomeId);


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