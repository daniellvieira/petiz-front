import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Api from './api/Api';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import SignIn from './Components/SignIn/SignIn';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign_in" element={<SignIn />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
