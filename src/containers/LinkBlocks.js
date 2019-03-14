import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

import Suites from '../containers/Suites';

export default class LinkBlocks extends React.Component {
    render () {
        return (
            <Container>
                <Row>
                    <Col xs='12' sm='12' md='12' lg='12'>
                        <Col xs='12' sm='4' md='4' lg='4'>
                            <h2>Tenants &amp; Vendors</h2>
                            <p>In a continued effort to keep our tenants informed, Lackawanna Business Park has created the Tenant Information area which is dedicated to providing current information on construction, repairs, and changes.</p>
                            <p><a href="/directory.html"><Button color="primary">Tenants</Button></a>&nbsp;<a href="vendors.html"><Button color="primary">Vendors</Button></a></p>
                        </Col>
                        <Col xs='12' sm='4' md='4' lg='4'>
                            <h2>More Information</h2>
                            <p>Find the forms you need, download, and send back to us. We'll quickly process your requests and respond as soon as possible.</p>
                            <p><a href="/information.html"><Button color="primary">Information &amp; Forms</Button></a></p>
                        </Col>
                        <Col xs='12' sm='4' md='4' lg='4'>
                            <Suites />
                        </Col>
                    </Col>
                </Row>
            </Container>
        )
    }
};