import type { SessionListResponse } from '@/types/action.types';
import { supabase } from "@/utils/supabase";

interface getSessionsByProjectIdProps {
  projectId: string;
}

export async function getProjectSessions({
  projectId,
}: getSessionsByProjectIdProps): Promise<SessionListResponse> {

  const { data, error } = await supabase.from('timerSession').select().eq('project_id', projectId);

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
