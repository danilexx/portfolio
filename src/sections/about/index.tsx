import React from "react";
import Section from "src/components/Section";
import Header from "src/components/Header";
import { HistorySection, HistoryText, HistoryImage, Separator } from "./styles";

const About = () => {
  return (
    <Section name="about">
      <Header title="Sobre" subTitle="Essa é a minha historia" />
      <HistorySection reverse>
        <HistoryImage src="/images/ferraz.png" />
        <HistoryText>
          Oriundo de uma pequena cidade de São Paulo: Ferraz de Vasconcelos onde
          cresci com o sonho de criar designs e desenvolver sites modernos
          dinamicos e interativos
        </HistoryText>
      </HistorySection>
      <Separator />
      <HistorySection>
        <HistoryImage src="/images/etec.png" />
        <HistoryText>
          Aos 17 anos me formei na ETEC de ferraz, no curso tecnico de
          informatica, aonde aprendi conceitos de orientação a objetos e
          conceitos basicos de desenvolvimento
        </HistoryText>
      </HistorySection>
      <Separator />
      <HistorySection reverse>
        <HistoryImage src="/images/gostack.png" />
        <HistoryText>
          Aos 18 anos fui aluno do curso online OmniStack da startup Rocketseat,
          que tem o foco de formar profissionais capacitados para as demandas do
          mercado de trabalho web, ensinando tecnologias de ponta, onde pude
          crescer como pessoa e desenvolvedor
        </HistoryText>
      </HistorySection>
    </Section>
  );
};

export default About;
