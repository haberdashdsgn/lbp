import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

export default class Directory extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div className="panel">
                <h2>Directory Services</h2>
                <ul>
                    <li><a href="/directory.html">Tenant Directory</a></li>
                    <li><a href="/vendors.html">Vendor Information</a></li>
                    <li><a href="/information.html">Information &amp; Forms</a></li>
                </ul>
            </div>
        )
    }
};