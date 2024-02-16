import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Will you be my valentine?",
  authors: { name: "Totti Rdz", url: "https://github.com/totti-rdz/" },
  description: "NEXT.js 14 project for valentines day inspired by Mewtru",
  icons: "/favicon.svg",
  metadataBase: new URL("https://sweet-valentine.vercel.app"),
  openGraph: {
    description: "Respond to my Valentine's card for a sweet surprise",
    images: [
      {
        url: "/sweet-valentine.jpg",
        width: 700,
        height: 400,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* maybe instead of this approach use a wrapper around children with 100svh and use empty space for footer */}
        <div className="h-[100lvh] bg-pink-200 p-5 pb-[calc(100lvh-100svh+20px)]">
          {children}
        </div>
        <div className="bg-pink-200 px-2 text-right">
          gifs by{" "}
          <a
            href="https://www.instagram.com/milkmochabear"
            className="text-pink-500"
          >
            @milkmochabear
          </a>
        </div>
      </body>
      <Analytics />
    </html>
  );
}
