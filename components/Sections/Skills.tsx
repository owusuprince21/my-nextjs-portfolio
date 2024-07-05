import React from "react";
import Title from "../Title";
import { STACK } from "../../constants/stack";

const Skills = () => {
  const skillStyle = `px-2 py-2 flex items-center w-[170px] rounded-[9999px] justify-center shadow-lg shadow-gray-300'`;
  return (
    <section
      id="skills"
      className="w-full mb-20 py-10 snap-y scroll-mt-[7.5em]"
    >
    <Title label="My Skills"/>
      <section className="grid grid-cols-2 place-items-center md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 text-xl mt-10">
        {
          STACK.map((stack) => {
            const { name } = stack
            return (
              <div key={name} className={skillStyle}>
                <p className="px-2">{name}</p>
                <stack.icon />
              </div>

            )
          })
        }
             </section>
    </section>
  );
};

export default Skills;
