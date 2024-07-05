import React from "react";
import ProjectCard from "../Cards/ProjectCard";
import Title from "../Title";
import { PROJECTS } from "../../constants/projects";

const Projects = () => {
  return (
    <section id="projects" className=" py-10 pb-20 snap-y scroll-mt-[6em]">
      <Title label="My Works" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20   mt-10">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.name}
            name={project.name}
            description={project.desc}
            src={project.imgSrc}
            link={project.siteLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
