import React from 'react';
import { MobileMenu, ButtonOne, ToggleMenuWrapper } from './HamburguerMenu-styled';
// import ToggleMenu from './ToggleMenu';

const HamburguerMenu = ({ isMobileMenuOpen, toggleMobileMenu }) => {
  return (
    <>
      <ToggleMenuWrapper isMenuOpen={isMobileMenuOpen} toggleMenu={toggleMobileMenu} />
      {isMobileMenuOpen && (
        <MobileMenu onClick={(e) => e.stopPropagation()}>
          <ButtonOne>Início</ButtonOne>
          <ButtonOne>Sobre mim</ButtonOne>
          <ButtonOne>Educação</ButtonOne>
          <ButtonOne>Experiências</ButtonOne>
          <ButtonOne>Projetos</ButtonOne>
          <ButtonOne>Serviços</ButtonOne>
          <ButtonOne>Contato</ButtonOne>
        </MobileMenu>
      )}
    </>
  );
};

export default HamburguerMenu;

