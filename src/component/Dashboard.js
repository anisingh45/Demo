import React from 'react';
import { BrowserRouter as Router , Routes, Route, Link } from 'react-router-dom';
import './CSS/style.css';
import {doLogout} from '../Configuration/ApiConfig'

import { Outlet } from 'react-router-dom';

export default function Dashboard() {

function logout(){
    doLogout();

}






  return (
    <div className='main-container'>
    <div className="sidebar">
        <ul>
            <li>
                <Link to="/dashboard/home" className="nav-link">
                    <span className="item-icon">
                        <i className="bx bxs-home"></i>
                    </span>
                    <span className="item-text">Home</span>

                </Link>
            </li>
            <li>
                <Link to="/dashboard/about" className="nav-link">
                    <span className="item-icon">
                        <i className="bx bxs-info-circle"></i>
                    </span>
                    <span className="item-text">About</span>
                    
                </Link>
            </li>
            <li>
                <Link to="/dashboard/service" className="nav-link">
                    <span className="item-icon">
                        <i className="bx bx-task"></i>
                    </span>
                    <span className="item-text">Services</span>
                    
                </Link>
            </li>
            <li>
                <Link to="/dashboard/contact" className="nav-link">
                    <span className="item-icon">
                        <i className="bx bxs-contact"></i>
                    </span>
                    <span className="item-text">Contact</span>
                    
                </Link>
            </li>
            <li>
                <Link to="/dashboard/login" className="nav-link">
                    <span className="item-icon">
                        <i className="bx bxs-contact"></i>
                    </span>
                    <span className="item-text">Login</span>
                    
                </Link>
            </li>
            <li>
                <Link to="/dashboard/signup" className="nav-link">
                    <span className="item-icon">
                        <i className="bx bxs-contact"></i>
                    </span>
                    <span className="item-text">Sign-Up</span>
                    
                </Link>
            </li>
            <li>
                <Link to="#" className="nav-link">
                    <span className="item-icon">
                        <i className="bx bxs-contact"></i>
                    </span>
                    <span className="item-text" onClick={logout}>Log-Out</span>
                    
                </Link>
            </li>
        </ul>
    </div>
    <div className='content'>
    <Outlet />
    </div>
    </div>
  )
}

