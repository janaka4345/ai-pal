import prisma from "@/lib/prismaClient";
import { passwordTokenSchema } from "@/lib/shema";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const { values } = await req.json()
    const validatedFields = passwordTokenSchema.safeParse(values)
    console.log(validatedFields);
    if (!validatedFields.success) {
        return NextResponse.json({ error: 'Invalid Fields' })
    }
    const { email, passwordToken } = validatedFields.data
    try {
        const existingToken = await prisma.passwordToken.findFirst({
            where: {
                email
            }
        })
        if (!existingToken) {
            return NextResponse.json({ error: 'Something went wrong.Request another' })

        }
        if (existingToken.expires < new Date()) {
            return NextResponse.json({ error: 'Code entered has expired.Request another' })

        }
        if (existingToken.token != passwordToken) {
            return NextResponse.json({ error: 'Verification code is incorrect.try again' })

        }
        console.log(existingToken);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Something went wrong' })

    }

    try {
        //TODO when succesfull
    } catch (error) {

    }

    return NextResponse.json({ success: 'message' })
}