import React from "react";
import Title from "../Title";

const About = () => {
  return (
    <section id="about" className=" w-full mb-20 py-10 snap-y scroll-mt-[6em]">
      <Title label="About Me" />
      <p className="align-justify text-[18px] leading-[1.8em]  md:leading-[2em] md:text-xl ">
        I am a creative and detail-oriented frontend developer specializing in crafting engaging user interfaces and seamless user experiences. With more than 4 years of experience in frontend development, I am proficient in translating design concepts into responsive and interactive web applications. My passion lies in leveraging the latest web technologies to deliver intuitive solutions that meet client objectives.
        I am a passionate and detail-oriented software developer with years of experience in creating robust code for various applications. My expertise lies in
        mainly JAVASCRIPT as a language and its framework and libraries that is NODEJS, EXPRESSJS, REACT AND NEXTJS, MONGODB and other libraries.
        My goal is to craft clean and efficient solutions that enhance user experience and meet business objectives.
        <br />
      </p>
    </section>
  );
};

export default About;
