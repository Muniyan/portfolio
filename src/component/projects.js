import React, { Component } from 'react';
import ProjectsData from '../data/projects.json';

class Projects extends Component {

    componentDidMount = () => {
        window.document.title = ProjectsData.title;
    }

    render() {
        return (
            <div className="portfolio-inner">
                <div className="portfolio-parent">
                    <div className="portfolio-title">{ProjectsData.title}</div>
                </div>
            </div>
        );
    }
}

export default Projects;