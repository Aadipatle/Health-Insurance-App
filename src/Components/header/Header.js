import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../Assets/jivit-logo.svg'
import './Header.css'
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
                        <img src='' alt="" /> 
                    </div>
                    <div className={`nav-elements  ${showNavbar && "active"}`}>
                        <ul> 
                            <li>

                                <NavLink className='NavLink' to="" onClick={() => setShowNavbar(!showNavbar)}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink className='NavLink' to="" onClick={() => setShowNavbar(!showNavbar)}>Services</NavLink>
                            </li>
                            <li>
                                <NavLink className='NavLink' to="" onClick={() => setShowNavbar(!showNavbar)}>About</NavLink>
                            </li>
                            <li>
                                <NavLink className='NavLink' to="" onClick={() => setShowNavbar(!showNavbar)}>Testimional</NavLink>
                            </li>
                            <li>
                                <NavLink className='NavLink' to="" onClick={() => setShowNavbar(!showNavbar)}>Contact</NavLink>
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