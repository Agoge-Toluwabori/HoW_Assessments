import {NextResponse} from 'next/server';import {clearTeacher} from '@/lib/teacher-auth';export async function POST(){await clearTeacher();return NextResponse.json({ok:true})}
