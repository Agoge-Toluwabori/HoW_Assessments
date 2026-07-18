export function shuffle<T>(items:T[],random:()=>number=Math.random){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
export function deadline(startedAt:string,durationMinutes:number|null){return durationMinutes?new Date(new Date(startedAt).getTime()+durationMinutes*60_000).toISOString():null;}
export function expired(deadlineAt:string|null,now=Date.now()){return !!deadlineAt&&new Date(deadlineAt).getTime()<=now;}
export function standing(p:number){return p>=90?'Excellent':p>=80?'Very Good':p>=70?'Good':p>=60?'Fair':'Needs Further Study';}
