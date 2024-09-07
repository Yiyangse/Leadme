// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC<{ toggleTheme: () => void; isLight: boolean }> = ({ toggleTheme, isLight }) => {
  return (
    <nav className={`flex justify-between items-center p-4 ${isLight ? 'bg-teal-500' : 'bg-gray-800'} text-white`}>
      <div className="flex gap-4">
        <NavItem to="/home">Home</NavItem>
        <NavItem to="/todo">Todo</NavItem>
        <NavItem to="/write">Write</NavItem>
        <NavItem to="/mypage">Mypage</NavItem>
        <NavItem to="/login">로그인</NavItem>
      </div>
      <button
        onClick={toggleTheme}
        className={`px-4 py-2 ${isLight ? 'bg-gray-500' : 'bg-gray-700'} text-white rounded-md hover:${isLight ? 'bg-gray-600' : 'bg-gray-600'} flex items-center justify-center`}
      >
        {isLight ? '🌙 Dark' : '💡 Light'}
      </button>
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
      className="px-4 py-2 rounded-full hover:bg-teal-600 transition-colors duration-300"
    >
      {children}
    </Link>
  );
};

export default Header;
