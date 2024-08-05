import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import { GlobalStyle } from './App.styles';
import Todo from './pages/Todo';

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Todo />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
