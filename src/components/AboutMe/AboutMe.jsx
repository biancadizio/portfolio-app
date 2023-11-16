import React from 'react';
import { AboutMeWrapper, Title, Paragraph, TechnologiesList, ListItem } from './AboutMe-styled';

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <Title>Sobre mim:</Title>
      <Paragraph>
        Sou Desenvolvedora Web, apaixonada por tecnologia! Gosto de criar sites responsivos, componentes divertidos e resolver problemas utilizando linguagens de programação. Me descobri no desenvolvimento Frontend construindo exatamente esse site. (Sim, ele está um pouco desatualizado, mas logo a nova versão ficará pronta, e agora com as novas tecnologias que aprendi).
      </Paragraph>
      <Paragraph>Minhas principais tecnologias são:</Paragraph>
      <TechnologiesList>
        <ListItem>React.js</ListItem>
        <ListItem>HTML</ListItem>
        <ListItem>CSS</ListItem>
        <ListItem>Javascript</ListItem>
        <ListItem>Python com POO (Programação Orientada a Objetos)</ListItem>
      </TechnologiesList>
      <Paragraph>Tenho também conhecimento em:</Paragraph>
      <TechnologiesList>
        <ListItem>Versionamento de código com Git e Github</ListItem>
        <ListItem>Metodologia Scrum</ListItem>
        <ListItem>Linux</ListItem>
      </TechnologiesList>
      <Paragraph>Além disso, também tenho conhecimento básico na linguagem C.</Paragraph>
    </AboutMeWrapper>
  );
};

export default AboutMe;
