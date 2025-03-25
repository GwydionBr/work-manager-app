import type { DeleteResponse } from '@/types/action.types';
import { supabase } from '@/utils/supabase';


interface DeleteProjectProps {
  sessionId: string;
}

export async function deleteSession({ sessionId }: DeleteProjectProps): Promise<DeleteResponse> {

  const { error } = await supabase
    .from('timerSession')
    .delete()
    .eq('id', sessionId);

  if (error) {
    return {
      data: null,
      error: error.message,
      success: false,
    };
  }

  return {
    data: null,
    error: null,
    success: true,
  };
}