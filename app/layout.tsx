import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dmsans",
});

export const metadata: Metadata = {
  title: "Squaree",
  description: "Challenge Spikes by @0xEzis | Realised by FISS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${manrope.className} ${dmsans.variable}`}>
        {children}
      </body>
    </html>
  );
}
