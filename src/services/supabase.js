import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://bzyvgwyjyobouebkamyp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6eXZnd3lqeW9ib3VlYmthbXlwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODg1ODA5MTksImV4cCI6MjAwNDE1NjkxOX0.PXqst5g9cSxBc_u4AiLXXwz80zCun5q4bQaym_mzt0s'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
