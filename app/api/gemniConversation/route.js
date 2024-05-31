import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";


const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GEMINI_API_KEY);

export async function POST(req) {
    try {
        const body = await req.json();
        const { messages } = body;

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const chat = model.startChat({
            history: messages,
            generationConfig: {
                maxOutputTokens: 100,
            },
        });
        console.log(messages);
        console.log({ 'data': messages[messages.length - 1].parts[0].text });
        const msg = "what do u say?";

        const result = await chat.sendMessage(msg);
        const response = result.response;
        const text = response.text();
        console.log(text);
        return NextResponse.json(response.text(), { status: 200 });
        // return NextResponse.json({ dude: 'dude' }, { status: 200 });

    } catch (error) {
        console.log('[CONVERSATION_ERROR]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }


}