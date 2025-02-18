/*
  # Create email subscribers table
  
  1. New Tables
    - `subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `status` (text) - For tracking subscription status
  
  2. Security
    - Enable RLS on `subscribers` table
    - Add policies for inserting new subscribers
    - Add policies for admin access
*/

CREATE TABLE IF NOT EXISTS subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'active'
);

ALTER TABLE subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to subscribe (insert)
CREATE POLICY "Anyone can subscribe"
  ON subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view subscribers
CREATE POLICY "Only authenticated users can view subscribers"
  ON subscribers
  FOR SELECT
  TO authenticated
  USING (true);