// Experiences.jsx
import React, { useState, useRef, useEffect } from 'react';
import {
  ExperiencesWrapper,
  Title,
  ButtonContainer,
  Button,
  DescriptionContainer,
  Paragraph,
  DivButtonsAndDescription,
  ScrollBar,
  // ScrollContainer,
  // ScrollContainerInner,
} from './Experiences-styled';

const Experiences = () => {
  const [showDescription, setShowDescription] = useState(null);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const buttonContainerRef = useRef(null);

  const experiencesData = [
    {
      title: 'SOFTABLE TECNOLOGIA LTDA',
      description:
        'Atuei em projetos de grande escala como desenvolvedora de aplicações front-end utilizando React.js, Next.js, Typescript e styled-components. Atuei também na integração com APIs, componentização, Clean Code e desenvolvimento de arquiteturas front-end escaláveis.',
    },
    {
      title: 'EAGLE-EDU',
      description:
        'Fui Bolsista PIPE FAPESP atuando como Desenvolvedora Frontend na empresa EAGLE-EDU onde era responsável pelo Desenvolvimento de Frontend, novas features e manutenção de um Sistema Educacional Gamificado. Algumas das atividades desempenhadas consistiam na criação de componentes React responsivos, conexão com o Backend, criação de páginas dinâmicas responsivas e debug utilizando ReactJS, HTML, biblioteca styled components e Javascript. Utilização de Git para controle de versionamento de código e Metodologia Scrum.',
    },
    {
      title: 'CDCC - USP',
      description:
        'Fui Bolsista da vertente Cultura e Extensão do Programa Unificado de Bolsas no CDCC - Centro de Divulgação Científica e Cultural onde trabalhei com criação e desenvolvimento de jogos lúdicos através de plataformas de Design Gráfico, criação de conteúdo de mídia sobre jogos lúdicos e habilidades que são desenvolvidas através deles, criação de passatempos em formato gigante: palavras-cruzadas e caça-palavras para troca periódica. Também participei de dinâmicas com jogos e livros infantis, elaborei atividades lúdicas voltadas ao público espontâneo do Centro de Divulgação Científica e grupos de escolas pré-agendados. Além disso, desenvolvi e executei atividades didáticas/lúdicas, conforme demanda de escolas e entidades parceiras.',
    },
    {
      title: 'FRESHMANIA S/A',
      description:
        'Fiz estágio como Desenvolvedora Backend na empresa FRESHMANIA S/A onde desenvolvia as atividades em Python utilizando POO (Programação Orientada a Objeto) e Linux no dia a dia. Era responsável pela criação de relatórios (de histórico de mercadorias, clientes, etc) com a biblioteca openpyxl, POO, pymongo e MongoDB. Além disso criava métodos estáticos e de classe inserindo querys para puxar dados do banco de dados MongoDB para a planilha .xlsx gerada em Python.',
    },
    {
      title: 'ALÉM DO DESENVOLVIMENTO',
      description:
        'Atendimento ao Cliente e Vendas',
      description:
        'Tenho 3 anos de experiência em vendas comerciais na empresa Doce Amor Modas, Loja de Roupas e Acessórios. Apesar da empresa ser do segmento de vendas presenciais, foi onde tive meu primeiro contato com tecnologia utilizando Design Gráfico na elaboração de anúncios promocionais e na elaboração de cartões de visita para atrair leads ao estabelecimento. Também foi onde tive meu primeiro contato com linguagem de programação, tentando resolver problemas no software de fluxo de caixa que eu utilizava (escrito na linguagem Visual Basic). Tenho também dois anos de experiência na utilização de Software CRM na empresa Iddeias Consulting.',
    },
  ];

  const handleButtonClick = (index) => {
    setShowDescription(showDescription === index ? null : index);
  
    if (buttonContainerRef.current) {
      const buttonHeight = buttonContainerRef.current.children[0].offsetHeight;
      const newScrollTop = index * buttonHeight;
      buttonContainerRef.current.scrollTop = newScrollTop;
    }
  };

const handleScroll = () => {
  if (buttonContainerRef.current) {
    const { scrollTop, clientHeight } = buttonContainerRef.current;
    const newScrollPercentage = (scrollTop / clientHeight) * 100;
    setScrollPercentage(newScrollPercentage);
  }
};

  useEffect(() => {
    if (buttonContainerRef.current) {
      buttonContainerRef.current.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (buttonContainerRef.current) {
        buttonContainerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <ExperiencesWrapper>
      <Title>Experiências:</Title>
      <DivButtonsAndDescription>
        {/* <ScrollContainer ref={buttonContainerRef}> */}
          <ButtonContainer>
            {experiencesData.map((experience, index) => (
              <Button
                key={index}
                onClick={() => handleButtonClick(index)}
                isActive={showDescription === index}
              >
                {experience.title}
              </Button>
            ))}
          </ButtonContainer>
          <ScrollBar style={{ top: `${scrollPercentage}%` , alignItems:`center`}} />
        {/* </ScrollContainer> */}
        <DescriptionContainer>
          {showDescription !== null && (
            <Paragraph>{experiencesData[showDescription].description}</Paragraph>
          )}
        </DescriptionContainer>
      </DivButtonsAndDescription>
    </ExperiencesWrapper>
  );
};

export default Experiences;
