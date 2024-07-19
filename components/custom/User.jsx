import { cn } from '@/lib/utils'
import { getServerSession } from 'next-auth'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { buttonVariants } from '../ui/button'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'

export default async function User() {
    const session = await getServerSession(authOptions)
    // console.log({ session })

    if (session?.user) {
        // console.log(session)
        return (
            <>
                <Link
                    href="/dashboard"
                    className={cn(buttonVariants(), 'ml-auto mr-4')}
                >
                    Dashboard
                </Link>
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Avatar className="cursor-pointer">
                            <AvatarImage
                                src={session?.user.image}
                                alt="avatar"
                            />
                            <AvatarFallback alt="avatar">
                                {session?.user.name}
                            </AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <Link href="/#">Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#">Billing</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="#">Settings</Link>
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>
                            <Link href="/api/auth/signout">Log out</Link>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </>
        )
    } else {
        return (
            <div className="mx-2 flex w-full flex-row items-center justify-center gap-2 md:mx-4">
                <Link
                    href="/auth/register"
                    className={cn(
                        buttonVariants({ variant: 'default' }),
                        'ml-auto'
                    )}
                >
                    Register
                </Link>
                <Link
                    href="/auth/signin"
                    className={cn(buttonVariants({ variant: 'default' }))}
                >
                    Log In
                </Link>
            </div>
        )
    }
}
