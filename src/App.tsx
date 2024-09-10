// src/App.tsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Todo from './pages/Todo';
import Write from './pages/Write';
import Mypage from './pages/auth/Mypage';
import Login from './pages/auth/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Signup from './pages/auth/Signup';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/theme';
import { GlobalStyle } from './style/GlobalStyles';
import MainLogin from './pages/auth/MainLogin';
import EmailLogin from './pages/auth/EmailLogin';
import MainSignup from './pages/auth/MainSignup';
import SignupForm from './pages/auth/Signup';
import SignupForm3 from './pages/auth/Signup3';
import SignupForm2 from './pages/auth/Signup2';
import SignupForm4 from './pages/auth/Signup4';
import Logout from './pages/auth/Logout';
import MaeGeul from './pages/Writing/Maeguel';

const App: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <div className={`App ${theme}`}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/write" element={<Write />} />
            <Route path='/mypage' element={<Mypage />} />
            <Route path="/maegeul" element={<MaeGeul />} />
            <Route path="/login" element={<Login />} />
            <Route path="/email-login" element={<EmailLogin />} />
            <Route path="/mainsignup" element={<MainSignup />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/mainlogin" element={<MainLogin/>} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/signup2" element={<SignupForm2 />} />
            <Route path="/signup3" element={<SignupForm3 />} />
            <Route path="/signup4" element={<SignupForm4 />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/mainlogin" element={<MainLogin/>} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
