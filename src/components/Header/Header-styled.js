import styled from 'styled-components';

export const Button = styled.div`
  line-height: 50px;
  height: 50px;
  text-align: center;
  width: 100%;
  align-items: center;
  background-color: blue;

  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
    /* Adicione seus estilos aqui */
  }

`;

export const ButtonOne = styled(Button)`
  color: grey;
  transition: all 0.3s;
  position: relative;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  

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
  /* Adicione seus estilos aqui */
}

  `;

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: 
  // justify-content: space-between;
  // position: absolute;
  // top: 0;
  // right: 0;
  // left: 0;
  background-color: #111111;
  color: white;
  padding: 0.9rem 0 0 0;
  // z-index: 1000;
  font-size: 1.2rem;
  margin-top: 70px;
  height: 70px;

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
  padding: 1.5rem 5%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  color: white;
  z-index: 1001;
  margin: 0;

  /* Telas com largura de 1024 pixels ou mais */
@media (min-width: 1024px) {
  /* Adicione seus estilos aqui */
}

`;

export const Title = styled.h2`
  margin: 0;
  color: #ffffff;
  font-size: 2rem;

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
  self-align: center;
  width: 100%;
  background-color: green;
  margin-top: 25px;
  margin-bottom: 0;


  /* Telas com largura de 1024 pixels ou mais */
@media (min-width: 1024px) {
  /* Adicione seus estilos aqui */
}

`;

export const MobileMenuButton = styled.button`
  background-color: transparent;
  border: none;
  text-align: right;
  align-items: right;
  width: 100%;
  

  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
    /* Adicione seus estilos aqui */
  }
`;

export const MobileMenu = styled.div`
display: flex;
flex-direction: column;
position: fixed;
margin-top: 170px;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100%;
height: 100%;
background-color: black;
justify-content: center;
align-items: center;
z-index: 1002;
background-color: purple;

/* Telas com largura de 1024 pixels ou mais */
@media (min-width: 1024px) {
  /* Adicione seus estilos aqui */
}
`;
