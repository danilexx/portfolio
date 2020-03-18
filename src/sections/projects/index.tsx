import React from "react";
import Section from "src/components/Section";
import Header from "src/components/Header";
import ProjectCard, { ProjectsGrid } from "src/components/ProjectCard";

const projects = [
  {
    name: "Whittoeft",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra lorem lacus feugiat vel a. Amet diam neque cursus non eget et convallis. Morbi sed.",
    imgUrl: "/images/whittoeft.png"
  },
  {
    name: "Whittoeft",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra lorem lacus feugiat vel a. Amet diam neque cursus non eget et convallis. Morbi sed.",
    imgUrl: "/images/whittoeft.png"
  },
  {
    name: "Whittoeft",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra lorem lacus feugiat vel a. Amet diam neque cursus non eget et convallis. Morbi sed.",
    imgUrl: "/images/whittoeft.png"
  },
  {
    name: "Whittoeft",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra lorem lacus feugiat vel a. Amet diam neque cursus non eget et convallis. Morbi sed.",
    imgUrl: "/images/whittoeft.png"
  }
];

const Projects = () => (
  <Section name="projects">
    <Header
      title="Projetos"
      subTitle="Esses sãos os projetos que eu desenvolvi no meu processo de aprendizagem"
    />
    <ProjectsGrid>
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </ProjectsGrid>
  </Section>
);

export default Projects;
