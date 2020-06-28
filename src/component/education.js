import React, { Component } from 'react';
import { FaBookOpen, FaUniversity } from "react-icons/fa";
import educationData from '../data/education.json';

class Education extends Component {

    componentDidMount = () => {
        window.document.title = educationData.title;
    }

    render() {
        return (
            <div className="portfolio-inner">
                <div className="portfolio-parent">
                    <div className="portfolio-title">{educationData.title}</div>
                    <p>{educationData.description}</p>
                    <div className="portfolio-timeline-section">
                        {
                            educationData.items.map(function (d, idx) {
                                return (
                                    <ul className="education-timeline">
                                        <li className="education-work">

                                            <span className="education-date">{d.year}</span>

                                            <span className="education-circle"></span>

                                            <div className="education-parent">
                                                <div className="education-table">

                                                    <div className="education-row">
                                                        <div className="education-cell">
                                                            <FaBookOpen />
                                                            <span className="education-degree">{d.degree}</span>
                                                        </div>
                                                    </div>
                                                    <div className="education-row">
                                                        <div className="education-cell">
                                                            <FaUniversity />
                                                            <span className="education-location">{d.location}</span>
                                                        </div>
                                                    </div>
                                                    <div className="education-row">
                                                        <div className="education-cell">
                                                            <span className="education-content">{d.content}</span>
                                                        </div>
                                                    </div>
                                                    <div className="education-row">
                                                        <div className="education-cell">
                                                            <span className="education-grade">{d.grade}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Education;