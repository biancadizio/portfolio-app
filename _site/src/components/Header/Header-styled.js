import styled from 'styled-components';

export const Button = styled.div`
  line-height: 50px;
  height: 50px;
  text-align: center;
  width: 100%;
  align-items: center;
  background-color: transparent;
  

  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
   width: 100%;   
  }

`;

export const ButtonOne = styled(Button)`
  color: grey;
  transition: all 0.3s;
  position: relative;
  align-items: center;
  width: 70%;
  margin-top: 30px;
  margin-bottom: 30px;
  
  

  span {
    transition: all 0.3s;
  }

  &:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    opacity: 0;
    transition: all 0.3s;
    border-top-width: 1px;
    border-bottom-width: 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-top-color: grey;
    border-bottom-color: grey;
    transform: scale(0.1, 1);
    
  }

  span {
    z-index: 2;
    position: relative;
  }

  &:hover span {
    letter-spacing: 2px;
  }

  &:hover:before {
    opacity: 1;
    transform: scale(1, 1);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: all 0.3s;
    background-color: transparent;
  }

  &:hover:after {
    opacity: 0;
    transform: scale(0.1, 1);
  }

  /* Telas com largura de 1024 pixels ou mais */
@media (min-width: 1024px) {
  color: grey;
  transition: all 0.3s;
  position: relative;
  align-items: center;
  width: 20%;
  // margin: 30px 40px;
  // padding: 0 30px
  // background-color: blue;
}

  `;

export const HeaderWrapper = styled.header`
width: 100%;
display: flex;
justify-content: space-between;
// background-color: red;
color: white;
font-size: 1.2rem;
margin-top: 102px;
height: 5px;
position: fixed;

  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
    /* Adicione seus estilos aqui */
  }

`;

export const LeftContent = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
background-color: black;
padding: 20px 0;
width: 100%;
position: fixed;
top: 0;
right: 0;
color: white;
margin: 0;
width: 100%;


  /* Telas com largura de 1024 pixels ou mais */
@media (min-width: 1024px) {
width: 100%;
padding: 20px 0;
margin: 0;
}

`;

export const Title = styled.h2`
  margin: 0;
  color: #ffffff;
  font-size: 2rem;
  margin-left: 6.5%;
  height: 70px;

  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
    /* Adicione seus estilos aqui */
  }

`;

export const Description = styled.p`
  margin: 0;
  color: #b9ef37;
  font-size: 1.2rem;

  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
    /* Adicione seus estilos aqui */
  }

`;

export const Navigation = styled.div`
display: flex;
align-items: center;
width: 100%;
background-color: #080a09;
padding: 16px 0 32px 0;
height: 20px;


  /* Telas com largura de 1024 pixels ou mais */
@media (min-width: 1024px) {
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #080a09;
  padding: 30px 0 30px 0;
  height: 20px;
}

`;

export const MobileMenuButton = styled.button`
  background-color: transparent;
  border: none;
  text-align: right;
  align-items: right;
  width: 100%;
  margin-right: 20px;
  margin-top: 20px;

  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
    /* Adicione seus estilos aqui */
  }
`;

export const MobileMenu = styled.div`
display: flex;
flex-direction: column;
position: fixed;
top: 150px;
padding-top: 0;
padding-bottom: 150px;
left: 0;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
z-index: 1002;
background-color: black;

/* Telas com largura de 1024 pixels ou mais */
@media (min-width: 1024px) {
  /* Adicione seus estilos aqui */
}
`;
