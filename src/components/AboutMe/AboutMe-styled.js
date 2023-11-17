import styled from 'styled-components';

export const AboutMeWrapper = styled.div`
  background-color: black;
  color: white;
  padding: 2rem 3rem;
  margin-top: 10rem;
`;

export const Title = styled.h2`
  color: #ffffff;
  font-size: 2.1rem;
  margin-left: 6.5%;
  padding-top: 0;
  // background-color: #111111;
  margin-top: 0;
`;

export const Title2 = styled.h2`
  color: #ffffff;
  margin-left: 6.5%;
  // background-color: red;
`;

export const Paragraph = styled.p`
  margin-bottom: 1rem;
  width: 80%;
  text-align: justify;
  color: #989fab;
  margin-left: 6.5%;
  // background-color: purple;
`;

export const TechnologiesList = styled.ul`
  list-style-type: disc;
  margin-left: 1.5rem;
`;

// export const ListItem = styled.li`
//   margin-bottom: 0.5rem;
// `;

export const ContainerTecnologies = styled.div`
display: inline-block;
border-radius: 10px;
padding: 1.5rem;
margin:5px;
font-size: 4rem;
background-color: #111111;
color: #b9ef37;
border: 1px solid #1f1f1f;
`;


export const ContainerAboutMe = styled.div`
width: 60%;
display: inline-block;
margin-left: 5%;
// background-color: yellow;
padding: 0;

margin-bottom: 0;
`;

export const ContainerImage = styled.div`
background-image: url(${props => props.image});
display: inline-block;
width: 20%;
height: 30%;
margin-left: 10%;


img{
border-radius: 30px;
}
`;