// app/api/user/route.ts
import { NextResponse } from "next/server";
import { checkUser } from "@/app/_lib/checkUser";

export async function GET() {
    try {
        const user = await checkUser();
        return NextResponse.json(user);
    } catch (error) {
        console.error("Error in user API route:", error);
        return NextResponse.json(null, { status: 500 });
    }
}
