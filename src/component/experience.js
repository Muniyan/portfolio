import React, { Component } from 'react';
import experienceData from '../data/experience.json';

class Experience extends Component {

    componentDidMount = () => {
        window.document.title = experienceData.title;
    }

    render() {
        return (
            <div>
                Experience
            </div>
        );
    }
}

export default Experience;