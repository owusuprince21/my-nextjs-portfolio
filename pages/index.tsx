import FooterBanner from "../components/Footer/banner";
import MetaHead from "../components/MetaHead";
import About from "../components/Sections/About";
import Hero from "../components/Sections/Hero";
import Skills from "../components/Sections/Skills";
import Testimonials from "../components/Sections/Testimonials";
import WhatIDo from "../components/Sections/WhatIDo";
import Projects from "../components/Sections/Works";

export default function Home() {
  return (
    <>
      <MetaHead />
      <Hero />
      <WhatIDo />
      <About />
      <Projects />
      <Testimonials />
      <Skills />
      <FooterBanner />
    </>
  );
}
