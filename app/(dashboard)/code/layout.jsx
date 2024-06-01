import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function layout({children}) {
  return (
    <>
    <nav className="flex flex-row gap-2 fixed">
   <Link className={cn(buttonVariants({variant:'link'}))} href='/code/gemini'>gemini code</Link>
   <Link className={cn(buttonVariants({variant:'link'}))} href='/code/openai'>openai code</Link>
    </nav>
   {children}
    </>
  )
}