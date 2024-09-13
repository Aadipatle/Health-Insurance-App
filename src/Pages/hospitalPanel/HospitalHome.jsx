import React from 'react'
import './Home.css'

function HospitalHome() {
    return (
        <>

            <header className='hospitalnav'>
                <nav className='hnav'>
                    <li>Home</li>
                    <li>List</li>
                    <li>Contact</li>
                </nav>
                <div className="hicon">
                    <strong>abchospital@gmail.com</strong>
                </div>
            </header>
            <div className="hpage">
                <h1>Welcome in Doctor Panel</h1>
            </div>
        </>
    )
}

export default HospitalHome