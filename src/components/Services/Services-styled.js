import styled from 'styled-components';

export const ServicesWrapper = styled.div`
  background-color: #000000;
  // padding: 2rem 3rem;
  width: 100%;
`;

export const Title = styled.h2`
  color: white;
`;

export const ServiceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  width: 100%;
`;

export const ServiceItem = styled.div`
  flex-basis: calc(50% - 1rem);
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  text-align: center;
  color: grey;
`;

export const Icon = styled.span`
  font-size: 2rem;
`;

export const Description = styled.p`
  margin-top: 1rem;
  font-size: 1rem;
`;
