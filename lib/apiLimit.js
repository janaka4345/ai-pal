import { MAX_FREE_DOLLARS } from '@/constants'
import prisma from './prismaClient'
// import auth

export async function apiLimitIncrease(dollars) {
    console.log('hiya')
    const userId = 'userid'
    if (!userId) {
        return false
    }
    const userApiLimit = await prisma.UserApiLimit.findUnique({
        where: {
            userId,
        },
    })

    if (userApiLimit) {
        const response = await prisma.UserApiLimit.update({
            where: {
                userId,
            },
            data: {
                count: userApiLimit.count + dollars,
            },
        })
        return null
    }
    const response = await prisma.UserApiLimit.create({
        data: {
            userId: userId,
            count: dollars,
        },
    })
}
export async function checkApiLimit() {
    console.log('hiya2')

    const userId = 'userid'

    if (!userId) {
        return false
    }

    const userApiLimit = await prisma.UserApiLimit.findUnique({
        where: {
            userId,
        },
    })
    if (!userApiLimit || userApiLimit.count < MAX_FREE_DOLLARS) {
        return true
    } else {
        return false
    }
}
