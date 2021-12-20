import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

require('dotenv').config()
const mapApi = process.env.MAPS_API

const CitySearchForm = () => {

    const [userFormData, setUserFormData] = useState({ city: '' });

    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault()
        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }

        try {
            const data = fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${userFormData.city}&key=${mapApi}`)
                .then(res => res.json())
                .then((json) => {

                })
            console.log(data)
        } catch (error) {
            console.error(error)
        }

        setUserFormData({
            city: ''
        })

    }
    return (
        <>
            <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant="danger">
                    Invalid Search
                </Alert>

                <Form.Group>
                    <Form.Label htmlFor="city">Search By City</Form.Label>
                    <Form.Control type='text' placeholder="Atlanta, New York,..." name="city" onChange={handleInputChange} value={userFormData.city} required />
                    <Form.Control.Feedback type="invalid">
                      
                    </Form.Control.Feedback>
                </Form.Group>

                <Button disabled={!(userFormData.city)} type="submit" variant="success">Submit!</Button>
            </Form>
        </>
    )
}

export default CitySearchForm;
