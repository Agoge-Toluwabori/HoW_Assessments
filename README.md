# House of Wonders — I Know Your Works Assessment

Next.js and Supabase assessment application. Available classes are **Righteousness class**, **Peace Class**, and **Joy** (with an Other option).

## Setup

1. Install Node.js 20+ and run `npm install`.
2. Create a Supabase project and run `supabase/migrations/202607180001_initial_assessment.sql` in its SQL editor.
3. Seed the 40 questions and five options per question from the supplied question bank. Exactly one option per question must have `is_correct = true`.
4. Copy `.env.example` to `.env.local`, fill in the Supabase URL, publishable key, server-only service-role key, and a long teacher passcode.
5. Run `npm run dev` and open `http://localhost:3000`. Teacher controls are at `/activity`.

## Timer behavior

The administrator sets a duration from 1–480 minutes, or leaves it blank for an untimed assessment. The duration is snapshotted on each attempt as `duration_limit_minutes`, and an absolute `deadline_at` is stored at start. Later admin changes therefore do not shorten or extend an attempt already underway.

The browser displays a countdown and submits at zero. Every answer-save request also checks the server deadline. Submission grades the latest saved answers and records `auto_submitted`; closing the tab does not extend the deadline. A deployment cron can additionally finalize expired abandoned browser sessions if immediate database finalization without a connected browser is required.

All database tables have RLS enabled and direct anonymous/authenticated access is revoked. Students interact through validated server routes, correct answers stay server-side, and the service-role key must never use a `NEXT_PUBLIC_` prefix.

## Verification

Run `npm test`, `npm run typecheck`, and `npm run build`. Manual setup remains: add the supplied 40-question seed, configure Supabase environment variables, and deploy to Vercel.
