import prisma from "@/lib/prismaClient";
import { verificationTokenSchema } from "@/lib/shema";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    console.log('post ran');
    const { values } = await req.json()
    const validatedFields = verificationTokenSchema.safeParse(values)
    // console.log(validatedFields);

    if (!validatedFields.success) {
        return NextResponse.json({ error: 'Invalid Email Address' })
    }
    const { email } = validatedFields.data


    const existingToken = await prisma.verificationToken.findFirst({
        where: {
            email: email
        },
    })
    if (!existingToken) {
        return NextResponse.json({ error: 'No such Email address has registered' })
    }

    const token = Math.floor((Math.random()) * 999999).toString()
    const expires = new Date(new Date().getTime() + 3600 * 1000)


    // console.log({ token, expires });
    // console.log(existingToken?.token);

    try {
        await prisma.verificationToken.updateMany({
            where: {
                email
            },
            data: {
                token,
                expires
            }
        })
        return NextResponse.json({ success: 'new verification token created successfuly' })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'something went wrong' })

    }

}