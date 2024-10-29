import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACTS } from "../../constants/contact";
import { TypeAnimation } from 'react-type-animation';


const Hero = () => {
  const styles = {
    // height: "calc(100dvh - 0em)",
    background: "rgba(169, 169, 169, 0.2)",
    
  };

  return (
    <section className="overflow-hidden lg:h-[100dvh] flex flex-col lg:flex-row gap-4 mb-20 py-10 justify-evenly items-center ">
      <div
        style={{ background: styles.background }}
        className="rounded-full max-w-[30em] overflow-clip max-h-[30em] w-[20em] h-[20em] sm:w-[30em] sm:h-[30em] p-6"
      >
        <Image
          className="w-full h-full object-cover rounded-full"
          src="/logo1.png"
          alt="Prince Owusu Avator Picture"
          width={300}
          height={300}
        />
      </div>
      <section className="w-full lg:w-[650px] flex flex-col gap-3 ">
        {/* <p className="font-semibold text-lg opacity-60 ">
          Software Developer 
        </p> */}

        <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'A Software Developer',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'From Ghana West Africa',
        1000,
        'I am a passionate Software Developer',
        1000,
        'I create responsive and dynamic web Apps',
            1000,
            'Proficient in JavaScript, React, and Node.js',
            1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
        <h3 className="gradient-text text-4xl font-bold tracking-wider">
          PRINCE OWUSU
        </h3>
        <h3 className="md:text-xl text-[18px] font-medium">
        I am a creative and detail-oriented frontend developer specializing in crafting engaging user interfaces and seamless user experiences. With more than 3 years of experience in frontend development, I am proficient in translating design concepts into responsive and interactive web applications. My passion lies in leveraging the latest web technologies to deliver intuitive solutions that meet client objectives.
        </h3>
        <div className="flex gap-6 pb-4">
          {CONTACTS.map((contact, index) => {
            return (
              <Link key={index} href={contact.link} style={{color: contact.color}}>
                <contact.icon size={28} />
              </Link>
            );
          })}
        </div>
        <div className="flex gap-4 text-[16px] md:text-xl">
          <Link className="gradient-border-button" target="_blank" href="/resume.pdf">
            Download CV
          </Link>
          {/* <Link
            style={{ background: styles.background }}
            href="/contact"
            className="py-[10px] px-6 hero-link"
          >
            Hire Me &rarr;
          </Link> */}
        </div>
      </section>
    </section>
  );
};

export default Hero;
