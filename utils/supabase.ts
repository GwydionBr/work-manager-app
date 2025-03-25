import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/db.types";

const supabaseUrl = "https://rrigyeoibvlqpgfmgztu.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJyaWd5ZW9pYnZscXBnZm1nenR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYwNzYxODgsImV4cCI6MjA1MTY1MjE4OH0.zj14EhhBXZVQV0kpcwbRW73bb0AXpLXup6GRImcgilw";
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
