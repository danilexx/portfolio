/* eslint-disable @typescript-eslint/no-empty-function */
import React from "react";
import * as Yup from "yup";
import { Form, Title, Buttons } from "./styles";
import Input, { TextArea } from "../Input";
import { PrimaryButton, SecondaryButton } from "src/components/Button";
import validate from "src/utils/validata";
import axios from "axios";
import { FormHandles } from "@unform/core";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
Yup.setLocale({
  mixed: {
    required: "Obrigatorio"
  },
  string: {
    email: "Email Invalido"
  }
});
const ContactValidationSchema = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  subject: Yup.string().required(),
  message: Yup.string().required()
});

const ContactForm = () => {
  const formRef = React.useRef<FormHandles>(null);
  const clear = () => {
    if (formRef.current) {
      formRef.current.reset();
      formRef.current.setErrors({});
    }
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = async (data: FormData) => {
    const isValid = await validate(ContactValidationSchema, data, formRef);
    if (isValid) {
      await axios.post("https://pacific-inlet-50678.herokuapp.com/mails", {
        message: data.message,
        sender: {
          email: data.email,
          name: data.name
        },
        subject: data.subject
      });
      clear();
    }
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Title>Mandar Mensagem</Title>
      <Input name="name" label="Nome" placeholder="Joalzinho" />
      <Input
        name="email"
        label="Email"
        placeholder="Oportunidade Trabalho Incrivel"
      />
      <Input name="subject" label="Titulo" placeholder="joalzinho@mail.com" />
      <TextArea
        name="message"
        label="Mensagem"
        placeholder="ex: quero trabalhar contigo!"
        rows={6}
      />
      <Buttons>
        <SecondaryButton
          onClick={() => {
            clear();
          }}
          type="button"
        >
          Limpar
        </SecondaryButton>
        <PrimaryButton type="submit">Enviar!</PrimaryButton>
      </Buttons>
    </Form>
  );
};

export default ContactForm;
