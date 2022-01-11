import React from 'react'
import {Link} from "react-router-dom";
import "./styles.css"
const Navbar = () => {
    const user = null;
    return (
        <nav className="navbar-container">
            <div classname="navbar-brand">
                <Link className="link brand-link" to="/app">souvenir</Link>
            </div>
           
            <div className="navbar-items">
                <div className="nav-auth">
                {
                user ? (
                    <button className="sign-out btn">sign out</button>
                ): (
                    <Link className="link auth-link sign-in" to="/auth">sign in</Link>
                )
                }   
                </div>
            </div>
        </nav>
    )
}

export default Navbar
