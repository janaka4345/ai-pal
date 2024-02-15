import { z } from "zod"

export const promptSchema = z.object({
    message: z.string().min(1, { message: 'message is required' }).max(50, { message: 'message is too long' }),
})

export const codePromptSchema = z.object({
    prompt: z.string().min(1, { message: 'prompt is required' }).max(50, { message: 'prompt is too long' }),
})
