import type { ProjectResponse } from '@/types/action.types';
import { supabase } from "@/utils/supabase";


interface getProjectProps {
  id: string;
}

export async function getProjectById({ id }: getProjectProps): Promise<ProjectResponse> {

  const { data, error } = await supabase
    .from('timerProject')
    .select('*')
    .eq('id', id)
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