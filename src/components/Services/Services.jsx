import React from 'react';
import { ServicesWrapper, Title, ServiceContainer, ServiceItem, Description } from './Services-styled';
import { BsBrush, BsCodeSlash } from 'react-icons/bs'; // Importe os ícones desejados

const Services = () => {
  return (
    <ServicesWrapper>
      <Title>Serviços:</Title>
      <ServiceContainer>
        <ServiceItem>
          <BsBrush size={50} color="#007acc" /> {/* Ícone de UI Design */}
          <h3>UI Design:</h3>
          <Description>
            Desenho de interface de sites intuitivo atendendo as necessidades do usuário.
          </Description>
        </ServiceItem>
        <ServiceItem>
          <BsCodeSlash size={50} color="#007acc" /> {/* Ícone de Desenvolvimento */}
          <h3>Desenvolvimento:</h3>
          <Description>
            Desenvolvimento de sites profissionais, portfólios, sites institucionais, blogs e landing pages.
          </Description>
        </ServiceItem>
      </ServiceContainer>
    </ServicesWrapper>
  );
};

export default Services;
