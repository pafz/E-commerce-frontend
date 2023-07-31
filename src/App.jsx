import { useState } from 'react';
import './App.scss';
import Home from './components/Home/Home';
import { GlobalProvider } from './context/GlobalState';
import Characters from './components/Characters/Characters';
import Register from './components/Register/Register';
import ViewProducts from './components/ViewProducts/ViewProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';

//TODO: is GlobalProvider outside??
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <GlobalProvider>
          <Register />
          <ViewProducts />
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
