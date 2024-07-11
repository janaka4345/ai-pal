import { z } from 'zod'

export const promptSchema = z.object({
    message: z
        .string()
        .min(1, { message: 'message is required' })
        .max(50, { message: 'message is too long' }),
})

export const codePromptSchema = z.object({
    prompt: z
        .string()
        .min(1, { message: 'Prompt is required' })
        .max(50, { message: 'prompt is too long' }),
})

export const imagePromptSchema = z.object({
    imagePrompt: z
        .string()
        .min(1, { message: 'Image prompt is required' })
        .max(50, { message: 'prompt is too long' }),
})
export const musicPromptSchema = z.object({
    musicPrompt: z
        .string()
        .min(1, { message: 'music prompt is required' })
        .max(50, { message: 'prompt is too long' }),
})


export const userAuthformSchema = z.object({
    email: z.string().email({ message: 'Invalid email format' }).min(2, { message: 'email is required' }).max(50, { message: 'email is too long' }),
    password: z.string().min(2, { message: 'password is required' }).min(8, { message: 'must be more than 8 characters long' }).max(50, { message: 'password is too long' }),
})

export const verificationTokenSchema = z.object({
    email: z.string().email()
})

export const registerFormSchema = z.object({
    firstName: z
        .string()
        .trim() // Remove leading/trailing whitespace
        .min(1, { message: 'First name is required' }),
    lastName: z
        .string()
        .trim()
        .min(1, { message: 'Last name is required' }),
    email: z
        .string()
        .email({ message: 'Invalid email format' })
        .trim(),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' }),
    confirmPassword: z
        .string()
        .trim(),
    terms: z.boolean().refine((value) => value === true, "Must agree to terms and conditio9ns"), // Optional checkbox with default unchecked
});