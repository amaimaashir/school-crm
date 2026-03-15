const { createClient } = supabase

const SUPABASE_URL = 'https://rutzmfdlflrxcudafgfq.supabase.co'
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1dHptZmRsZmxyeGN1ZGFmZ2ZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM1MDA4NjAsImV4cCI6MjA4OTA3Njg2MH0.4-4MiVh-ehqSQySuqxP6zp3U2I2WBdvfm3qIN7GiH3s'

window.sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)