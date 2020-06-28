import React, { Component } from 'react';
import experienceData from '../data/experience.json';

class Experience extends Component {

    componentDidMount = () => {
        window.document.title = experienceData.title;
    }

    render() {
        function createMarkup(description) {
            return {__html: description};
        }

        return (
            <div className="portfolio-inner">
                <div className="portfolio-parent">
                    <div className="portfolio-title">{experienceData.title}</div>
                    <p>{experienceData.description}</p>
                    <div className="portfolio-timeline-section">
                        {
                            experienceData.items.map(function (d, idx) {
                                return (
                                    <ul className="portfolio-timeline">
                                        <li className="portfolio-work">

                                            <span className="portfolio-date">{d.timeline}</span>

                                            <span className="portfolio-circle"></span>

                                            <div className="education-parent">
                                                <div className="education-table">
                                                    {d.title ?
                                                        <div className="education-row">
                                                            <div className="education-cell">
                                                                <div className="portfolio-timeline-title">{d.title}</div>
                                                            </div>
                                                        </div> : ""
                                                    }

                                                    {d.subTitle ?
                                                        <div className="education-row">
                                                            <div className="education-cell">
                                                                <div className="portfolio-timeline-sub-title">{d.subTitle}</div>
                                                            </div>
                                                        </div> : ""
                                                    }

                                                    <div className="education-row">
                                                        <div className="education-cell">
                                                            <div className="portfolio-content" dangerouslySetInnerHTML={createMarkup(d.description)}></div>
                                                        </div>
                                                    </div>

                                                    {d.ulist ?
                                                        <div className="education-row">
                                                            <div className="education-cell">
                                                                <ul className="portfolio-list">
                                                                    {d.ulist.map(function (l, lidx) {
                                                                        return (
                                                                            <li>{l}</li>
                                                                        )
                                                                    })}
                                                                </ul>
                                                            </div>
                                                        </div> : ""
                                                    }

                                                    {d.olist ?
                                                        <div className="education-row">
                                                            <div className="education-cell">
                                                                <ol className="portfolio-list">
                                                                    {d.olist.map(function (l, lidx) {
                                                                        return (
                                                                            <li>{l}</li>
                                                                        )
                                                                    })}
                                                                </ol>
                                                            </div>
                                                        </div> : ""
                                                    }

                                                    {d.technologies ?
                                                        <div className="education-row">
                                                            <div className="education-cell">
                                                                <div className="portfolio-technologies-header">
                                                                    <div className="portfolio-technologies-title">technologies</div>
                                                                    <ul className="portfolio-technologies-content">
                                                                        {d.technologies.map(function (l, lidx) {
                                                                            return (
                                                                                <li className="portfolio-technologies-items">
                                                                                    <a href={l.url} rel="noopener noreferrer" target="_blank">{l.title}</a>
                                                                                </li>
                                                                            )
                                                                        })}
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div> : ""
                                                    }
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

export default Experience;