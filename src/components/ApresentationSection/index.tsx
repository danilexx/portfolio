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
import OffsetedLink from "../OffsetedLink";

const ApresentationSection = () => {
  return (
    <Container>
      <WhiteLogo />
      <Main>
        <Title>
          Olá, me chamo Danilo
          <br /> e sou desenvolvedor web
        </Title>
        <OffsetedLink to="about">
          <SectionButton>
            <Cube />
            Proxima Seção
          </SectionButton>
        </OffsetedLink>
      </Main>
      <PrimaryStroke />
      <SecondaryStroke />
    </Container>
  );
};
export default ApresentationSection;
