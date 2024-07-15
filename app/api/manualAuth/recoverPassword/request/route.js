import PasswordResetEmail from "@/emails/PasswordResetEmail";
import { generateToken } from "@/lib/generateToken";
import { transporter } from "@/lib/nodemailer";
import prisma from "@/lib/prismaClient";
import { recoverPasswordSchema } from "@/lib/shema";
import { render } from "@react-email/components";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    const { values } = await req.json()
    const validatedFields = recoverPasswordSchema.safeParse(values)

    if (!validatedFields.success) {
        return NextResponse.json({ error: 'Invalid Email Address' })

    }
    const { email } = validatedFields.data

    const existingUser = await prisma.user.findFirst({
        where: {
            email: email
        },
        select: {
            emailVerified: true,
            password: true
        }
    })

    if (existingUser.emailVerified && existingUser.password) {
        const { token, expires } = generateToken()
        try {
            await prisma.passwordToken.upsert({
                where: {
                    email,
                },
                update: {
                    token,
                    expires,
                },
                create: {
                    email,
                    token,
                    expires
                },
            })

            const emailHtml = render(<PasswordResetEmail validationCode={token} />);
            await transporter.sendMail({
                from: 'J_ Keyy<ashnazg1212@gmail.com>',
                to: email,
                subject: "Recover Your password  with AI-PAL", // Subject line
                text: "use the verification token below to reset your password with AI-PAL", // plain text body
                html: emailHtml, // html body
            })

        } catch (error) {
            console.log(error);
            return NextResponse.json({ error: 'Something went wrong' })


        }
        console.log({ token, expires });
    }
    return NextResponse.json({ success: 'Check your provided Email for a verification Code' })
}