import {createClient} from "@supabase/supabase-js";

export const supabase = createClient (
     "https://btfstotnupdefpxwguau.supabase.co",
     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0ZnN0b3RudXBkZWZweHdndWF1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxMDgyMDYsImV4cCI6MjAwMjY4NDIwNn0.wyuYEBXVv-lrYiam2dF1xQe8AW_phNO9nFGeKTt-cUM"
)
