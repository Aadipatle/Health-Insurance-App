import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function HospitalHome() {
    return (
        <>

            <header className='hospitalnav'>
                <nav className='hnav'>
                    <Link>Home</Link>
                    <Link>List</Link>
                    <Link>Contact</Link>
                </nav>
                <div className="hicon">
                    <strong>abchospital@gmail.com</strong>
                </div>
            </header>
            <div className="hpage">
                <div className="headingwrapper">
                    <div className="health">
                        <h1>Top Class <span>Health</span></h1>
                        <h1><span>Care</span> Hospital </h1>
                    </div>
                   <div className="banner">
                   <h1>insert image</h1>
                   </div>
                </div>
            </div>
        </>
    )
}

export default HospitalHome