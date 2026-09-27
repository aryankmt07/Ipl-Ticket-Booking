import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://weyohbvmexsvtgmvnmqi.supabase.co";
const supabaseKey = "sb_publishable_cyV-LyAwyYAULk_WjxGQ2w_Zyvq0Rta";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
