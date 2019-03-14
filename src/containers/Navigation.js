import React, { Component } from 'react';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import logo from '../img/logo_rev.png';

export default class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);

        this.state = {
            isOpen: false,
            isTop: true
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs="12" sm="12" md="12" lg="12">
                        <Navbar className={this.state.isTop ? '' : 'scrolled'} light fixed='top' expand='md'>
                            <NavbarBrand href='/'><img src={logo} className='img-responsive' /></NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className='ml-auto' navbar>
                                    <NavItem>
                                        <NavLink href='/'>Home</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href='/about.html'>About Us</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href='/availability.html'>Availability</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href='/office-suites.html'>Office Suites</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href='/tenants.html'>Tenants</NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink href='/Contact.html'>Contact</NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        );
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.isTop) {
                this.setState({ isTop })
            }
        });
    }
};