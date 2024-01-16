import React from 'react';
import { ServicesWrapper, Title, ServiceContainer, ServiceItem, Description } from './Services-styled';
import { BsBrush, BsCodeSlash } from 'react-icons/bs'; // Importe os ícones desejados

const Services = () => {
  return (
    <ServicesWrapper>
      <Title >Serviços:</Title>
      <ServiceContainer>
        <ServiceItem>
          <BsBrush size={60} color="#007acc" style={{paddingTop: "10px"}}/> {/* Ícone de UI Design */}
          <h3 style={{color: 'white'}} >UI Design:</h3>
          <Description>
            Desenho de interface de sites intuitivo atendendo as necessidades do usuário.
          </Description>
        </ServiceItem>
        <ServiceItem>
          <BsCodeSlash size={60} color="#007acc" style={{paddingTop: "10px"}} /> {/* Ícone de Desenvolvimento */}
          <h3 style={{padding: "0 5px", color:"white"}}>Desenvolvimento:</h3>
          <Description>
            Desenvolvimento de sites profissionais, portfólios, sites institucionais, blogs e landing pages.
          </Description>
        </ServiceItem>
      </ServiceContainer>
    </ServicesWrapper>
  );
};

export default Services;
