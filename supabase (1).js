import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mhnbfyhlovanyomjhyks.supabase.co";
const supabaseKey = "sb_publishable_chRqSwsNpuxeRixx9SrMxA_W0VHRTx-";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
);
