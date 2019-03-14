import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { SocialIcon } from 'react-social-icons';

export default class Footer extends React.Component {
    render () {
        return (
            <Container>
                <Row>
                    <Col xs='12' sm='12' md='6' lg='6'>
                        <p>&copy; Copyright 2019 Lackawanna Business Park. All Rights Reserved.</p>
                        <p>86 Lackawanna Avenue | Woodland Park, NJ 07424 | Phone: 973-256-1934 ext 1</p>
                        <p> <a href="/">Home</a> <span>|</span> <a href="/about.html">About</a> <span>|</span> <a href="/availability.html">Available Suites</a> <span>|</span> <a href="/tenants.html">Tenant Communications</a> <span>|</span> <a href="/contact.html">Contact</a> <span>|</span> <a href="/privacy.html">Privacy</a></p>
                    </Col>
                    <Col className="socialIcons" xs='12' sm='12' md='6' lg='6'>
                        <SocialIcon url="https://www.facebook.com/lackawannabusinesspark/" network="facebook" bgColor="#FFFFFF" />
                    </Col>
                </Row>
            </Container>
        )
    }
};