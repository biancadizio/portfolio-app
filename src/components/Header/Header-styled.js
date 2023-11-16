import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color:#202124;
  color: white;
  padding: 1rem 2rem;
  z-index: 1000;
  font-size: 1.2rem;
`;

export const Name = styled.h2`
  margin: 0;
`;

export const FrontendDeveloper = styled.p`
    margin: 0;
    font-size: 1rem;
`;

export const LeftContent = styled.div`
  flex-grow: 1;
`;

export const MobileMenuButton = styled.button`
  position: fixed;
  top: 0;
  right: 20px; // Ajuste a posição conforme necessário
  background: none;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 70px; // Ajuste a posição conforme necessário
  right: 20px; // Ajuste a posição conforme necessário
  background-color: #333;
  padding: 1rem 2rem;
`;

export const Button = styled.a`
  margin-top: 10px; // Ajuste o espaçamento conforme necessário
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
