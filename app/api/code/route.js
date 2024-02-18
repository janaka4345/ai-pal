import { NextResponse } from "next/server";
// import { Configuration, OpenAIApi } from "openai";
import OpenAI from "openai";

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
});

// const openai = new OpenAIApi(configuration);

export async function POST(req) {
    try {
        // const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        const instructions = {
            role: 'system',
            content: 'you are a code generator. you must answer only in markdown code snippets. Use code comments for explanations. use markdown for other conversations and code explanations '

        }
        // if (!userId) {
        //     return new NextResponse("Unauthorized", { status: 401 });
        // }

        // if (!configuration.apiKey) {
        //     return new NextResponse("OpenAI API Key not configured.", { status: 500 });
        // }

        // if (!messages) {
        //     return new NextResponse("Messages are required", { status: 400 });
        // }

        // const freeTrial = await checkApiLimit();
        // const isPro = await checkSubscription();

        // if (!freeTrial && !isPro) {
        //     return new NextResponse("Free trial has expired. Please upgrade to pro.", { status: 403 });
        // }

        const response = await openai.chat.completions.create({
            // model: "gpt-3.5-turbo",
            // messages
            // messages: [{ role: 'user', content: messages }],
            messages: [instructions, ...messages],
            model: 'gpt-3.5-turbo',
        });

        // if (!isPro) {
        //     await incrementApiLimit();
        // }

        return NextResponse.json(response.choices[0].message, { status: 200 });
    } catch (error) {
        console.log('[CODE_ERROR]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
};