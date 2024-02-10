"use client";
import { signIn, signOut, useSession } from "next-auth/react";
export default function LandingPage() {
  const session = useSession();
  return (
    <>
      <div>Landingp page</div>

      <pre>{JSON.stringify(session, null, 2)}</pre>
    </>
  );
}
