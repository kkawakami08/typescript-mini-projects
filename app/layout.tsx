import type { Metadata } from "next";
import { Monomaniac_One } from "next/font/google";
import "./globals.css";

const monomaniacOne = Monomaniac_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "React & Typescript Projects",
  description: "Mini projects to help me master React with Typescript",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${monomaniacOne.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
