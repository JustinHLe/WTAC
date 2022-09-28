import React from "react";
import './Navbar.scss'
import wtac from '../../shared/images/wtac logo.png'
export const Navbar = () => {


    return (
        <header className="navbar">
            <div className="navbar__logo">
                <img src={wtac} alt="wtac"></img>
                <div>Western Tactical</div>
            </div>
            <div className="navbar__route">
                <span>About</span>
                <span>Recruitment</span>
                <span>Contact</span>
                <span>Schedule</span>
                <span>Players</span>
            </div>
        </header>
    )
}