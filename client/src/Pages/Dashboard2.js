// import React, { useState, useEffect, useRef } from 'react';
import React from 'react';
import { Container } from 'react-bootstrap';
// import { Form, Button } from 'react-bootstrap';
// import CitySearchForm from '../components/CitySearch';
// import showError from '../utils/helpers'
// import { Loader } from "@googlemaps/js-api-loader"
// import { withScriptjs, withGoogleMaps, GoogleMap, Marker, google } from 'react-google-maps'
// import { Wrapper, Status } from '@googlemaps/react-wrapper';
// import initMap from '../components/Map';

import Logo from '../components/img/DateKnightBig.png';

// require('dotenv').config();
// const mapApi = process.env.MAPS_API
// // const geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${mapApi}`
// let map = google.maps.Map;


const Dashboard = () => {

    return (
        <Container>

            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 className="display-4 fw-bold lh-1">Border hero with cropped image and shadows</h1>
                    <p className="lead">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                    <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Primary</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
                </div>
            </div>
            <div className="col-lg-4 p-0 overflow-hidden shadow-lg">
                <img className="rounded-lg-3" src={Logo} alt="" />
            </div>
        </div>

        </Container>

    )
}


export default Dashboard;
