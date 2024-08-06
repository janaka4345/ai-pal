import VerificationEmail from "@/emails/VerificationEmail";
import { generateToken } from "@/lib/generateToken";
import { transporter } from "@/lib/nodemailer";
import prisma from "@/lib/prismaClient";
import { passwordTokenSchema } from "@/lib/shema";
import { render } from "@react-email/components";
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
    const emailHtml = render(<VerificationEmail validationCode={token} />);
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

        await transporter.sendMail({
            from: 'J_ Keyy<ashnazg1212@gmail.com>',
            to: email,
            subject: "Verify your Email with AI-PAL", // Subject line
            text: "use the verificatio ntoken below tp verify your Email with AI-PAL", // plain text body
            html: emailHtml, // html body
        })

        return NextResponse.json({ success: 'new password token has been sent successfuly' })
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'something went wrong' })

    }

}