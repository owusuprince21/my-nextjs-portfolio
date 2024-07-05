import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project } from "../../interfaces";
// import { MdArrowForwardIos } from "react-icons/md";
import { BiChevronRightCircle } from "react-icons/bi";

const ProjectCard: FC<Project> = ({ src, description, name, link }) => {
  const Title = 'More'
  return (
    <section
      style={{ background: "rgba(17, 25, 40, 0.37)" }}
      className="min-w-[200px]  relative  rounded-2xl overflow-hidden shadow-2xl  "
    >
      <Image
        src={src}
        width={400}
        height={400}
        alt={name}
        className=" opacity-80 lg:h-[300px] object-cover bg-contain w-full"
      />
      <article className="px-6 py-8 relative leading-[2em] ">
        <h3 className="font-semibold text-xl">{name}</h3>
        <p>{description}</p>

        <Link
          href={link}
          className=" absolute top-4 right-4 p-2 md:p-3 border rounded-lg"
        >
          {/* <MdArrowForwardIos size={28} /> */}
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <BiChevronRightCircle size={28}  style={{ marginRight: '8px' }} />
          <span>Visit</span>
    </div>
        </Link>
      </article>
    </section>
  );
};

export default ProjectCard;
