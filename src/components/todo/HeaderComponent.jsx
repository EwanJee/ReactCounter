// import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './security/AuthContext';
//import { AuthContext } from './security/AuthContext';

export default function HeaderComponent(){
    const authContext = useAuth();
    const isAuthenticated = authContext.isAuthenticated;

    function logout(){
        authContext.logout();
    }

    return (
        <header className="border-bottom border-light border-5 mb-5 p-2">
            <div className='container'>
                <div className='row'>
                <nav className='navbar navbar-expand-lg'>
                <a className='navbar-brand ms-2 fs-2 fw-bold text-black' href='www.ewanjee.com'>EwanJee</a>
                <div className='collapse navbar-collapse'>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                    {isAuthenticated && <Link className='nav-link' to='/welcome/user'>Home</Link>}
                    {isAuthenticated && <Link className='nav-link' to='/todos'>Todos</Link>}
                    </li>
                </ul>
                </div>
                <ul className='navbar-nav'>
                    <li className='nav-item'>
                    {!isAuthenticated && <Link className='nav-link' to='/'>Login</Link>}
                    </li>
                    <li className='nav-item'>
                    {isAuthenticated && <Link className='nav-link' to='/logout' onClick={logout}>Logout</Link>}
                    </li>
                </ul>
                </nav>
                </div>
            </div>
        </header>
    )
};