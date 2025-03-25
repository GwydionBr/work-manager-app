import type { ProjectResponse } from "@/types/action.types";
import type { TablesInsert } from "@/types/db.types";
import { supabase } from "@/utils/supabase";

interface CreateProjectProps {
  project: TablesInsert<"timerProject">;
}

export async function createProject({
  project,
}: CreateProjectProps): Promise<ProjectResponse> {

  const { data, error } = await supabase
    .from("timerProject")
    .insert(project)
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
