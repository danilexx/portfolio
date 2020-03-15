import React from "react";
import {
  Container,
  WhiteLogo,
  Main,
  Title,
  SectionButton,
  Cube,
  PrimaryStroke,
  SecondaryStroke
} from "./styles";

const ApresentationSection = () => {
  return (
    <Container>
      <WhiteLogo />
      <Main>
        <Title>
          Olá, me chamo Danilo
          <br /> e sou desenvolvedor web
        </Title>
        <SectionButton>
          <Cube />
          Proxima Seção
        </SectionButton>
      </Main>
      <PrimaryStroke />
      <SecondaryStroke />
    </Container>
  );
};
export default ApresentationSection;
