import React from "react";
import { Container, ContactName, IconWrapper, Icon } from "./styles";

export { ContactCardList } from "./styles";

interface Contact {
  name: string;
  icon: string;
  color: string;
}

const ContactCard: React.FC<{ contact: Contact }> = ({
  contact: { name, icon, color }
}) => (
  <Container>
    <IconWrapper color={color}>
      <Icon src={icon} />
    </IconWrapper>
    <ContactName>{name}</ContactName>
  </Container>
);

export default ContactCard;
