import type { Metadata } from "next";
import { Inter,Gruppo } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";
import Analytics from "./_components/Analytics";

const inter = Inter({ subsets: ["latin"] });
const logo = Gruppo({ weight: '400', subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Meu número da sorte na Mega Sena",
  description: "Gere seu número da sorte na Mega Sena",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <Analytics />
        </Suspense>
        <header className="container flex justify-center mx-auto">
          <h1 className={`${logo.className} flex flex-row text-center mx-auto my-5 text-violet-500 text-7xl`}>Ganha Sena</h1>
        </header>
        {children}
      </body>
    </html>
  );
}
