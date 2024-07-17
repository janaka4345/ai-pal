import { checkTokenLimit, increaseTokensUsed } from '@/lib/apiLimit'
import { NextResponse } from 'next/server'
// import { Configuration, OpenAIApi } from "openai";
import OpenAI from 'openai'

// const configuration = new Configuration({
//     apiKey: process.env.OPENAI_API_KEY,
// });

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // This is the default and can be omitted
})

// const openai = new OpenAIApi(configuration);

export async function POST(req) {
    const isTokensValid = await checkTokenLimit()
    console.log({ isTokensValid });
    if (!isTokensValid) {
        return new NextResponse({ error: 'Your valid tokens are over.Please purchase new tokens' }, { status: 500 })

    }
    try {
        // const { userId } = auth();
        const body = await req.json()
        const { messages } = body
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
            messages,
            // stream: true,TODO straming text next docs for routex check
            model: 'gpt-3.5-turbo',
        })

        // if (!isPro) {
        //     await incrementApiLimit();
        // }

        console.log('ran try')
        await increaseTokensUsed(parseInt(process.env.TOKEN_USAGE_FOR_CONVERSATIONS))

        return NextResponse.json(response.choices[0].message, { status: 200 })
    } catch (error) {
        // console.log('ran catch');

        // console.log('[CONVERSATION_ERROR]', error);
        return new NextResponse(error, { status: 500 })
    }
}
