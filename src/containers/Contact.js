import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Container>
                <Row>
                    <Col xs='12' sm='12' md='12' lg='12'>
                        <p className='icon'><FontAwesomeIcon icon='map-marked-alt' /></p>
                        <h1 className='text-center'>Contact us today!</h1>
                        <h4 className='text-center'>Schedule an appointment or ask us any questions or address concerns you may have.</h4>
                        <p className="lead text-center"><a href='/contact.html'><Button color='secondary' size='lg'>Learn More</Button></a></p>
                    </Col>
                </Row>
            </Container>
        )
    }
};