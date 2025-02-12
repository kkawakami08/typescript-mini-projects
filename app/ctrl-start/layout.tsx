import { Metadata } from "next";
import Nav from "@/components/ctrl-start/Nav";

export const metadata: Metadata = {
  title: "Ctrl + Start",
  description: "Find your next favorite video game",
  icons: {
    icon: "/favicons/ctrl-start.ico",
  },
};

const CtrlStartLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className={`min-h-screen bg-ctrl-start-green-700 p-5`}>
      <Nav />
      <main className="font-sans">{children}</main>
    </section>
  );
};

export default CtrlStartLayout;
