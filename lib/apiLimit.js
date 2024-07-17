import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import prisma from './prismaClient'
// import auth
export async function tokenData() {
    const { user } = await getServerSession(authOptions)

    const userTokens = await prisma.user.findFirst({
        where: {
            id: user.id
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
    console.log(userTokens);
    return userTokens
}
export async function increaseTokensUsed(tokenCount) {
    const userTokens = await tokenData()
    const usedTokens = userTokens.tokensUsed + tokenCount
    const res = await prisma.user.update({
        where: {
            id: userTokens.id
        },
        data: {
            tokensUsed: usedTokens
        }
    })

}
export async function checkTokenLimit() {
    const userTokens = await tokenData()

    if (userTokens.tokensUsed < userTokens.tier.tokens && new Date() < userTokens.tokensExpireAt) {
        console.log('valid tokens remain');
        return true
    } else {
        console.log('valid tokens over');

        return false
    }
}
// export async function increaseTokenAvailable(tokenCount) {
//     const userTokens = await tokenData()
//     const usedTokens = userTokens. + tokenCount
//     const res = await prisma.user.update({
//         where: {
//             id: userTokens.id
//         },
//         data: {
//             tokensUsed: usedTokens
//         }
//     })

// }
export async function changeTokenTier(tierId) {
    const userTokens = await tokenData()
    const res = await prisma.user.update({
        where: {
            id: userTokens.id
        },
        data: {
            tierId: tierId
        }
    })

}
