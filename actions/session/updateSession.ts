import type { SessionResponse } from "@/types/action.types";
import type { TablesUpdate } from "@/types/db.types";
import { supabase } from "@/utils/supabase";

interface UpdateSessionProps {
  updateSession: TablesUpdate<"timerSession">;
}

export async function updateSession({
  updateSession,
}: UpdateSessionProps): Promise<SessionResponse> {
  const { data, error } = await supabase
    .from("timerSession")
    .update(updateSession)
    .eq("id", updateSession.id)
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
