import React, { FC } from "react";
import Header from "../Header";
import Footer from "../Footer";
import FAB from "../FAB";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { SiBuymeacoffee } from "react-icons/si";

const Layout: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative scroll-smooth select-none">
      <FAB icon={<><SiBuymeacoffee /></>} title="Buy Me a Coffee"/>
      <Header />
      <section className="max-w-7xl px-6 lg:px-4 mx-auto">
        {children}
        <Analytics />
        <SpeedInsights/>
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
