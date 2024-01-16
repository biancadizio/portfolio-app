import React from 'react';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Experiences from './components/Experiences/Experiences';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import { Container } from './App-styled';
import Footer from './components/Footer/Footer';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    background-color: #F4F4F4;
    color: #333;
    margin: 0;
    padding: 0;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div >
        <Header />
      </div>
      
      <div >
        <section id="inicio">
        </section>

        <section id="sobremim">
          <AboutMe />
        </section>

        <section id="educacao">
          <Education />
        </section>

        <section id="experiencias">
          <Experiences />
        </section>

        <section id="projetos">
          <Projects />
        </section>

        <section id="servicos">
          <Services />
        </section>

        <section id="contato">
          <Contact />
        </section>

        <section id="footer">
          <Footer/>
        </section>
      </div>
    </>
  );
}


export default App;
