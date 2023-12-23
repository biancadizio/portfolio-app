import styled from 'styled-components';

export const EducationWrapper = styled.div`
  background-color: #111111;
  padding-top: 10px;
  padding-bottom: 10px;
  margin: 0;
  height: 100%;
  width: 100%;
  box-sizing: border-box; /* Adicionado para incluir padding no cálculo do tamanho */
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 2.1rem;
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: white;
`;

export const CourseList = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
  color: white;
`;

export const CourseItem = styled.li`
  margin-bottom: 0.5rem;
`;
