import React, { useState } from 'react'; // useState를 import합니다.
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Write from './pages/Write';
import Login from './pages/auth/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './pages/auth/Signup';
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./style/theme";
import { GlobalStyle } from "./style/GlobalStyles";
import styled from "styled-components";
import ButtonList from './components/ButtonList';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light'); // useState 사용

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <div className={`App ${theme}`}>
          <Header />
          <ButtonList toggleTheme={toggleTheme} isLight={theme === 'light'} />
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/write" element={<Write />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
