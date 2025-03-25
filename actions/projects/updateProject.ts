import type { ProjectResponse } from '@/types/action.types';
import type { TablesUpdate } from "@/types/db.types";
import { supabase } from "@/utils/supabase";


interface UpdateProjectProps {
  updateProject: TablesUpdate<"timerProject">;
}

export async function updateProject({ updateProject }: UpdateProjectProps) : Promise<ProjectResponse> {

  const { data, error } = await supabase
    .from("timerProject")
    .update(updateProject)
    .eq("id", updateProject.id)
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