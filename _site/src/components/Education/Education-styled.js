import styled from 'styled-components';

export const EducationWrapper = styled.div`
background-color: #080a09;
  padding: 10px 3rem 20px 3rem;
  margin: 0;
  height: 100%;
  width: 100%;
  // box-sizing: border-box; /* Adicionado para incluir padding no cálculo do tamanho */

@media (min-width: 1024px) {
  padding: 30px 30px;
}
  `;

export const Title = styled.h2`
  color: white;
  font-size: 2.1rem;
  text-align: center;

  @media (min-width: 1024px) {
    padding: 30px 30px;
  }
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  color: grey;
  text-align: justify;

  @media (min-width: 1024px) {
    padding: 0 5%;
  }
`;

export const CourseList = styled.ul`
  list-style-type: disc;
  padding: 0;
  margin-left: 1rem;
  color: grey;
  text-align: justify;

  @media (min-width: 1024px) {
    padding: 0 5%;
  }
`;

export const CourseItem = styled.li`
  margin-bottom: 0.5rem;
`;
