import React from "react";
import Section from "src/components/Section";
import Header from "src/components/Header";
import ProjectCard, { ProjectsGrid } from "src/components/ProjectCard";

const projects = [
  {
    name: "Minicardo",
    description:
      "Minha entrada para o Hackathon 2020 COVID19 da shawee, desenvolvi o frontend em nextjs (react) e o backend and nodejs, se trata de uma rede social para comercios pequenos.",
    imgUrl: "/images/minicardo.png",
    demo: "https://minicardo.now.sh",
    code: "https://github.com/danilexx/minicardo"
  },
  {
    name: "Wittoeft",
    description:
      "Um eCommerce de roupas, desenvolvido para o trabalho de conclusão de curso da ETEC de Ferraz de Vasconcelos, utiliza Server Side Rendering (NextJs) no frontend e NodeJs no backend.",
    imgUrl: "/images/witthoeft.png",
    demo: "https://witthoeft.now.sh",
    code: "https://github.com/danilexx/witthoeft"
  },
  {
    name: "Fastfeet",
    description:
      "Projeto final do curso online GoStack da Rocketseat, esse projeto é sobre uma entregadora, contando com um site interativo para os administradores, um servidor, e um applicativo mobile para os entregadores.",
    imgUrl: "/images/fastfeet.png",
    // demo: "https://witthoeft.now.sh",
    code: "https://github.com/danilexx/fastfeet"
  },
  {
    name: "Covid Brasil",
    description:
      "Um projeto feito na epoca do COVID-19, desenvolvido utilizando uma API externa, o foco do projeto é ser um site simples e rapido para se olhar o estado atual do Coronavirus nos estados brasileiros.",
    imgUrl: "/images/covidbr.png",
    demo: "https://covidbr.now.sh",
    code: "https://github.com/danilexx/covidbr"
  }
  // {
  //   name: "Whittoeft",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra lorem lacus feugiat vel a. Amet diam neque cursus non eget et convallis. Morbi sed.",
  //   imgUrl: "/images/whittoeft.png"
  // }
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
