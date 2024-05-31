import NavBar from "@/components/custom/NavBar";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import SessionProvider from "./api/auth/_components/SessionProvider";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI Pal",
  description: "Your Custom AI Pal",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
          <NavBar />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
