import styled from 'styled-components';

export const ServicesWrapper = styled.div`
  background-color: #000000;
  padding: 0.5px 25px 30px 25px;
  width: 100%;

  @media (min-width: 1024px) {
  padding: 30px 60px 30px 60px;
`;

export const Title = styled.h1`
  color: white;
  text-align: center;

  @media (min-width: 1024px) {
    background-color: blue
    padding-top: 30px;
    margin-top: 50px;
  }
  `;

export const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  width: 100%;

  @media (min-width: 1024px) {
    // margin: 60px 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 30px 90px 30px 90px;
  }
    
`;

export const ServiceItem = styled.div`
  flex-basis: calc(50% - 1rem);
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  color: grey;
  padding: 0.5px 0 0 0;

  @media (min-width: 1024px) {
    margin: 30px 20px 30px 20px;
  }
  
`;

export const Icon = styled.span`
  font-size: 2rem;
  margin-top: 1rem;
`;

export const Description = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
  text-align: justify;
  padding: 0 0.5rem;

  @media (min-width: 1024px) {
    text-align: center;
`;
