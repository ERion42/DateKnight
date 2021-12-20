
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

require('dotenv').config();
const apiKey = process.env.TM_API
const tmUrl = "https://app.ticketmaster.com/discovery/v2/";

const Dashboard = () => {
    const [userFormData, setUserFormData] = useState({
        userInput: ''
    });

    const [coords, setCoords] = useState({
        lat: 37.7751,
        lng: -122.4194
    })
    // let map = new google.maps.Map(document.getElementById('map'), {
    //     zoom: 12,
    //     center: coords
    // })
    const handleInputChange = event => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value })
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log('please allow location')
        }
    }

    const showPosition = position => {

    }

    // const handleFormSubmit = event => {
    //     event.preventDefault();

    //     getEvents()
    //     getNewLocation()

    //     const getEvents = () => {
    //         fetch (`${tmUrl}events.json?city=${userFormData.userInput}&apikey=${apiKey}`)
    //             .then(res => res.json())
    //             .then(function(json) {
    //                 showSearch(json)
    //                 function showSearch(json) {

    //                 }
    //             })
    //     }

    // }
    getLocation()
    return (
        <div>
            <section>
                <div className="row mt-1">
                    <div className="col-lg-1"></div>
                        <div className="col-lg-9">
                            <Form>
                                <Form.Group>
                                    <Form.Label htmlFor='userInput'>Search</Form.Label>
                                    <Form.Control type='text' placeholder="Search by city" name="userInput" onChange={handleInputChange} value={userFormData.userInput} required />
                                </Form.Group>
                            </Form>
                            {/* <input type="text" class="form-control" placeholder="Atlanta, Chicago, Jacksonville" id="input-search" /> */}
                        </div>
                        <div className="col-lg-2 input-group-append">
                            <Button disabled={!(userFormData.userInput)} type="submit" variant="success">Submit!</Button>
                            <button className="btn btn-outline-secondary" id="btn-search" type="button">Search</button>
                        </div>
                    </div>
                    <p id="location">Please allow your location to see events near you!</p>
                <div id="map"></div>
            </section>
            <div className='container'>

            </div>
        </div>

    )
}

export default Dashboard;
