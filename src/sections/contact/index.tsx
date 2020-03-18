import React from "react";
import Section from "src/components/Section";
import Header from "src/components/Header";
import { Container, Or } from "./styles";
import ContactForm from "src/components/ContactForm";
import ContactCard, { ContactCardList } from "src/components/ContactCard";

const contacts = [
  {
    name: "Github",
    color: "#010101",
    icon: "/icons/contacts/github.svg",
    link: "https://github.com/danilexx"
  },
  {
    name: "Linkedin",
    color: "#007AB9",
    icon: "/icons/contacts/linkedin.svg",
    link: "https://www.linkedin.com/in/danilo-de-jesus-2a34b21a3/"
  }
  // {
  //   name: "danilo.de.jesus.dev@gmail.com",
  //   color: "#D54B3D",
  //   icon: "/icons/contacts/mail.svg"
  // }
];

const Contact = () => (
  <Section name="contact">
    <Header
      title="Contato"
      subTitle="Esses são os meios que você tem de entrar em contato comigo"
    />
    <Container>
      <ContactForm />
      <Or>Ou</Or>
      <ContactCardList>
        {contacts.map((contact, index) => (
          <ContactCard contact={contact} key={index} />
        ))}
      </ContactCardList>
    </Container>
  </Section>
);

export default Contact;
