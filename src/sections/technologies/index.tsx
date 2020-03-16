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
    <Header title="Tecnologias" subTitle="algo sobre mim" />
    <TechnologiesGrid>
      {projects.map((technology, index) => (
        <TechnologyCard key={index} technology={technology} />
      ))}
    </TechnologiesGrid>
  </Section>
);

export default Technologies;
