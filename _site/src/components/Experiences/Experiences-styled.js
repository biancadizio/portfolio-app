// Experiences-styled.js
import styled, { keyframes } from 'styled-components';

const scrollAnimation = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

export const ExperiencesWrapper = styled.div`
  background-color: black;
  width: 100%;
  padding: 0;
  margin: 0;
  padding: 3rem 0 1px 0;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    // list-style-type: disc;
    background-color: black;
    padding-bottom: 50px;
  }
`;

export const Title = styled.h2`
  color: #ffff;
  margin-top: 0;
  margin-bottom: 0;
  text-align: center;
  font-size: 2rem;
  width: 100%;
  background-color: black;
  height: 80px;
  padding: 20px 0 20px 0;

  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
background-color: transparent;
width: 82%;
// padding: 0 0 0 0;
// align-items: center;
// align-content: center;
// justify-content: center;
overflow-y: auto;
max-height: 300px;
position: static;

@media (min-width: 1024px) {
  width: 15%;
  // display: flex;
  // flex-direction: column;
  // position: static;
  background-color: #080a09;
  // padding: 0;
  // margin: 0;
  // align-content: space-between;
  // list-style-type: disc;
}
`;

export const Button = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  color: grey;
  font-size: 15px;
  font-weight: bold;
  padding: 12px 15px;
  text-align: right;
  font-family: 'arial';
  align-items: center;

  &:hover {
    color: #b9ef37;
  }

  &:active,
  &:focus {
    color: #b9ef37; /* Altere a cor desejada quando clicado ou focado */
    outline: none; /* Remover a borda padrão do botão quando focado */
  }
`;

export const DescriptionContainer = styled.div`
  margin-top: 15px;
  text-align: justify;
  width: 100%;
  max-width: 700px;
  background-color: yellow;

  @media (min-width: 1024px) {
    display: flex;
    // flex-direction: row;
    // align-items: flex-end;
    width: 85%;
    background-color: transparent;
    // height: auto;

    justify-content: center;
    // list-style-type: disc;
    padding: 20px 30px 20px 30px;
    margin-bottom: 15px;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: #989fab;
  background-color: black;
  padding: 2rem 4rem;

  @media (min-width: 1024px) {
    // background-color: red;
    padding: 0;
    // display: flex;
    // flex-direction: row;
    // align-items: flex-end;
    // justify-content: space-around;
    // list-style-type: disc;
  }
`;

export const DivButtonsAndDescription = styled.div`
  background-color: transparent;
  padding: 0;
  margin: 0;
  width: 100%;

  @media (min-width: 1024px) {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: transparent;
  }
`;

export const ScrollBar = styled.div`
width: 4px;
background-color: #b9ef37;
position: static;
top: 0;
right: 0;
height: 20%;
transform-origin: top;
animation: ${scrollAnimation} 0.5s ease;
border-left: 1px solid black; /* Adicione esta linha */
`;

export const ScrollContainer = styled.div`
// position: static;
// width: 100%;
// overflow-y: auto;
// max-height: 300px;
// /* Adicione esta linha */
`;

export const ScrollContainerInner = styled.div`
  // width: 100%;
`;
