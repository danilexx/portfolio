/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Container, Links, Link, FilledLogo, Wrapper } from "./styles";

const Nav = () => {
  const WrapperRef = React.useRef<HTMLDivElement>(null);
  const [navSize, setNavSize] = React.useState(0);
  React.useEffect(() => {
    if (WrapperRef.current) {
      const size = WrapperRef.current.getBoundingClientRect().height;
      setNavSize(size);
    }
  }, [WrapperRef]);
  const offset = React.useMemo(
    () => (window && window.innerHeight / 100) * 10 * -1,
    [navSize]
  );
  const OffsetedLink = React.useCallback(
    (props: { to: string; children: React.ReactNode; spy?: boolean }) => (
      <Link spy offset={offset} duration={500} smooth isDynamic {...props} />
    ),
    [offset]
  );
  return (
    <Wrapper ref={WrapperRef}>
      <Container>
        <OffsetedLink to="about" spy={false}>
          <FilledLogo />
        </OffsetedLink>

        <Links>
          <OffsetedLink to="about">Sobre</OffsetedLink>
          <OffsetedLink to="projects">Projetos</OffsetedLink>
          <OffsetedLink to="tecnologies">Tecnologias</OffsetedLink>
          <OffsetedLink to="contact">Contato</OffsetedLink>
        </Links>
      </Container>
    </Wrapper>
  );
};

export default Nav;
