import React from 'react';
import styled from 'styled-components';

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterText>© 2024 Lead me</FooterText>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background-color: deepgreen;
  padding: 10px;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const FooterText = styled.p`
  color: white;
  margin: 0;
`;

export default Footer;
