import prisma from "@/lib/prismaClient";
import { passwordResetSchema } from "@/lib/shema";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const { values } = await req.json()
    const validatedFields = passwordResetSchema.safeParse(values)
    console.log(validatedFields);
    if (!validatedFields.success) {
        return NextResponse.json({ error: 'Invalid Fields' })
    }
    const { email, passwordToken, newPassword } = validatedFields.data
    try {
        const existingToken = await prisma.passwordToken.findFirst({
            where: {
                email
            }
        })
        console.log(existingToken);
        if (!existingToken) {
            return NextResponse.json({ error: 'Something went wrong.Request another' })

        }
        if (existingToken.expires < new Date()) {
            return NextResponse.json({ error: 'Code entered has expired.Request another' })

        }
        if (existingToken.token != passwordToken) {
            return NextResponse.json({ error: 'Verification code is incorrect.try again' })

        }
        if (existingToken.token === passwordToken) {
            const encryptedPassword = await hash(newPassword, 8)
            const res = await prisma.user.updateMany({
                where: {
                    email
                },
                data: {
                    password: encryptedPassword
                }
            })
            if (res.count === 1) {
                await prisma.passwordToken.delete({
                    where: {
                        email
                    }
                })
            }
            return NextResponse.json({ success: 'Password was updated successfully' })
        }

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Something went wrong' })

    }


}