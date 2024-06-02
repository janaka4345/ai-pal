import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextResponse } from 'next/server'

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY)

export async function POST(req) {
    try {
        const body = await req.json()
        const { messages } = body

        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

        const chat = model.startChat({
            history: messages,
            generationConfig: {
                maxOutputTokens: 100,
            },
        })

        const msg = ''

        const result = await chat.sendMessage(msg)
        const response = result.response
        console.log(response)
        return NextResponse.json(
            { role: 'model', parts: [{ text: response.text() }] },
            { status: 200 }
        )
    } catch (error) {
        console.log('[CONVERSATION_ERROR]', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}
