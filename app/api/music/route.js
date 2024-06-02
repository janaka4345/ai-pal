import { NextResponse } from 'next/server'
import Replicate from 'replicate'

const replicate = new Replicate({
    auth: process.env.REPLICATE_API_TOKEN,
})
export async function POST(req) {
    try {
        // const { userId } = auth();
        const body = await req.json()
        const { musicPrompt } = body
        console.log(musicPrompt)
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

        const response = await replicate.run(
            'riffusion/riffusion:8cf61ea6c56afd61d8f5b9ffd14d7c216c0a93844ce2d82ac1c9ecc9c7f24e05',
            {
                input: {
                    alpha: 0.5,
                    prompt_a: musicPrompt,
                    prompt_b: "90's rap",
                    denoising: 0.75,
                    seed_image_id: 'vibes',
                    num_inference_steps: 50,
                },
            }
        )
        console.log(response)
        console.log(response)
        // if (!isPro) {
        //     await incrementApiLimit();
        // }

        return NextResponse.json(response, { status: 200 })
    } catch (error) {
        console.log('[MUSIC_ERROR]', error)
        return new NextResponse('Internal Error', { status: 500 })
    }
}
