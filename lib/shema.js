import { z } from "zod"

export const formSchema = z.object({
    message: z.string().min(1, { message: 'message is required' }).max(50, { message: 'message is too long' }),
})
