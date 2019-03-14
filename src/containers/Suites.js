import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const availableSuites = ['102'];

export default class Suites extends React.Component {
    constructor(props) {
        super(props);
    }

    buildAvailableLinks() {
        let links = availableSuites.map( (suite) => <p key={suite}><a href={'./suites/suite-'+suite+'.html'}><FontAwesomeIcon icon="angle-double-right" /> Suite {suite}</a></p> );
        return links
    };

    render () {
        return (
            <div className="panel">
                <h2>Available Suites</h2>
                <p>Download the <a href="/docs/RentalApp.pdf" target="_blank">Lackawanna Business Park Rental Application</a>. After you have completed the application, print and fax to (973) 807-1635, or <a href="mailto:mnuzzo@lackawannabusinesspark.com?subject=Rental Application Submission">email us</a>.</p>
                {this.buildAvailableLinks()}
            </div>
        )
    }
};