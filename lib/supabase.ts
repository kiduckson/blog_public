import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supbaseSecret = process.env.NEXT_PUBLIC_SUPABASE_ANON_PUBLIC;
export const supabase = createClient(supabaseUrl, supbaseSecret);
