import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const { password } = await req.json
        if (password != process.env.ADMIN) {
            return NextResponse.json(
                { error: "Invalid Credentials" },
                { status: 401 }
            )
        }
        const res = NextResponse.json({ success: true })
        res.cookies.set('auth', 'true', {
            httpOnly: true
        })
        return res
    } catch (error) {
        return NextResponse.json(
            { error: "Please Try again Later" },
            { status: 404 }
        )
    }
}