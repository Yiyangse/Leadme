import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Header: React.FC = () => {
  return (
    <Nav>
      <NavItem to="/home">Home</NavItem>
      <NavItem to="/todo">Todo</NavItem>
      <NavItem to="/write">Write</NavItem>
      <NavItem to="/login">로그인</NavItem>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #1f9ba1;
`;

const NavItem = styled(Link)`
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  background-color: #1f9ba1;
  color: white;
  border: none;
  border-radius: 30px;

  &:hover {
    background-color: #1c8a90;
  }
`;



export default Header;
