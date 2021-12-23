import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ForgotPassword from './ForgotPassword';
import LoginForm from './LoginForm';
import ResetPassword from './ResetPassword';
import SignUp from './SignUp';

const Login = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="sign_up" element={<SignUp />} />
        <Route path="forgot_password" element={<ForgotPassword />} />
        <Route path="reset_password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
};

export default Login;
