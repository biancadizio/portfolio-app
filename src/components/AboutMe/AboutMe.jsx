import React from 'react';
import {ContainerAboutMe, AboutMeWrapper, Title, Paragraph, TechnologiesList, ListItem, ContainerImage, ContainerTecnologies, Title2 } from './AboutMe-styled';
import ruiva2 from '../Images/ruiva2.png';
import { DiReact } from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaPython, FaLinux } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaGitAlt } from "react-icons/fa6";
import { DiScrum } from "react-icons/di";

const AboutMe = () => {
  return (
    <AboutMeWrapper>
      <ContainerImage>
        <img src={ruiva2} alt="Garota ruiva programadora" />
        </ContainerImage>
      <ContainerAboutMe>
      <Title>Sobre mim:</Title>
      <Title2>Frontend Developer</Title2>
      <Paragraph>
        Sou Desenvolvedora Web, apaixonada por tecnologia! Gosto de criar sites responsivos, componentes divertidos e resolver problemas utilizando linguagens de programação. Me descobri no desenvolvimento estudando através de plataformas de streaming e desde então estou nessa empreitada.
      </Paragraph>
      <Paragraph>Minhas principais tecnologias são:</Paragraph>
      <TechnologiesList>
        <ContainerTecnologies><DiReact /></ContainerTecnologies>
        <ContainerTecnologies><FaHtml5/></ContainerTecnologies>
        <ContainerTecnologies><FaCss3Alt /></ContainerTecnologies>
        <ContainerTecnologies><IoLogoJavascript /></ContainerTecnologies>
        <ContainerTecnologies><FaPython /></ContainerTecnologies>
        <ContainerTecnologies><FaGitAlt /></ContainerTecnologies>
        <ContainerTecnologies><DiScrum /></ContainerTecnologies>
        <ContainerTecnologies><FaLinux /></ContainerTecnologies>
      </TechnologiesList>
      </ContainerAboutMe>
    </AboutMeWrapper>

  );
};

export default AboutMe;
