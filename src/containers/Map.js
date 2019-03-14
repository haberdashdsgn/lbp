import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import GoogleMapReact from 'google-map-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const DisplayBlock = ({ text }) => <div className='mapDisplay'><p>{text}</p><FontAwesomeIcon className='mapIcon' icon='map-marker' /></div>;

export default class Map extends React.Component {
    constructor(props) {
        super(props);

        this.settings = {
            api: 'KEY',
            center: {
                lat: 40.885,
                lng: -74.213
            },
            zoom: 14
        }
    }
        
    render () {
        return (
            <div className='map'>
                <GoogleMapReact bootstrapURLKeys={{ key: this.settings.api }} defaultCenter={this.settings.center} defaultZoom={this.settings.zoom}>
                    <DisplayBlock lat={40.8892125} lng={-74.2155356} text={'Lackawanna Business Park'} />
                </GoogleMapReact>
            </div>
        )
    }
};