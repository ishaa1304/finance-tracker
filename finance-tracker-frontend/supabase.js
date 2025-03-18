import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ktxzxtkcznjubjaapfsm.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0eHp4dGtjem5qdWJqYWFwZnNtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIyNzg3MTYsImV4cCI6MjA1Nzg1NDcxNn0.Nz3qTaYqgNldCUrWhgEH7kmbuaeED6EQZpqg4eG4Klk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
