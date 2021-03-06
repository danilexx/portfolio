import React from "react";

import {
  Container,
  TechnologyImage,
  TechnologyName,
  TechnologyDescription
} from "./styles";

export { TechnologiesGrid } from "./styles";

interface Technology {
  name: string;
  imgUrl: string;
  description: string;
}

const TechnologyCard: React.FC<{
  technology: Technology;
}> = ({ technology: { imgUrl, name, description } }) => (
  <Container>
    <TechnologyImage src={imgUrl} />
    <TechnologyName>{name}</TechnologyName>
    <TechnologyDescription>{description}</TechnologyDescription>
  </Container>
);

export default TechnologyCard;
