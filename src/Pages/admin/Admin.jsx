import React from 'react'
import './Admin.css'
import logo from '../../Assets/jivit-logo.svg'
import { Link, Outlet } from 'react-router-dom'
import { FaHeart, FaHospital, FaUser } from 'react-icons/fa'


function Admin() {
    return ( 
        <>
             <header className='admin-header'>
                <div className="header-icon">
                    <img src={logo} alt="" />
                </div>
                <div className="admin-logo">
                <h5><FaUser/> Admin@gmail.com</h5>
                </div>
             </header>
            <hr />
            <aside>
                <div className="sidebar">
                    <div className="items">
                        <div className="dash">
                           <Link to='/admin'><button>Dashboard</button></Link> 
                        </div>
                        <hr />
                        <div className="hospital">
                            <h5><FaHospital /> Hospital</h5>
                            <Link to='hospital'>Add Hospital</Link>
                            <Link to='hospital'>Hospital List</Link>
                            <Link to='hospital'>Hospital Claim</Link>
                            <Link to='hospital'>Hospital Payments</Link>
                        </div>
                        <hr />
                        <div className="health">
                            <h5><FaHeart /> Health Checkup</h5>
                            <Link to='hospital'>Health List</Link>
                        </div>
                        <hr />
                        <div className="admin-customers">
                            <h5><FaUser /> Customers</h5>
                            <Link to='hospital'>Add Benificiary</Link>
                            <Link to='hospital'>Customers List</Link>
                            
                        </div>
                    </div>
                </div>
                <section>
                    <Outlet />
                </section>
            </aside>
        </>
    )
}

export default Admin