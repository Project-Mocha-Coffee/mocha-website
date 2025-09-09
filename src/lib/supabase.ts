import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://kofmhunrqahrnuvpwmll.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtvZm1odW5ycWFocm51dnB3bWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc0MjAyNjgsImV4cCI6MjA3Mjk5NjI2OH0.pQZ-aPTOimDxReHl4n4054BO0WGF96zv4_t_s53UMfs'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Newsletter signup function
export const signupNewsletter = async (email: string) => {
  try {
    const { data, error } = await supabase
      .from('newsletter_signups')
      .insert([
        { 
          email: email.toLowerCase().trim(),
          source: 'website'
        }
      ])
      .select()

    if (error) {
      console.error('Newsletter signup error:', error)
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error('Newsletter signup failed:', error)
    return { success: false, error }
  }
}
