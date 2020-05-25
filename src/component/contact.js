import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return (
            <div className="contact-parent">
                <h1 className="contact-title">Contact me</h1>
                <p>I am available for hire and open to any ideas of cooperation.</p>

                <div className="contact-section">
                    <div className="contact-row">
                        <div className="contact-label">Email:</div>
                        <div className="contact-value">hemantksingh246@gmail.com</div>
                    </div>
                    <div className="contact-row">
                        <div className="contact-label">LinkedIn:</div>
                        <div className="contact-value">hemantksingh246</div>
                    </div>
                    <div className="contact-row">
                        <div className="contact-label">Facebook:</div>
                        <div className="contact-value">hemantksingh135</div>
                    </div>
                    <div className="contact-row">
                        <div className="contact-label">Twitter:</div>
                        <div className="contact-value">@hemantksingh135</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;