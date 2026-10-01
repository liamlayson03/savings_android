# Savings Shop refresh backend

The iOS V6 Shop uses the same `savings-shop` Supabase Edge Function as the website.

Keep **JWT verification enabled** (the default). Savings Hub calls the function while the user is authenticated, so it does not need to be a public unauthenticated endpoint.

Function source: `supabase/functions/savings-shop/index.ts`.
