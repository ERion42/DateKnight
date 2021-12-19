
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
const apiKey = process.env.API_KEY
require('dotenv').config();

const Dashboard = () => {
    const [userFormData, setUserFormData] = useState({
        userInput: ''
    });

    const handleInputChange = event => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value })
    };
    return (
        <div>
            <section>
                <div className="row mt-1">
                    <div className="col-lg-1"></div>
                        <div className="col-lg-9">
                            <Form>
                                <Form.Group>
                                    <Form.Label htmlFor='userInput'>Search</Form.Label>
                                    <Form.Control type='text' placeholder="Search" name="userInput" onChange={handleInputChange} value={userFormData.userInput} required />
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
        </div>
    )
}

export default Dashboard;
