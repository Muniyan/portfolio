import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo  from '../images/muniyan.jpg';
import contactData from '../data/contact.json';
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

class Sidebar extends Component {
    
    render() {
        return (
            <div className="sidebar-parent">
                <a href="/" className="sidebar-user-url">
                    <div className="sidebar-user-photo">
                        <img alt="Hemant" src={logo} />
                    </div>
                    <div className="sidebar-user-content">
                        <h1 className="sidebar-user-name">Muniyan P</h1>
                        <h2 className="sidebar-user-title">Software Engineer</h2>
                    </div>
                </a>

                <nav className="sidebar-navigation">
                    <ul>
                        <li><NavLink to="/" exact activeClassName="selectedNavLink">About</NavLink></li>
                        <li><NavLink to="/experience" activeClassName="selectedNavLink">Experience</NavLink></li>
                        <li><NavLink to="/education" activeClassName="selectedNavLink">Education</NavLink></li>
                        <li><NavLink to="/projects" activeClassName="selectedNavLink">Projets</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="selectedNavLink">Contact</NavLink></li>
                    </ul>
                </nav>

                <div className="sidebar-social">
                    <div className="sidebar-title">
                        Get in touch
                    </div>
                    <div className="sidebar-content">
                        <a href={contactData.profile[0].url} className="sidebar-button">
                            <AiOutlineMail />
                        </a>

                        <a href={contactData.profile[1].url} className="sidebar-button" rel="noopener noreferrer" target="_blank">
                            <AiFillLinkedin />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;