"use client";
import { buttonVariants } from "@/components/ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function LandingPage() {
  const session = useSession();
  return (
    <>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <div>Landingp page</div>
      <Link className={buttonVariants()} href="/dashboard">
        dashboard
      </Link>
      <br />
      <Link href="/authtestroute">auth test route</Link>
      <br />
      
    </>
  );
}
