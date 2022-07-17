import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import allSeenLogo from '../img/all-seen-logo.jpeg';
import allSeenLogo from '../img/logo-white.jpeg';


export default function Header() {
    return (
        <div className="header-comp">
            <nav>
                <NavLink className="logo-head" to="/">
                    <img src={allSeenLogo} alt="all-seen" />
                </NavLink>
            </nav>
        </div>
    )
}
