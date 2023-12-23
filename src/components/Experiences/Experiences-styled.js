// Experiences-styled.js
import styled from 'styled-components';

export const ExperiencesWrapper = styled.div`
  background-color: grey;
  width: 100%;
  padding: 0;
  margin: 0;
  // padding: 2rem 3rem;
`;

export const Title = styled.h2`
  color: #ffff;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  font-size: 2rem;
  width: 90%;
  background-color: purple;
  height: 43px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  background-color: blue;
  width: 100%; /* Alterado para ocupar 100% da largura */
  max-width: 300px; /* Adicionado para limitar a largura máxima */
`;

export const Button = styled.button`
  margin-bottom: 10px;
  margin-top: 10px;
  width: 100%;
  background-color: red;
  border: none;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  padding: 12px 16px;
  text-align: right;
  font-family: 'arial';
  align-items: center;
`;

export const DescriptionContainer = styled.div`
  margin-top: 15px;
  text-align: justify;
  width: 100%;
  max-width: 700px; /* Adicionado para limitar a largura máxima */
  background-color: yellow;
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: #989fab;
  background-color: pink;
`;

export const DivButtonsAndDescription = styled.div`
  background-color: green;
  padding: 0;
  margin: 0;
  width: 90%;
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  // flex-direction: row;
  // width: 100%;
  // margin-top: 46px;
  // margin-left: 0;
  // position: relative;

  // @media (max-width: 768px) {
  //   flex-direction: column; /* Alterado para uma coluna em telas menores */
  //   align-items: flex-start; /* Alinhado à esquerda em telas menores */
  // }
`;
