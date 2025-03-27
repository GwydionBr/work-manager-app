import type { ProjectResponse } from "@/types/action.types";
import type { TablesInsert } from "@/types/db.types";
import { supabase } from "@/utils/supabase";

interface CreateProjectProps {
  project: TablesInsert<"timerProject">;
}

export async function createProject({
  project,
}: CreateProjectProps): Promise<ProjectResponse> {
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

  const newProject = {
    ...project,
    user_id: user.id,
  };

  const { data, error } = await supabase
    .from("timerProject")
    .insert(newProject)
    .select()
    .single();

  if (error) {
    console.log("Error creating project", error.message);
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
