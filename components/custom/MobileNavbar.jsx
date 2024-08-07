import { Button, buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet'
import { menuItems } from '@/lib/constants'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function MobileNavbar() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <button
                    type="button"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 md:order-2 md:hidden"
                    aria-controls="navbar-sticky"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="h-5 w-5"
                        fill="none"
                        aria-hidden="true"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>
            </SheetTrigger>
            <SheetContent className="flex flex-col gap-4" side="left">
                {menuItems.map((menuItem, i) => (
                    <SheetClose key={i} asChild>
                        <Link
                            className={cn(
                                buttonVariants({ variant: 'secondary' })
                            )}
                            href={menuItem.path}
                        >
                            {menuItem.name}
                        </Link>
                    </SheetClose>
                ))}
            </SheetContent>
        </Sheet>
    )
}
