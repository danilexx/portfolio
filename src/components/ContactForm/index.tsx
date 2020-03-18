/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import { Form, Title, Buttons } from "./styles";
import Input, { TextArea } from "../Input";
import { PrimaryButton, SecondaryButton } from "src/components/Button";

interface FormData {
  name: string;
}

const ContactForm = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = (data: FormData) => {};

  return (
    <Form onSubmit={handleSubmit}>
      <Title>Mandar Mensagem</Title>
      <Input name="name" label="Nome" placeholder="Joalzinho" />
      <Input name="email" label="Email" placeholder="joalzinho@mail.com" />
      <TextArea
        name="message"
        label="Mensagem"
        placeholder="ex: quero trabalhar contigo!"
        rows={6}
      />
      <Buttons>
        <SecondaryButton>Limpar</SecondaryButton>
        <PrimaryButton>Enviar!</PrimaryButton>
      </Buttons>
    </Form>
  );
};

export default ContactForm;
