import React, { Component } from 'react';
import aboutData from '../data/about.json';

class About extends Component {

    render() {
        return (
            <div className="about-inner">
                <div className="about-parent">
                    <div className="about-title">{aboutData.title}</div>
                    <p className="about-desc">{aboutData.description}</p>
                    <p className="about-content">{aboutData.content}</p>
                    <div className="about-section">
                        <div className="about-profile">
                            <h3 className="about-profile-title">{aboutData.profile.title}</h3>
                            <p className="about-profile-desc">{aboutData.profile.description}</p>

                            <ul className="about-ul">
                                {aboutData.profile.profile.map(function (p) {
                                    return (
                                        <li className="about-li">
                                            <strong className="about-key">{p.key}</strong>
                                            <span className="about-value">{p.value}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>

                        <div className="about-skills">
                            <h3 className="about-skills-title">{aboutData.skills.title}</h3>
                            <p className="about-skills-desc">{aboutData.skills.description}</p>

                            <ul className="about-ul">
                                {aboutData.skills.skills.map(function (s) {
                                    return (
                                        <li className="about-li">
                                            <strong className="about-key">{s.key}</strong>
                                            <div className="about-progress-container">
                                                <div className={"about-progress-skills " + s.color} style={{width: s.value}}>{s.value}</div>
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;