

// import React, { useState, useEffect, useRef } from 'react';
import React from 'react';
// import { Form, Button } from 'react-bootstrap';
import CitySearchForm from '../components/CitySearch';
// import showError from '../utils/helpers'
// import { Loader } from "@googlemaps/js-api-loader"
// import { withScriptjs, withGoogleMaps, GoogleMap, Marker, google } from 'react-google-maps'
// import { Wrapper, Status } from '@googlemaps/react-wrapper';
// import initMap from '../components/Map';

// require('dotenv').config();
// const mapApi = process.env.MAPS_API
// // const geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${mapApi}`
// let map = google.maps.Map;

const Dashboard = () => {

    return (
        <div>
            <CitySearchForm />
        </div>

    )
}


export default Dashboard;
