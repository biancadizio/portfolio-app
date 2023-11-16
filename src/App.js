import React from 'react';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Experiences from './components/Experiences/Experiences';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';

function App() {
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
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
      </div>
    </>
  );
}


export default App;
