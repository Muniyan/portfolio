import React, { Component } from 'react';

class NotFound extends Component {

    render() {
        return (
            <div className="notFound-inner">
                Page Not Found
                <ul>
                    <li><Link to="/">Go to Home</Link></li>
                </ul>
            </div>
        );
    }
}

export default NotFound;