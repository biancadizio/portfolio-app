// Contact.jsx
import React from 'react';
import { ContactWrapper, Title, ContactItem, IconLink, IconContainer, Icon } from './Contact-styled';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
// import { ContainerContact } from '../AboutMe/AboutMe-styled';
import { ContainerContact } from '../Contact/Contact-styled';

const Contact = () => {
  return (
    <ContactWrapper>
      <Title>Contato:</Title>
      <IconContainer>
        <ContainerContact>
          <ContactItem>
            <IconLink href="https://www.instagram.com/biancagdizio/" target="_blank" rel="noopener noreferrer">
              <Icon>
                <FaInstagram />
              </Icon>
            </IconLink>
          </ContactItem>
        </ContainerContact>
        <ContainerContact>
          <ContactItem>
            <IconLink href="https://www.linkedin.com/in/biancagdizio/" target="_blank" rel="noopener noreferrer">
              <Icon>
                <FaLinkedin />
              </Icon>
            </IconLink>
          </ContactItem>
        </ContainerContact>
        <ContainerContact>
          <ContactItem>
            <IconLink href="https://github.com/biancadizio" target="_blank" rel="noopener noreferrer">
              <Icon>
                <FaGithub />
              </Icon>
            </IconLink>
          </ContactItem>
        </ContainerContact>

      </IconContainer>
      <p style={{ color: 'grey', fontSize: '18px' }}>bianca.gdizio@gmail.com</p>
    </ContactWrapper>
  );
};

export default Contact;
