import React, { useState, useEffect } from 'react';
import { HeaderWrapper, Navigation, MobileMenu, MobileMenuButton, Button, LeftContent, Title, Description } from './Header-styled';
import { FaCode, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  useEffect(() => {
    const closeMobileMenu = () => {
      if (isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', closeMobileMenu);

    return () => {
      document.removeEventListener('click', closeMobileMenu);
    };
  }, [isMobileMenuOpen]);

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
          <MobileMenuButton onClick={toggleMobileMenu}>
            <FaBars size={24} color="grey" />
          </MobileMenuButton>
          {isMobileMenuOpen && (
            <MobileMenu onClick={(e) => e.stopPropagation()}>
              <Button onClick={() => scrollToSection('#inicio')}>Início</Button>
              <Button onClick={() => scrollToSection('#sobremim')}>Sobre mim</Button>
              <Button onClick={() => scrollToSection('#educacao')}>Educação</Button>
              <Button onClick={() => scrollToSection('#experiencias')}>Experiências</Button>
              <Button onClick={() => scrollToSection('#projetos')}>Projetos</Button>
              <Button onClick={() => scrollToSection('#servicos')}>Serviços</Button>
              <Button onClick={() => scrollToSection('#contato')}>Contato</Button>
            </MobileMenu>
          )}
          <Button onClick={() => scrollToSection('#inicio')}>Início</Button>
          <Button onClick={() => scrollToSection('#sobremim')}>Sobre mim</Button>
          <Button onClick={() => scrollToSection('#educacao')}>Educação</Button>
          <Button onClick={() => scrollToSection('#experiencias')}>Experiências</Button>
          <Button onClick={() => scrollToSection('#projetos')}>Projetos</Button>
          <Button onClick={() => scrollToSection('#servicos')}>Serviços</Button>
          <Button onClick={() => scrollToSection('#contato')}>Contato</Button>
        </Navigation>
      </HeaderWrapper>
    </>
  );
};

export default Header;
