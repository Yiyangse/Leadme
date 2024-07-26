import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Main from './Main';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { GlobalStyle } from '../App.styles';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
