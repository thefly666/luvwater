/*
  # Add product preference to subscribers table

  1. Changes
    - Add `product_preference` column to `subscribers` table
      - Type: text
      - Default: 'immunity'
      - NOT NULL constraint
    - Values can be either 'immunity' or 'vitamins'

  2. Security
    - Maintains existing RLS policies
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'subscribers' 
    AND column_name = 'product_preference'
  ) THEN
    ALTER TABLE subscribers 
    ADD COLUMN product_preference text NOT NULL DEFAULT 'immunity'
    CHECK (product_preference IN ('immunity', 'vitamins'));
  END IF;
END $$;