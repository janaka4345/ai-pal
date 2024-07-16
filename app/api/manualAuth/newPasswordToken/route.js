import { generateToken } from "@/lib/generateToken";
import prisma from "@/lib/prismaClient";
import { passwordTokenSchema } from "@/lib/shema";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    // console.log('post ran');
    const { values } = await req.json()
    const validatedFields = passwordTokenSchema.partial().safeParse(values)
    console.log(validatedFields);

    if (!validatedFields.success) {
        return NextResponse.json({ error: 'Invalid Fields' })
    }
    const { email } = validatedFields.data


    const existingToken = await prisma.passwordToken.findFirst({
        where: {
            email: email
        },
    })
    if (!existingToken) {
        return NextResponse.json({ error: 'No such Email address has been requested to change the password' })
    }

    const { token, expires } = generateToken()


    // console.log({ token, expires });
    // console.log(existingToken?.token);

    try {
        await prisma.passwordToken.updateMany({
            where: {
                email
            },
            data: {
                token,
                expires
            }
        })
        return NextResponse.json({ success: 'new password token created successfuly' })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'something went wrong' })

    }

}