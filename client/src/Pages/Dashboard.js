
import { getLocation } from 'graphql';
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import CitySearchForm from '../components/CitySearch';
import showError from '../utils/helpers'
// import initMap from '../components/Map';

require('dotenv').config();
const mapApi = process.env.MAP_API
// const geoCodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${city}&key=${mapApi}`


const Dashboard = () => {




    return (
        <div>
            <CitySearchForm />
            <div id="map">
                <showPosition />
            </div>
        </div>
    )
}


export default Dashboard;
