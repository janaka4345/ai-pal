import prisma from "@/lib/prismaClient";
import { verificationTokenSchema } from "@/lib/shema";
import { NextResponse } from "next/server"

export async function POST(req, res) {
    const { values } = await req.json()
    const validatedFields = verificationTokenSchema.safeParse(values)
    console.log(validatedFields);

    if (!validatedFields.success) {
        return NextResponse.json({ error: 'Invalid Fileds' })
    }
    const { email, verificationToken } = validatedFields.data
    try {
        const existingToken = await prisma.verificationToken.findFirst({
            where: {
                email
            }
        })
        if (!existingToken) {
            return NextResponse.json({ error: 'No registered under this email address' })

        }
        if (existingToken.expires < new Date()) {
            return NextResponse.json({ error: 'Verification code entered has expired.' })

        }
        if (existingToken.token != verificationToken) {
            return NextResponse.json({ error: 'Verification code is incorrect.' })

        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Something went wring' })
    }

    try {
        await prisma.user.updateMany({
            where: {
                email: email
            },
            data: {
                emailVerified: new Date()
            }
        })
        await prisma.verificationToken.deleteMany({
            where: {
                email: email
            }
        })
        return NextResponse.json({ success: 'Your Email is verified.' })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'couldn\'t verify the email address. Try again later' })

    }
}