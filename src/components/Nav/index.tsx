/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Container,
  Links,
  Link,
  FilledLogo,
  Wrapper,
  MenuWrap,
  BurguerMenu,
  MenuLink
} from "./styles";
import { slide as Menu } from "react-burger-menu";
import { useMedia, useToggle } from "react-use";

const Nav = () => {
  const isSmall = useMedia("(max-width: 480px)");
  const isSuperSmall = useMedia("(max-width: 480px)");
  const [isMenuOpened, toggleMenu] = useToggle(false);
  const handleStateChange = React.useCallback(state => {
    toggleMenu(state.isOpen);
  }, []);
  React.useEffect(() => {
    if (isMenuOpened && !isSmall) {
      toggleMenu(false);
    }
  }, [isMenuOpened, isSmall]);
  return (
    <>
      <Wrapper>
        <Container>
          <MenuLink to="about" spy={false}>
            <FilledLogo />
          </MenuLink>
          <MenuWrap>
            <Menu
              width={isSuperSmall && isMenuOpened ? "80%" : "300px"}
              onStateChange={handleStateChange}
              isOpen={isMenuOpened}
              right
            >
              <Link to="about">Sobre</Link>
              <Link to="projects">Projetos</Link>
              <Link to="technologies">Tecnologias</Link>
              <Link to="contact">Contato</Link>
            </Menu>
          </MenuWrap>
          {isSmall ? (
            <BurguerMenu
              isMenuOpened={isMenuOpened}
              pinned={isMenuOpened}
              onClick={() => toggleMenu()}
            />
          ) : (
            <Links>
              <Link to="about">Sobre</Link>
              <Link to="projects">Projetos</Link>
              <Link to="technologies">Tecnologias</Link>
              <Link to="contact">Contato</Link>
            </Links>
          )}
        </Container>
      </Wrapper>
    </>
  );
};

export default Nav;
