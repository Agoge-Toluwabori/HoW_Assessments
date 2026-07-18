alter table public.assessment_settings add column if not exists allow_answer_review boolean not null default true;
update public.assessment_settings set allow_answer_review=true where singleton_key=true;
