import React from 'react';
import { ContactWrapper, Title, ContactItem, IconLink, Icon } from './Contact-styled';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa'; // Importe os ícones desejados

const Contact = () => {
  return (
    <ContactWrapper>
      <Title>Contato</Title>
      <ContactItem>
        <IconLink href="https://www.instagram.com/biancagdizio/" target="_blank" rel="noopener noreferrer">
          <Icon>
            <FaInstagram />
          </Icon>
        </IconLink>
      </ContactItem>
      <ContactItem>
        <IconLink href="https://www.linkedin.com/in/biancagdizio/" target="_blank" rel="noopener noreferrer">
          <Icon>
            <FaLinkedin />
          </Icon>
        </IconLink>
      </ContactItem>
      <ContactItem>
        <IconLink href="https://github.com/biancadizio" target="_blank" rel="noopener noreferrer">
          <Icon>
            <FaGithub />
          </Icon>
        </IconLink>
      </ContactItem>
      <ContactItem>
        <a href="mailto:bianca.gdizio@gmail.com">
          <Icon>
            ✉️
          </Icon>
        </a>
      </ContactItem>
    </ContactWrapper>
  );
};

export default Contact;
