import React from 'react';
import Auth from '../utils/auth';
import { Link } from 'react-router-dom';
import KnightLogo from '../components/img/KnightLogo.png';


const NavBar = () => {
    const showNavigation = () => {
        if (Auth.loggedIn()) {
            return (

                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    {/* Clicking this should take the user home */}
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"></svg>
                    {/* Placeholder image - I'll commission a real legit logo when we can agree on one */}
                    <img src= {KnightLogo} alt="logo"></img>
                    <span className="fs-4">Date Knight</span>
                    </a>

                    <ul className="nav nav-pills">
                       <li className="nav-item">
                            <Link to="/dashboard" className='nav-link'>
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className = 'nav-link' href='/' onClick={() => Auth.logout()}>Logout</a>
                        </li>
                        {/* <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li> */}
                        <li className='nav-item'>
                            <Link to="/profile" className='nav-link'>
                                Profile
                            </Link>
                        </li>
`                    </ul>
                </header>

            )
        } else {
            return (
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
                    {/* Clicking this should take the user home */}
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <svg className="bi me-2" width="40" height="32"></svg>
                    {/* Placeholder image - I'll commission a real legit logo when we can agree on one */}
                    <img src= {KnightLogo} alt="logo"></img>
                    <span className="fs-4">Date Knight</span>
                    </a>

                    <ul className="nav nav-pills">
                       <li className="nav-item">
                            <Link to="/signup" className='nav-link'>
                                Signup
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/login" className='nav-link'>
                                Login
                            </Link>
                        </li>
                        {/* <li className="nav-item"><a href="#" className="nav-link">FAQs</a></li>
                        <li className="nav-item"><a href="#" className="nav-link">About</a></li> */}
`                    </ul>
                </header>
            )
        }
    }

    return (
        <header className='flex-row px-1'>
            <nav>
                {showNavigation()}
            </nav>
        </header>
    );
}
export default NavBar;




