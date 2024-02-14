import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Will you be my valentine?",
  authors: { name: "Totti Rdz", url: "https://github.com/totti-rdz/" },
  description: "NEXT.js 14 project for valentines day inspired by Mewtru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="h-screen bg-pink-200 p-5">{children}</div>
      </body>
    </html>
  );
}
