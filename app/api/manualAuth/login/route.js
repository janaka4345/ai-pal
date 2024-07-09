import { userAuthformSchema } from "@/lib/shema";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { values } = await req.json()
    const validatedFields = userAuthformSchema.safeParse(values)

    if (!validatedFields.success) {
        return NextResponse.json({ error: 'Invalid Fields entered' })

    }


    console.log(validatedFields);
    return NextResponse.json({ success: 'success message' })
}