import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fyqfkfprxpzhsyslsnff.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5cWZrZnByeHB6aHN5c2xzbmZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg0OTQ0NTksImV4cCI6MjAxNDA3MDQ1OX0.xt0zVSntgxi2H88DNkRIiWx-Z24atjfjedI7d-2JIUw'
const supabase = createClient(supabaseUrl, SUPABASE_KEY)

export default supabase;