import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="flex justify-around p-4 bg-teal-500">
      <NavItem to="/home">Home</NavItem>
      <NavItem to="/todo">Todo</NavItem>
      <NavItem to="/write">Write</NavItem>
      <NavItem to="/login">로그인</NavItem>
    </nav>
  );
};

// NavItem Props 타입 정의
interface NavItemProps {
  to: string;
  children: React.ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
  return (
    <Link
      to={to}
      className="px-4 py-2 text-white text-lg bg-teal-500 rounded-full hover:bg-teal-600 transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

export default Header;
