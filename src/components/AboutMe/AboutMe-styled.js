// AboutMe-styled.js
import styled from 'styled-components';

export const AboutMeWrapper = styled.div`
  background-color: black;
  color: white;
  // padding: 2rem 3rem;
  margin-top: 10rem;
  width: 100%;

// Estilos específicos em telas cuja largura é inferior a 815 pixels.
  @media (max-width: 815px) {
    padding: 2rem 1rem;
    margin-top: 140px;  
  }

// Estilos específicos em telas cuja largura esteja entre 816 pixels e 1500 pixels.
  @media (max-width: 1500px) and (min-width: 815px) {
    padding: 2rem 1rem;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 2.1rem;
  margin-left: 6.5%;
  padding-top: 0;
  margin-top: 0;

  @media (max-width: 815px) {
    text-align: center;
    padding: 0;
    margin: 0;
    margin-top: 20px;
  }

  @media (max-width: 1500px) and (min-width: 815px){
    width: 85%;
    margin-left: 8.8%;
    margin-right: 0;
    padding: 0;
    margin-top: 0;
`;

export const Title2 = styled.h2`
  color: #ffffff;
  margin-left: 6.5%;

  @media (max-width: 815px) {
    text-align: center;
  }

  @media (max-width: 1500px) and (min-width: 815px){
    padding-top: 0;
    margin-top: 0;
    width: 85%;
    margin-left: 8.8%;
    margin-right: 0;
    padding: 0;
    margin-bottom: 30px;
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  width: 80%;
  text-align: justify;
  color: #989fab;
  margin-left: 6.5%;

  @media (max-width: 815px) {
    width: 100%;
    margin-left: 2px;
    margin-right: 2px;
    padding-right: 15px;
  }
  @media (max-width: 1500px) and (min-width: 815px){
    width: 85%;
    margin-left: 8.8%;
    margin-right: 0;
    padding: 0;
    margin-bottom: 0;
`;

export const TechnologiesList = styled.ul`
  list-style-type: disc;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  padding-top: 2rem;
`;

export const ContainerTecnologies = styled.div`
  display: inline-block;
  border-radius: 10px;
  padding: 1.5rem;
  margin: 5px;
  font-size: 4rem;
  background-color: #111111;
  color: #b9ef37;
  border: 1px solid #1f1f1f;

  @media (max-width: 815px) {
    font-size: 2rem;
    // padding: 0.4rem;
    margin: 0.4rem;
    align-self: center;
    margin-left: 5%;
    margin-right: 5%;
    padding-left: 0.4rem;
    padding-right: 0.4rem;
    padding-top: 0.4rem;
    padding-bottom: 0.2rem;
  }

  @media (max-width: 1500px) and (min-width: 815px){
    font-size: 4rem;
    padding-top: 0.4rem;
    padding-left: 0.4rem;
    padding-right: 0.5rem;
    margin: 0.4rem;
    align-self: right;
    margin-left: 0.6rem;
    padding-bottom: 0px;
    margin-bottom: 0px;
    height: 68px;
`;

export const ContainerAboutMe = styled.div`
  width: 60%;
  display: inline-block;
  margin-left: 5%;

  @media (max-width: 815px) {
    width: 100%;
    margin-left: 0;
  }

  @media (max-width: 1500px) and (min-width: 815px){
    width: 60%;
    margin-left: 0;
`;

export const ContainerImage = styled.div`
  background-image: url(${(props) => props.image});
  display: inline-block;
  size: 50%;
  margin-left: 10%;
  border-radius: 30px;
  margin-top: 3rem;

  img {
    width: 100%;
    height: auto;
    border-radius: 30px;
  }

// Estilos específicos em telas cuja largura é inferior a 815 pixels.
  @media (max-width: 815px) {
    margin-top: 2rem;
    size: 40%;
    margin-top: 30px;
    align-self: center;
    align-items: center;
    text-align: center;
  }

// Estilos específicos em telas cuja largura esteja entre 816 pixels e 1500 pixels.
  @media (max-width: 1500px) and (min-width: 815px) {
    margin-top: 2.4rem;
    width: 23.5%;
`;