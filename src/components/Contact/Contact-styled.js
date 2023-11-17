// Contact-styled.jsx
import styled from 'styled-components';

export const ContactWrapper = styled.div`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
`;

export const Title = styled.h2`
  margin: 0;
  color: #ffffff;
  font-size: 2.1rem;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap; /* Permite que os ícones quebrem para a linha seguinte em telas menores */
  margin-top: 1rem;
`;

export const ContactItem = styled.div`
  margin: 0.5rem;
`;

export const IconLink = styled.a`
  text-decoration: none;
  color: white;
  font-size: 2rem;
  margin-right: 1rem;
`;

export const Icon = styled.span`
  vertical-align: middle;
`;
