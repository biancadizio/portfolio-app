// Contact-styled.jsx
import styled from 'styled-components';
import { ContainerTecnologies } from '../AboutMe/AboutMe-styled';

export const ContainerContact = styled(ContainerTecnologies)`
  // padding: 0;
  // margin-right: 0;
  // padding-right: 0;
  // padding-left: 19px;
  // margin-right: 0;
  // margin-left: 10px;
  text-align: center;
  width: 20%;

  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
    text-align: center;
    width: 5%;
    height: 100px;
    padding-top: 0;
    margin-top: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    // background-color: red;
    
  }
  `

export const ContactWrapper = styled.div`
  background-color: #080a09;
  color: white;
  // padding: 2rem 3rem;
  text-align: center;
  width: 100%;
  padding: 25px 25px 25px 25px;

  @media (min-width: 1024px) {
    padding: 30px 0 30px 0;
    // width: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;
    
    }
`;

export const Title = styled.h1`
  margin: 0;
  color: #ffffff;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 30px 10px 20px 0;
    margin: 0;
    width: 100%;
    // background-color: blue;
    font-size: 29px;
    text-align: center;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Permite que os ícones quebrem para a linha seguinte em telas menores */
  margin-top: 1rem;
  text-align: center;
  width: 100%;

  @media (min-width: 1024px) {
    padding: 30px 0 30px 0;
    width: 100%;
    display: flex;
    // flex-direction: column;
    align-content: center;
    
    }
  
`;

export const ContactItem = styled.div`
  margin: 0.5rem;
  text-align: center;
  flex-basis: calc(33% - 1rem);
`;

export const IconLink = styled.a`
  text-decoration: none;
  color:#b9ef37;
  font-size: 2rem;
  // margin-right: 1rem;
`;



export const Icon = styled.span`
  vertical-align: middle;

  @media (min-width: 1024px) {
    padding: 30px 0 30px 0;
    width: 100%;
    display: flex;
    // flex-direction: column;
    align-content: center;
    
    }
`;
