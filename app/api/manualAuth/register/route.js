import prisma from "@/lib/prismaClient";
import { registerFormSchema } from "@/lib/shema";
import axios from "axios";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";
// import  bcrypt from 'bcryptjs'
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

    const response = await prisma.user.create({
        data: {
            name: firstName + ' ' + lastName,
            email,
            password: encryptedPassword
        }
    })
    // console.log(response);

    return NextResponse.json({ success: 'new user created successful' })
}