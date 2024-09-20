import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Assets/jivit-logo.svg'
import './Header.css'
import { HashLink } from 'react-router-hash-link';
import { FaBars } from 'react-icons/fa';
function Header() {
    const [showNavbar, setShowNavbar] = React.useState(false);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    };

    return (
        <>
            <nav className="navbar">
                <div className="hcontainer">
                    <div className="logo">
                        <NavLink to="/"><img src={logo} alt="" /> </NavLink>
                    </div>
                    <div className="menu-icon" onClick={handleShowNavbar}>
                       <FaBars/>
                    </div>
                    <div className={`nav-elements  ${showNavbar && "active"}`}>
                        <ul>
                            <li>
                                <HashLink className='NavLink' to="/" onClick={() => setShowNavbar(!showNavbar)}>Home</HashLink>
                            </li>
                            <li>
                                <HashLink className='NavLink' to="/#service" onClick={() => setShowNavbar(!showNavbar)}>Services</HashLink>
                            </li>
                            <li>
                                <HashLink className='NavLink' to="/#about" onClick={() => setShowNavbar(!showNavbar)}>About</HashLink>
                            </li>
                            <li>
                                <HashLink className='NavLink' to="/#feedback" onClick={() => setShowNavbar(!showNavbar)}>Testimional</HashLink>
                            </li>
                            <li>
                                <HashLink className='NavLink' to="/#footer" onClick={() => setShowNavbar(!showNavbar)}>Contact</HashLink>
                            </li>
                            <li>
                                <NavLink className='NavLink' to="" onClick={() => setShowNavbar(!showNavbar)}>Hospital List</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header