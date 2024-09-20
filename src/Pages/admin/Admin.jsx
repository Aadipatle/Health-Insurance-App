import React, { useState } from 'react'
import './Admin.css'
import logo from '../../Assets/jivit-logo.svg'
import { Link, Outlet } from 'react-router-dom'
import { FaHeart, FaHospital, FaUser,FaBars,FaCut } from 'react-icons/fa'


function Admin() {
    const [icon, setIcon] = useState(false)
    return (
        <>
            <header className='admin-header'>
                <div className="header-icon">
                    <img src={logo} alt="" />
                </div>
                <div className="admin-logo">
                    <h5><FaUser /> Admin@gmail.com</h5>
                </div>
            </header>
            <hr />
            <aside>
                <div className="hidden" onClick={() => {
                    setIcon(!icon)
                }}>{icon ? <FaCut/> : <FaBars/> } </div>
                <div className='sidebar'>
                    <div className="items">
                        <div className="dash">
                            <Link to='/admin'><button>Dashboard</button></Link>

                        </div>
                        <hr />
                        <div className="hospital">
                            <h5><FaHospital /> Hospital</h5>
                            <Link to='hospitalform' >Add Hospital</Link>
                            <Link to='hospital'>Hospital List</Link>
                            <Link to='hospital'>Hospital Claim</Link>
                            <Link to='hospitalpay'>Hospital Payments</Link>
                        </div>
                        <hr />
                        <div className="health">
                            <h5><FaHeart /> Health Checkup</h5>
                            <Link to='hospital'>Health List</Link>
                        </div>
                        <hr />
                        <div className="admin-customers">
                            <h5><FaUser /> Customers</h5>
                            <Link to='empform'>Add Benificiary</Link>
                            <Link to='familyform'>Add Family Members</Link>
                            <Link to='emplist'>Customers List</Link>
                        </div>
                    </div>
                </div>
                {
                    icon &&
                    <div className="items1">
                        <div className="dash">
                            <Link to='/admin'><button>Dashboard</button></Link>

                        </div>
                        <hr />
                        <div className="hospital">
                            <h5><FaHospital /> Hospital</h5>
                            <Link to='hospitalform' onClick={() => {
                                setIcon(!icon)
                            }}>Add Hospital</Link>
                            <Link to='hospital' onClick={() => {
                                setIcon(!icon)
                            }}>Hospital List</Link>
                            <Link to='hospital' onClick={() => {
                                setIcon(!icon)
                            }}>Hospital Claim</Link>
                            <Link to='hospitalpay' onClick={() => {
                                setIcon(!icon)
                            }}>Hospital Payments</Link>
                        </div>
                        <hr />
                        <div className="health">
                            <h5> <FaHeart /> Health Checkup</h5>
                            <Link to='hospital' onClick={() => {
                                setIcon(!icon)
                            }}>Health List</Link>
                        </div>
                        <hr />
                        <div className="admin-customers">
                            <h5><FaUser /> Customers</h5>
                            <Link to='empform' onClick={() => {
                                setIcon(!icon)
                            }}>Add Benificiary</Link>
                            <Link to='familyform' onClick={() => {
                                setIcon(!icon)
                            }}>Add Family Members</Link>
                            <Link to='hospital' onClick={() => {
                                setIcon(!icon)
                            }}>Customers List</Link>
                        </div>
                    </div>
                }
                <section>
                    <Outlet />
                </section>
            </aside>
        </>
    )
}

export default Admin