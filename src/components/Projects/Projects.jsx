import React from 'react';
import {
  ProjectsWrapper,
  Title,
  Project0,
  Project1,
  Project2,
  Project3,
  Project4,
  Project5,
  Paragraph,
  Link0,
  Link1,
  Link2,
  Link3,
  Link4,
  Link5,
  ProjectsContainer,
} from './Projects-styled';


const Projects = () => {
  return (
    <ProjectsWrapper>
      <Title>Meus Projetos:</Title>
      <ProjectsContainer>
      <Project0>
        <h1>Busca CEP com API dos Correios</h1>
        <Paragraph>Aplicação web com Next.js e Tailwind com interface de login que leva a uma consulta de Endereço através do CEP.</Paragraph>
        <Paragraph><Link0 href="https://projeto-elevcode.vercel.app/">Visualizar Projeto</Link0></Paragraph>
      </Project0>
      <Project1>
        <h1>Jogos Javascript</h1>
        <Paragraph>Jogo da adivinhação e "Paint" desenvolvidos durante meus estudos com HTML, CSS, Javascript e API Canvas.</Paragraph>
        <Paragraph><Link1 href="https://github.com/biancadizio/Javascript">Visualizar Projeto</Link1></Paragraph>
      </Project1>
      <Project2>
        <h1>Encriptador de textos</h1>
        <Paragraph>Encriptador de textos desenvolvido utilizando HTML, CSS, Javascript, Grid e Flex.</Paragraph>
        <Paragraph><Link2 href="https://biancadizio.github.io/Chalenge-frontend-alura/">Visualizar Projeto</Link2></Paragraph>
      </Project2>
      </ProjectsContainer>
      <ProjectsContainer>
      <Project3>
        <h1>Projeto Backend Python com POO</h1>
        <Paragraph>Criação de API utilizando Python com POO, CRUD com Flask e MySQL. </Paragraph>
        <Paragraph><Link3 href="https://github.com/biancadizio/projeto_freshmania">Visualizar Projeto</Link3></Paragraph>
      </Project3>
      <Project4>
        <h1>Portfólio</h1>
        <Paragraph> Meu primeiro Portfólio desenvolvido sem template pronto utilizando HTML e CSS.</Paragraph>
        <Paragraph><Link4 href="https://biancadizio.github.io/my-landing-page/index.html">Visualizar Projeto</Link4></Paragraph>
      </Project4>
      <Project5>
        <h1>História da Internet</h1>
        <Paragraph> Site e conteúdo desenvolvido por mim (e amigos) contando uma breve história de quando e como surgiu a internet.</Paragraph>
        <Paragraph><Link5 href="https://sites.google.com/usp.br/historiadainternet/in%C3%ADcio">Visualizar Projeto</Link5></Paragraph>
      </Project5>
      </ProjectsContainer>
    </ProjectsWrapper>
  );
};

export default Projects;
