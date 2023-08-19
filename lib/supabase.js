import { createClient } from "@supabase/supabase-js";

const supabaseUrl =  VITE_PUBLIC_import.meta.env.SUPABASE_URL;
const supabaseAnonKey =  VITE_PUBLIC_import.meta.env.SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// export const supabase = createClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
// );