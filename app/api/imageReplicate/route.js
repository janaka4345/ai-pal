import { NextResponse } from "next/server";
import Replicate from "replicate";


const replicate = new Replicate(
    //     {
    //     auth:apikey
    // }
);
export async function POST(req) {
    try {
        // const { userId } = auth();
        const body = await req.json();
        const { imagePrompt, amount, resolution } = body;
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
            "stability-ai/sdxl:39ed52f2a78e934b3ba6e2a89f5b1c712de7dfea535525255b1aa35c5565e08b",
            {
                input: {
                    prompt: imagePrompt,
                    num_outputs: parseInt(amount, 10),
                    width: parseInt(resolution, 10),
                    height: parseInt(resolution, 10),
                }
            }
        );
        // if (!isPro) {
        //     await incrementApiLimit();
        // }

        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        console.log('[IMAGE_ERROR]', error);
        return new NextResponse("Internal Error", { status: 500 });
    }
};