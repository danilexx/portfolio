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
      "Framework/Biblioteca moderna para construção de interfaces interativas na Web utilizando javascript",
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
