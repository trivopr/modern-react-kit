import React, { Component } from 'react';
import SingleAbout from '../../components/SigleAbout';
import LoadingSpinner from '../../components/LoadingSpinner';

class About extends Component {
    render() {
        return (
            <div>
                <h1>ABOUT PAGE</h1>
                <SingleAbout />
                <LoadingSpinner />
            </div>
        );
    }
}

export default About;