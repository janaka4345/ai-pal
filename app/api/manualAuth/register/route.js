import prisma from "@/lib/prismaClient";
import { registerFormSchema } from "@/lib/shema";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";


export async function POST(req, res) {
    const { values } = await req.json()
    const validatedFields = registerFormSchema.safeParse(values)

    // console.log(validatedFields);

    if (!validatedFields.success) {
        return NextResponse.json({ error: 'form not subbmited' })
    }
    const { email, password, firstName, lastName } = validatedFields.data


    const existingUser = await prisma.user.findFirst({
        where: {
            email: email
        },
        select: {
            email: true
        }
    })


    if (existingUser) {
        return NextResponse.json({ error: 'User by that email exists' })
    }

    const encryptedPassword = await hash(password, 8)
    const token = Math.floor((Math.random()) * 999999).toString()
    const expires = new Date(new Date().getTime() + 3600 * 1000)

    try {
        await prisma.user.create({
            data: {
                name: firstName + ' ' + lastName,
                email,
                password: encryptedPassword
            }
        })
        await prisma.verificationToken.create({
            data: {
                email,
                token,
                expires
            }
        })
        return NextResponse.json({ success: 'new user created.please verify your email' })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'something went wrong' })

    }    // console.log(response);

}