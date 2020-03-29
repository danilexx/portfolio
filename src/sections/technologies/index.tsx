import React from "react";
import Section from "src/components/Section";
import Header from "src/components/Header";
import TechnologyCard, {
  TechnologiesGrid
} from "src/components/TechnologyCard";

const projects = [
  {
    name: "React",
    description:
      "Meu primeiro Framework JS, é de longe a tecnologia que eu mais utilizei para desenvolvimento até hoje.",
    imgUrl: "/icons/tech/react.svg"
  },
  {
    name: "React Native",
    description:
      "Framework JS para construção de interfaces nativas utilizando o eco-sistema react, facilita o desenvolvimento e é multiplataforma",
    imgUrl: "/icons/tech/react-native.svg"
  },
  {
    name: "NodeJS",
    description:
      "Interpetrador de Javascript para Servidores, minha primeira experiencia com servidores, HTTP Rest e WebSocket",
    imgUrl: "/icons/tech/nodejs.svg"
  },
  {
    name: "React",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra lorem lacus feugiat vel a.",
    imgUrl: "/icons/tech/react.svg"
  },
  {
    name: "React",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra lorem lacus feugiat vel a.",
    imgUrl: "/icons/tech/react.svg"
  },
  {
    name: "React",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas viverra lorem lacus feugiat vel a.",
    imgUrl: "/icons/tech/react.svg"
  }
];

const Technologies = () => (
  <Section name="technologies">
    <Header
      title="Tecnologias"
      subTitle="Essas são as tecnologias/linguagens que eu utilizo nos meus projetos"
    />
    <TechnologiesGrid>
      {projects.map((technology, index) => (
        <TechnologyCard key={index} technology={technology} />
      ))}
    </TechnologiesGrid>
  </Section>
);

export default Technologies;
