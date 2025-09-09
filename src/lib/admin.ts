import { supabase } from './supabase'

// Admin functions for managing newsletter signups
export const getNewsletterSignups = async () => {
  try {
    const { data, error } = await supabase
      .from('newsletter_signups')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Error fetching newsletter signups:', error)
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error('Failed to fetch newsletter signups:', error)
    return { success: false, error }
  }
}

export const getNewsletterStats = async () => {
  try {
    const { data, error } = await supabase
      .from('newsletter_signups')
      .select('id, created_at, source, is_active')

    if (error) {
      console.error('Error fetching newsletter stats:', error)
      throw error
    }

    const total = data?.length || 0
    const active = data?.filter(signup => signup.is_active).length || 0
    const thisMonth = data?.filter(signup => {
      const signupDate = new Date(signup.created_at)
      const now = new Date()
      return signupDate.getMonth() === now.getMonth() && 
             signupDate.getFullYear() === now.getFullYear()
    }).length || 0

    return { 
      success: true, 
      data: { 
        total, 
        active, 
        thisMonth,
        inactive: total - active
      } 
    }
  } catch (error) {
    console.error('Failed to fetch newsletter stats:', error)
    return { success: false, error }
  }
}
