// AboutMe-styled.js
import styled from 'styled-components';

export const AboutMeWrapper = styled.div`
background-color: black;
color: white;
// padding: 150px 1rem 10px 0; /* Removendo o padding à direita */
margin: 0; /* Removendo margens */
display: flex;
flex-direction: column;
align-items: center;
width: 100%;



  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
    // background-color: white;
    width: 100%;
    height: 700px;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
    padding-top: 300px;
  }
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 2.1rem;
  margin-left: 10%;
  padding-top: 0;
  margin-top: 0;

  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
    // margin-left: 10px;
    // margin-top: 10px;
    // padding-top: 0;
    width: 95%;
    // background-color: blue;
    padding: 0 0 0 0;
    margin:0 0 0 40px;
  }

  /* Telas com largura de 1440 pixels ou mais */
  @media (min-width: 1280px) and (max-width: 1500px) {
    margin-left: 22px;
    padding: 0 0 0 0;
  }
`;

export const Title2 = styled.h2`
  color: #ffffff;
  margin-left: 10%;

  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
    width: 100%;
    // background-color: blue;
    padding: 0 0 0 40px;
    margin:0;
  }

  /* Telas com largura de 1440 pixels ou mais */
  @media (min-width: 1280px) and (max-width: 1500px) {
    margin-left: 0;
    padding: 0 0 0 22px;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  width: 80%;
  text-align: justify;
  color: #989fab;
  margin-left: 40px;
  align-self: center;


  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
    margin-left: 40px;
    width: 92%;
    text-align: justify;
    color: #989fab;
    margin-bottom: 1rem;
    align-self: center;
    padding: 0 0 0 0;
    // background-color: red;
  }

  /* Telas com largura de 1440 pixels ou mais */
  @media (min-width: 1280px) and (max-width: 1500px) {
    margin-left: 22px;
    width: 95%;
  }
`;

export const TechnologiesList = styled.ul`
  list-style-type: disc;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;

  // @media (min-width: 1024px) and (max-width: 1500px) {
  
  // }

  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
    // list-style-type: disc;
    margin: 0;
    padding: 0 0 1rem 0;
    text-align: center;
    align-self: center;
    width: 100%;
    height: auto;
    // padding-top: 2rem;
    // padding-bottom: 1rem;
    // background-color: yellow;

`;

export const ContainerTecnologies = styled.div`
  display: inline-block;
  border-radius: 10px;
  // padding: 1.5rem;
  // margin: 5px;
  font-size: 4rem;
  background-color: #111111;
  color: #b9ef37;
  border: 1px solid #1f1f1f;
  font-size: 2rem;
  margin: 0.4rem;
  align-self: center;
  margin-left: 5%;
  margin-right: 5%;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  padding-top: 0.4rem;
  padding-bottom: 0;


    /* Telas com largura de 1024 pixels ou mais */
    @media (min-width: 1024px) {
      font-size: 5rem;
      margin: 1rem 2.5rem 0 1rem;
      padding-bottom: 0;
      text-align: center;
      height: auto;
    }
    
    @media (min-width: 1280px) and (max-width: 1439px) {
      font-size: 3.5rem;
      margin: 0 0 0 0.8rem;
      padding-bottom: 0;
      text-align: center;
      height: auto;
    }


    /* Telas com largura de 1440 pixels ou mais */
    @media (min-width: 1440px) and (max-width: 1500px) {
      font-size: 3.5rem;
      margin: 1rem 1rem 0 1rem;
      padding-bottom: 0;
      text-align: center;
      height: auto;
    }
    
`;

export const ContainerAboutMe = styled.div`
  width: 100%;
  background-color: #000000;
  padding: 0 10px 20px 1rem;

  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
    width: 90%;
    height: auto;
    background-color: transparent;
    // padding: 30px 30px;
    // margin-top: 140px;
    margin-right: 10px;
    padding-top: 50px;
    margin-bottom: 0;
    border-radius: 30px;
  }

`;

export const ContainerImage = styled.div`
  background-image: url(${(props) => props.image});
  display: inline-block;
  align-items: center;
  align-self: center;
  background-color: transparent;
  width: 100%;
  height: 38vh;
  margin-top: 150px;
  padding-top: 30px;
  padding-bottom: 30px;
  text-align: center;


  img {
    width: 70%;
    height: auto;
    border-radius: 30px;
    align-items: center;
  }

  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
    background-image: url(${(props) => props.image});
    background-color: trasparent;
    width: auto;
    height: auto;
    margin-left: 30px;
    
    margin-top: 0;
    // padding-top: 12px;
    // padding-bottom: 30px;

    img {
      width: auto;
      height: auto;
      border-radius: 30px;
      align-items: center;
    }
  }
`;

export const AboutMeWrapper2 = styled.div`
// background-color: green;
// color: white;
// width: 100%;
// // padding: 150px 1rem 10px 0; /* Removendo o padding à direita */
// margin: 0; /* Removendo margens */
// display: flex;
// flex-direction: column;
// align-items: center;
// width: 90%;



  /* Telas com largura de 1024 pixels ou mais */
  @media (min-width: 1024px) {
    background-color: #080a09;
    color: white;
    width: 87%;
    // padding: 150px 1rem 10px 0; /* Removendo o padding à direita */
    // margin: 30px 0 00; /* Removendo margens */
    display: flex;
    justify-content: flex-start;
    height: 100%;
    border-radius: 30px;
    margin-bottom: 150px;
    border: 1px solid #1f1f1f;

  
  }
`;