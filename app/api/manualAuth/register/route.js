import VerificationEmail from "@/emails/VerificationEmail";
import { generateToken } from "@/lib/generateToken";
import { transporter } from "@/lib/nodemailer";
import prisma from "@/lib/prismaClient";
import { registerFormSchema } from "@/lib/shema";
import { render } from "@react-email/components";
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
    const { token, expires } = generateToken()

    try {
        await prisma.user.create({
            data: {
                name: firstName + ' ' + lastName,
                email,
                password: encryptedPassword,
                tierId: process.env.FREE_TIER_ID,
            }
        })
        await prisma.verificationToken.create({
            data: {
                email,
                token,
                expires
            }
        })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'something went wrong' })

    }    // console.log(response);
    try {
        const emailHtml = render(<VerificationEmail validationCode={token} />);
        await transporter.sendMail({
            from: 'J_ Keyy<ashnazg1212@gmail.com>',
            to: email,
            subject: "Verify your Email with AI-PAL", // Subject line
            text: "use the verificatio ntoken below tp verify your Email with AI-PAL", // plain text body
            html: emailHtml, // html body
        })

        return NextResponse.json({ success: 'New user created.please verify your email' })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'Could not sen the verification email.Try again Later' })

    }

}