import React from 'react';
import { LoginForm } from './login-form';
import './login-page.css';


export const LoginPage: React.FC = () => {
  return (
    <div className="login-page">
        <LoginForm/>
    </div>
  )
}
