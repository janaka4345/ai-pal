import { tokenData } from "@/lib/apiLimit";
import { NextResponse } from "next/server";

export async function GET() {
    try {

        const data = await tokenData()
        console.log(data);
        return NextResponse.json(data)

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'error happened' })

    }
}