import React, { Component } from 'react';
import eeducationData from '../data/education.json';

class Education extends Component {

    componentDidMount = () => {
        window.document.title = eeducationData.title;
    }

    render() {
        return (
            <div className="portfolio-inner">
                <div className="portfolio-parent">
                    <div className="portfolio-title">{eeducationData.title}</div>
                </div>
            </div>
        );
    }
}

export default Education;