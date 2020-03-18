import React from "react";
import { Container, ContactName, IconWrapper, Icon } from "./styles";
import { Link } from "../Nav/styles";

export { ContactCardList } from "./styles";

interface Contact {
  name: string;
  icon: string;
  color: string;
  link: string;
}

const ContactCard: React.FC<{ contact: Contact }> = ({
  contact: { name, icon, color, link }
}) => (
  <Container target="_blank" href={link}>
    <IconWrapper color={color}>
      <Icon src={icon} />
    </IconWrapper>
    <ContactName>{name}</ContactName>
  </Container>
);

export default ContactCard;
