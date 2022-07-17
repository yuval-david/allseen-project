import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from './Header';
import AsideBg from './AsideBg';
import LoginForm from './LoginForm';


export default function Login() {
    return (
        <div className="login-comp">
            <Header />
            <div>
                <LoginForm />
            </div>
        </div>
    )
}
