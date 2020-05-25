import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo  from '../images/hemant.jpg';
import { SocialIcon } from 'react-social-icons';

class Sidebar extends Component {
    
    render() {
        return (
            <div className="sidebar-parent">
                <a href="/" className="sidebar-user-url">
                    <div className="sidebar-user-photo">
                        <img src={logo} />
                    </div>
                    <div className="sidebar-user-content">
                        <h1 className="sidebar-user-name">Hemant Kumar Singh</h1>
                        <h2 className="sidebar-user-title">Full-stack Software Engineer</h2>
                    </div>
                </a>

                <nav className="sidebar-navigation">
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/resume">Resume</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>

                <div className="sidebar-social">
                    <div className="sidebar-title">
                        Get in touch
                    </div>
                    <div className="sidebar-content">
                        <a href="#" className="sidebar-button">
                            <SocialIcon className="sidebar-icon" network="email" fgColor="#ff5a01" style={{ height: 30, width: 30 }} />
                        </a>
                        <a href="#" className="sidebar-button">
                            <SocialIcon className="sidebar-icon" network="facebook" fgColor="#ff5a01" style={{ height: 30, width: 30 }} />
                        </a>
                        <a href="#" className="sidebar-button">
                            <SocialIcon className="sidebar-icon" network="linkedin" fgColor="#ff5a01" style={{ height: 30, width: 30 }} />
                        </a>
                        <a href="#" className="sidebar-button">
                            <SocialIcon className="sidebar-icon" network="twitter" fgColor="#ff5a01" style={{ height: 30, width: 30 }} />
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;