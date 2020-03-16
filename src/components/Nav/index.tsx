/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Links, Link, FilledLogo, Wrapper } from "./styles";

const Nav = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="about" spy={false}>
          <FilledLogo />
        </Link>

        <Links>
          <Link to="about">Sobre</Link>
          <Link to="projects">Projetos</Link>
          <Link to="technologies">Tecnologias</Link>
          <Link to="contact">Contato</Link>
        </Links>
      </Container>
    </Wrapper>
  );
};

export default Nav;
