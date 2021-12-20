import React, { useState, useEffect } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import { Loader } from "@googlemaps/js-api-loader"
const mapApi = process.env.MAP_API


const CitySearchForm = () => {
    const [userFormData, setUserFormData] = useState({ city: '' });

    const [validated] = useState(false);
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
            const { data } = fetch()
            console.log(data)
        } catch (error) {
            console.error(error)
        }

        setUserFormData({
            city: ''
        })

    }
}

export default CitySearchForm;
