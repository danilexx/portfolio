import React from "react";
import { Container, Title, SubTitle, Separator } from "./styles";

const Header: React.FC<{
  title: string;
  subTitle: string;
}> = ({ title, subTitle }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Separator />
      <SubTitle>{subTitle}</SubTitle>
    </Container>
  );
};

export default Header;
