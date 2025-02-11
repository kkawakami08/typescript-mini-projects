import { Monomaniac_One } from "next/font/google";
import { Metadata } from "next";
import Nav from "@/components/ctrl-start/Nav";

const monomaniacOne = Monomaniac_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "React & Typescript Projects",
  description: "Mini projects to help me master React with Typescript",
};

const CtrlStartLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={` ${monomaniacOne.className} antialiased`}>
        <Nav />
        <main className="font-sans">{children}</main>
      </body>
    </html>
  );
};

export default CtrlStartLayout;
