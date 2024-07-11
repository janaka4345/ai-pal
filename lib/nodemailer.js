import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASS
    }


})

export const emailOption = {
    from: ' J_ Keyy<ashnazg1212@gmail.com>',
    to: 'janakchamantha12@gmail.com'
}