import React from 'react'
import './Header.css'

const Header = () => (
    <div>
        <header>
            <h3 className="logo">Logo</h3>
            <nav>
                <ul className="nav_links">
                    <li><a href="/">Services</a></li>
                    <li><a href="/">About</a></li>
                </ul>
            </nav>
            <a href="/" className="btn btn-primary">Contact</a>
        </header>
    </div>
)


export default Header