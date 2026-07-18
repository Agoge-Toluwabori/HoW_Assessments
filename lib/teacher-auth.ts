import {createHmac,timingSafeEqual} from 'node:crypto';import {cookies} from 'next/headers';
const COOKIE='how_teacher';function signature(){const key=process.env.TEACHER_PASSCODE||'';return createHmac('sha256',key).update('house-of-wonders-teacher').digest('hex')}
export function validPasscode(value:string){const expected=process.env.TEACHER_PASSCODE||'';if(!expected||value.length!==expected.length)return false;return timingSafeEqual(Buffer.from(value),Buffer.from(expected))}
export async function isTeacher(){return (await cookies()).get(COOKIE)?.value===signature()}
export async function setTeacher(){(await cookies()).set(COOKIE,signature(),{httpOnly:true,secure:process.env.NODE_ENV==='production',sameSite:'lax',path:'/',maxAge:60*60*8})}
export async function clearTeacher(){(await cookies()).delete(COOKIE)}
