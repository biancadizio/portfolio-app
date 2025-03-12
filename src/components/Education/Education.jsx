import React from 'react';
import { EducationWrapper, Title, Paragraph, CourseList, CourseItem } from './Education-styled';

const Education = () => {
  return (
    <EducationWrapper>
      <Title>Educação:</Title>
      <Paragraph>
        Estou cursando o 3° ano do curso de Bacharelado em Sistemas de Informação na Universidade de São Paulo (USP) – Campus São Carlos no período noturno.
      </Paragraph>
      <Paragraph>Alguns dos cursos que fiz desde que me apaixonei por tecnologia foram:</Paragraph>
      <CourseList>
        <CourseItem>
          Programa de formação tecnológica ONE (Oracle Next Education) - Parceria Oracle + Alura – Lógica de Programação II – Criando Desenhos, animações e jogos com Javascript, HTML e CSS.
        </CourseItem>
        <CourseItem>
          Programa de formação tecnológica ONE (Oracle Next Education) - Parceria Oracle + Alura – Lógica de Programação I – Criando Programas com Javascript e HTML.
        </CourseItem>
        <CourseItem>
          Cursos de Extensão: Python para Processamento de Linguagem Natural.– ICMC USP
        </CourseItem>
        <CourseItem>
          Curso de Git e Github realizado pela plataforma DIO.
        </CourseItem>
        <CourseItem>
          Técnico em Administração – ETEC Paulino Botelho.
        </CourseItem>
      </CourseList>
    </EducationWrapper>
  );
};

export default Education;
