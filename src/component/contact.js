import React, { Component } from 'react';
import contactData from '../data/contact.json';
import { GoLocation } from "react-icons/go";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";


class Contact extends Component {

    componentDidMount = () => {
        window.document.title = contactData.title;
    }

    render() {
        return (
            <div className="contact-parent">
                <h1 className="contact-title">{contactData.title}</h1>
                <p>{contactData.description}</p>

                <div className="contact-section">

                    <div className="contact-row">
                        <div className="contact-label">{contactData.profile[0].key}</div>
                        <a className="contact-value" href={contactData.profile[0].url}>
                            <AiOutlineMail />
                            <span className="contact-logo">{contactData.profile[0].value}</span>
                        </a>
                    </div>

                    <div className="contact-row">
                        <div className="contact-label">{contactData.profile[1].key}</div>
                        <a className="contact-value" href={contactData.profile[1].url} rel="noopener noreferrer" target="_blank">
                            <AiFillLinkedin />
                            <span className="contact-logo">{contactData.profile[1].value}</span>
                        </a>
                    </div>

                    <div className="contact-row">
                        <div className="contact-label">{contactData.profile[2].key}</div>
                        <a className="contact-value" href={contactData.profile[2].url} rel="noopener noreferrer" target="_blank">
                            <GoLocation />
                            <span className="contact-logo">{contactData.profile[2].value}</span>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;