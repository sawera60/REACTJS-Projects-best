import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="container nav-inner">
                <h2 className='logo'>
                    SHOE<span>HUB</span>
                </h2>
                <ul className="nav-links">
                    <li>Home</li>
                    <li>Shop</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Contact</li>
                </ul>

                <button className='btn-container'>
                    <button className='btn'>Login</button>
                </button>
            </div>

        </nav>
    )
}

export default Navbar