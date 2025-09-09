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

// Contact form submission function
export const submitContactForm = async (formData: {
  fullName: string;
  email: string;
  subject: string;
  phone?: string;
  message?: string;
}) => {
  try {
    const { data, error } = await supabase
      .from('contact_submissions')
      .insert([
        { 
          full_name: formData.fullName.trim(),
          email: formData.email.toLowerCase().trim(),
          subject: formData.subject.trim(),
          phone: formData.phone?.trim() || null,
          message: formData.message?.trim() || null
        }
      ])
      .select()

    if (error) {
      console.error('Contact form submission error:', error)
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error('Contact form submission failed:', error)
    return { success: false, error }
  }
}