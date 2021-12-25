import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Api from './api/Api';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ProtectedRoute from './Components/Helpers/ProtectedRoute';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './Components/User/User';
import { UserStorage } from './Contexts/User';

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login/*" element={<Login />} />
            <Route
              path="account/*"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
