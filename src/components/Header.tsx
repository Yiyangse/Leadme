import React from 'react';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo>LEAD me</Logo>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  background-color:  #1f9ba1;
  padding: 20px;
  text-align: center;
  width: 100%;
`;

const Logo = styled.h1`
  font-size: 2em;
  color: white;
  margin: 0;
`;

export default Header;
