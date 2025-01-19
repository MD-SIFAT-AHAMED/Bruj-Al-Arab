import React from 'react';
import logo from '../../Images/Icons/logo.png';
import header from '../../Images/header.png';
import { Link } from 'react-router';
import './Header.css';
const Header = () => {
    return (
        <div style={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.5),rgba(0, 0, 0, 0.5)),url(${header})`}} className='headerImg'>
            <nav className='navber'>
                <ul>
                    <li> <img className='logoImg' src={logo} alt="logo" /> </li>
                    <li> <Link to='/home' >Home</Link> </li>
                    <li> <Link to='/login' >Login</Link> </li>
                    <li> <Link to='/book' >Book</Link> </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;