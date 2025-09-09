# Newsletter Admin Guide

## Overview
The newsletter signup functionality has been integrated with Supabase to store email addresses for admin access.

## Database Structure
The `newsletter_signups` table contains:
- `id`: Unique identifier (UUID)
- `email`: User's email address (unique)
- `created_at`: Timestamp when user signed up
- `updated_at`: Timestamp when record was last updated
- `source`: Source of signup (default: 'website')
- `is_active`: Whether the subscription is active (default: true)

## Accessing Newsletter Signups

### Option 1: Supabase Dashboard
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project: "ianmwaniki904's Project"
3. Navigate to Table Editor
4. Select the `newsletter_signups` table
5. View, filter, and export signups

### Option 2: Using Admin Functions (Programmatic)
The following functions are available in `src/lib/admin.ts`:

```typescript
import { getNewsletterSignups, getNewsletterStats } from './lib/admin'

// Get all newsletter signups
const signups = await getNewsletterSignups()

// Get newsletter statistics
const stats = await getNewsletterStats()
// Returns: { total, active, thisMonth, inactive }
```

### Option 3: Direct SQL Queries
You can run SQL queries directly in the Supabase SQL Editor:

```sql
-- Get all signups
SELECT * FROM newsletter_signups ORDER BY created_at DESC;

-- Get signups from this month
SELECT * FROM newsletter_signups 
WHERE created_at >= date_trunc('month', CURRENT_DATE);

-- Get total count
SELECT COUNT(*) as total_signups FROM newsletter_signups;

-- Get signups by source
SELECT source, COUNT(*) as count 
FROM newsletter_signups 
GROUP BY source;
```

## Security
- Public users can only INSERT new signups
- Authenticated users can SELECT all signups (for admin access)
- Row Level Security (RLS) is enabled

## Environment Variables
The following environment variables can be set in `.env.local`:
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## Testing
1. Start the development server: `npm run dev`
2. Navigate to the CTA section on your website
3. Enter an email and click "Subscribe"
4. Check the Supabase dashboard to verify the signup was recorded

## Project Details
- **Project ID**: kofmhunrqahrnuvpwmll
- **Project URL**: https://kofmhunrqahrnuvpwmll.supabase.co
- **Region**: eu-north-1
