import React, { useState } from 'react';
import { HeaderWrapper, Button, LeftContent, RightContent, Name, FrontendDeveloper, MobileMenu, MobileMenuButton } from './Header-styled.js';
import { FaCode, FaBars } from 'react-icons/fa';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      if (isMobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <HeaderWrapper>
      <LeftContent>
        <Name>
          <FaCode size={32} color="#007bff" /> BiaCode
        </Name>
        <FrontendDeveloper> TESTEEEEEE Frontend Developer</FrontendDeveloper>
      </LeftContent>
      <MobileMenuButton onClick={toggleMobileMenu}>
        <FaBars size={24} color="white" />
      </MobileMenuButton>
      {isMobileMenuOpen && (
        <MobileMenu>
          <Button onClick={() => scrollToSection('#inicio')}>Início</Button>
          <Button onClick={() => scrollToSection('#sobremim')}>Sobre mim</Button>
          <Button onClick={() => scrollToSection('#educacao')}>Educação</Button>
          <Button onClick={() => scrollToSection('#experiencias')}>Experiências</Button>
          <Button onClick={() => scrollToSection('#projetos')}>Projetos</Button>
          <Button onClick={() => scrollToSection('#servicos')}>Serviços</Button>
          <Button onClick={() => scrollToSection('#contato')}>Contato</Button>
        </MobileMenu>
      )}
    </HeaderWrapper>
  );
};

export default Header;
