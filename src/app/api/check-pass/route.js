import { NextResponse } from 'next/server'

export async function POST(req) {
  const { password } = await req.json()
  const adminPass = process.env.ADMIN

  if (password === adminPass) {
    const res = NextResponse.json({ success: true })
    res.cookies.set('auth', 'true', {
      httpOnly: true
    })
    return res
  } else {
    return NextResponse.json({ success: false }, { status: 401 })
  }
}