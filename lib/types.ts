export type Option={id:string;option_text:string};
export type Question={attemptQuestionId:string;question:string;options:Option[];displayOrder:number};
export type Attempt={token:string;studentName:string;className:string;startedAt:string;deadlineAt:string|null;durationMinutes:number|null;questions:Question[];answers:Record<string,string>;status:'in_progress'|'submitted'};
