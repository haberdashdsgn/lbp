import React, { Component } from 'react';
import { Container, Row, Col, Jumbotron, Button } from 'reactstrap';

import slide2 from '../img/slide_02.jpg';
import slide3 from '../img/slide_03.jpg';
import slide4 from '../img/slide_04.jpg';

export default class Hero extends React.Component {
    render () {
        return (
            <div id="heroSlider">
                <div data-u="slides" className="heroSlides">
                    <div>
                        <img data-u="image" src={slide2} />
                        <Jumbotron>
                            <h1 className="display-5">Welcome to Lackawanna Business Park</h1>
                            <hr className="my-2" />
                            <p>Learn more about our vendors and tenants.</p>
                            <p className="lead"><a href="/about.html"><Button color="info">Learn More</Button></a></p>
                        </Jumbotron>
                    </div>
                    <div>
                        <img data-u="image" src={slide3} />
                        <Jumbotron>
                            <h1 className="display-5">What's Included?</h1>
                            <p className="lead">View our available suites and contact us to schedule a tour or to find out more.</p>
                            <hr className="my-2" />
                            <p>Learn more about what's available.</p>
                            <p className="lead"><a href="/availability.html"><Button color="info">Learn More</Button></a></p>
                        </Jumbotron>
                    </div>
                    <div>
                        <img data-u="image" src={slide4} />
                        <Jumbotron>
                            <h1 className="display-5">Schedule an Appointment</h1>
                            <p className="lead">Find out more about our available suites. Contact us today to schedule a tour.</p>
                            <hr className="my-2" />
                            <p>Call us or send us a message.</p>
                            <p className="lead"><a href="/contact.html"><Button color="info">Learn More</Button></a></p>
                        </Jumbotron>
                    </div>
                </div>
                <div data-u="arrowleft" className="arrowLeft" data-autocenter="2" data-scale="0.75" data-scale-left="0.75">
                    <svg className="arrow" viewBox="0 0 240.823 240.823">
                        <g>
                            <path className="chevron" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816C52.942,116.507,52.942,124.327,57.633,129.007z"/>
                        </g>
                    </svg>
                </div>
                <div data-u="arrowright" className="arrowRight" data-autocenter="2" data-scale="0.75" data-scale-right="0.75">
                    <svg className="arrow" viewBox="0 0 240.823 240.823">
                        <g>
                            <path className="chevron" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261C187.881,124.315,187.881,116.495,183.189,111.816z"/>
                        </g>
                    </svg>
                </div>
            </div>
        )
    }
};