import React from 'react';
import { ProjectsWrapper, Title, Project } from './Projects-styled';


const Projects = () => {
  return (
    <ProjectsWrapper>
      <Title>Meus Projetos</Title>
      <Project>
        <h3>Projeto 1</h3>
        <p>Descrição do projeto 1.</p>
      </Project>
      <Project>
        <h3>Projeto 2</h3>
        <p>Descrição do projeto 2.</p>
      </Project>
    </ProjectsWrapper>
  );
};

export default Projects;
