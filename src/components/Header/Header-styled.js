import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #111111;
  color: white;
  padding: 1rem 5%;
  z-index: 1000;
  font-size: 1.2rem;

  margin-top: 70px;
  height: 70px;

  @media (max-width: 815px) {
    padding: 1rem 2%;
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

  @media (max-width: 815px) {
    padding: 1.5rem 2%;
  }
`;

export const Title = styled.h2`
  margin: 0;
  color: #ffffff;
  font-size: 2rem;

  @media (max-width: 815px) {
    font-size: 1.5rem; /* Ajuste conforme necessário para telas menores */
  }
`;

export const Description = styled.p`
  margin: 0;
  color: #b9ef37;
  font-size: 1.2rem;

  @media (max-width: 815px) {
    font-size: 1rem; /* Ajuste conforme necessário para telas menores */
  }
`;

export const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;

  @media (max-width: 815px) {
    width: 100%;
  }
`;

export const MobileMenuButton = styled.button`
  margin-top: 30px;
  display: none;
  align-items: center;

  @media (max-width: 815px) {
    display: block;
    background: none;
    border: none;
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    margin-right: 5%;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px;
  right: 2%;
  background-color: purple;
  padding: 1rem 2rem;
`;

export const Button = styled.a`
  color: grey;
  text-decoration: none;
  cursor: pointer;
  padding: 1.5rem 0.5rem;
  margin-right: 1rem;
  margin-top: 1rem;
  font-size: 1.1rem;
  margin-bottom: 0.5rem;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 815px) {
    margin-right: 0;
  }
`;
