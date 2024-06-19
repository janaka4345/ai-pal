import { getServerSession } from 'next-auth'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'

export default async function User() {
    const session = await getServerSession()
    console.log(session)
    return (
        <>
            {session?.user ? (
                <Avatar>
                    <AvatarImage src={session?.user.image} alt="avatar" />
                    <AvatarFallback alt="avatar">AV</AvatarFallback>
                </Avatar>
            ) : (
                <Button>log In</Button>
            )}
        </>
    )
}
