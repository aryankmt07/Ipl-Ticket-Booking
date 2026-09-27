import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://pfdgagulywnylzktnrcb.supabase.co";
const supabaseKey = "sb_publishable_6BaWyi5cjEAyfVdQa09bnQ_JfmcjU5K";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);
