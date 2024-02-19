import { z } from "zod"

export const promptSchema = z.object({
    message: z.string().min(1, { message: 'message is required' }).max(50, { message: 'message is too long' }),
})

export const codePromptSchema = z.object({
    prompt: z.string().min(1, { message: 'Prompt is required' }).max(50, { message: 'prompt is too long' }),
})

export const imagePromptSchema = z.object({
    imagePrompt: z.string().min(1, { message: 'Image prompt is required' }).max(50, { message: 'prompt is too long' }),
    amount: z.string().min(1, { message: 'Should generate at least one image' }),
    resolution: z.string().min(1, { message: 'Resolution is required' })
})
export const musicPromptSchema = z.object({
    musicPrompt: z.string().min(1, { message: 'music prompt is required' }).max(50, { message: 'prompt is too long' }),

})


