import React from "react";
import Section from "src/components/Section";
import Header from "src/components/Header";
import { Container, Or } from "./styles";
import ContactForm from "src/components/ContactForm";
import ContactCard, { ContactCardList } from "src/components/ContactCard";

const contacts = [
  { name: "Github", color: "#010101", icon: "/icons/contacts/github.svg" },
  { name: "Linkedin", color: "#007AB9", icon: "/icons/contacts/linkedin.svg" }
  // {
  //   name: "danilo.de.jesus.dev@gmail.com",
  //   color: "#D54B3D",
  //   icon: "/icons/contacts/mail.svg"
  // }
];

const Contact = () => (
  <Section name="contact">
    <Header title="Contato" subTitle="algo sobre mim" />
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
