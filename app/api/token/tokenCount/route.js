import prisma from "@/lib/prismaClient";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET(req, res) {
    const { user } = await getServerSession(authOptions)
    console.log(user);
    // console.log(req);
    const url = new URL(req.url)
    const userId = url.searchParams.get('id')
    // console.log(userId);

    try {
        const response = await prisma.user.findFirst({
            where: {
                id: userId
            },
            select: {
                id: true,
                tokensUsed: true,
                tokensExpireAt: true,
                tier: {
                    select: {
                        tokens: true
                    }
                }
            }
        })

        if (user.id === userId) {
            // anyone who is logged in can not access user data 
            return NextResponse.json(response)

        } else {
            return NextResponse.json({ error: 'restricted access' })
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: 'something went wrong' }, { status: 500 })

    }

}