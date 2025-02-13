import { Metadata } from "next";
import Nav from "@/components/ctrl-start/Nav";
import Aside from "@/components/ctrl-start/Aside";
import GlobalProvider from "@/context/GlobalContext";

export const metadata: Metadata = {
  title: "Ctrl + Start",
  description: "Find your next favorite video game",
  icons: {
    icon: "/favicons/ctrl-start.ico",
  },
};

const CtrlStartLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <GlobalProvider>
      <section
        className={`min-h-screen bg-ctrl-start-green-700 p-5 lg:p-0 lg:grid lg:grid-cols-7  xl:grid-cols-[11rem,11rem,1fr]`}
      >
        <Aside />
        <Nav />
        <main className="font-sans lg:col-start-3 lg:col-span-5 lg:px-10 lg:py-5 ">
          {children}
        </main>
      </section>
    </GlobalProvider>
  );
};

export default CtrlStartLayout;
