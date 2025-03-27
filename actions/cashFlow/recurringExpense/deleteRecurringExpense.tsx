import type { DeleteResponse } from '@/types/action.types';
import { supabase } from "@/utils/supabase";


interface DeleteRecurringExpenseProps {
  recurringExpenseId: number;
}

export async function deleteRecurringExpense({ recurringExpenseId }: DeleteRecurringExpenseProps): Promise<DeleteResponse> {

  const recurringExpenseResponse = await supabase
    .from('recurringExpense')
    .delete()
    .eq('id', recurringExpenseId);


  if (recurringExpenseResponse.error) {
    return {
      data: null,
      error: recurringExpenseResponse.error.message,
      success: false,
    };
  }

  return {
    data: null,
    error: null,
    success: true,
  };
}