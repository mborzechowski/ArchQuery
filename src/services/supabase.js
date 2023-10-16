import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wcgobzigltckkjmrmvuz.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndjZ29iemlnbHRja2tqbXJtdnV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTcyMjA0NzksImV4cCI6MjAxMjc5NjQ3OX0.9UNdxPX8VQPbpzHmPBLVCO5zkKOZQ8Pulo7tyWtAERw'
const supabase = createClient(supabaseUrl, SUPABASE_KEY)

export default supabase;