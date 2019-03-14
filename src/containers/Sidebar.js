import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import Suites from '../containers/Suites';
import Directory from '../containers/Directory';

export default class Footer extends React.Component {
    render () {
        return (
            <div>
                <Directory />
                <div className="spacer10"></div>
                <Suites />
            </div>
        )
    }
};