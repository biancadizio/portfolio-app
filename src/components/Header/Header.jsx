import React, { useState, useEffect } from 'react';
import {
  HeaderWrapper,
  Navigation,
  MobileMenu,
  MobileMenuButton,
  LeftContent,
  Title,
  Description,
  ButtonOne,
} from './Header-styled';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setMobileView] = useState(false);

  const handleResize = () => {
    setMobileView(window.innerWidth <= 815);
  };

  useEffect(() => {
    handleResize(); // Define o estado inicial

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      const headerHeight = document.querySelector('header').offsetHeight;
      window.scrollTo({
        top: section.offsetTop - headerHeight - 100,
        behavior: 'smooth',
      });
      if (isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <LeftContent>
        <Title>
          <FaCode size={32} color="#b9ef37" /> BiaCode
          <Description>Frontend Developer</Description>
        </Title>
      </LeftContent>
      <HeaderWrapper>
        <Navigation>
          {isMobileView ? (
            <>
              <MobileMenuButton onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <FaTimes size={24} color="grey" /> : <FaBars size={24} color="grey" />}
              </MobileMenuButton>
              {isMobileMenuOpen && (
                <MobileMenu onClick={(e) => e.stopPropagation()}>
                  {/* <ButtonOne onClick={() => scrollToSection('#inicio')}>Início</ButtonOne> */}
                  <ButtonOne onClick={() => scrollToSection('#sobremim')}>Sobre mim</ButtonOne>
                  <ButtonOne onClick={() => scrollToSection('#educacao')}>Educação</ButtonOne>
                  <ButtonOne onClick={() => scrollToSection('#experiencias')}>Experiências</ButtonOne>
                  <ButtonOne onClick={() => scrollToSection('#projetos')}>Projetos</ButtonOne>
                  <ButtonOne onClick={() => scrollToSection('#servicos')}>Serviços</ButtonOne>
                  <ButtonOne onClick={() => scrollToSection('#contato')}>Contato</ButtonOne>
                </MobileMenu>
              )}
            </>
          ) : (
            <>
              <ButtonOne onClick={() => scrollToSection('#inicio')}>Início</ButtonOne>
              <ButtonOne onClick={() => scrollToSection('#sobremim')}>Sobre mim</ButtonOne>
              <ButtonOne onClick={() => scrollToSection('#educacao')}>Educação</ButtonOne>
              <ButtonOne onClick={() => scrollToSection('#experiencias')}>Experiências</ButtonOne>
              <ButtonOne onClick={() => scrollToSection('#projetos')}>Projetos</ButtonOne>
              <ButtonOne onClick={() => scrollToSection('#servicos')}>Serviços</ButtonOne>
              <ButtonOne onClick={() => scrollToSection('#contato')}>Contato</ButtonOne>
            </>
          )}
        </Navigation>
      </HeaderWrapper>
    </>
  );
};

export default Header;
