import { supabase } from './supabase.js'

export async function requireTeacher() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) { window.location.href = '/index.html'; return null }

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, role')
    .eq('id', session.user.id)
    .single()

  if (!profile || profile.role !== 'teacher') {
    window.location.href = '/index.html'
    return null
  }

  return { user: session.user, profile }
}

export async function requireStudent() {
  const { data: { session } } = await supabase.auth.getSession()
  if (!session) { window.location.href = '/index.html'; return null }

  const { data: profile } = await supabase
    .from('profiles')
    .select('full_name, role')
    .eq('id', session.user.id)
    .single()

  if (!profile || profile.role !== 'student') {
    window.location.href = '/index.html'
    return null
  }

  return { user: session.user, profile }
}

export async function logout() {
  await supabase.auth.signOut()
  window.location.href = '/index.html'
}