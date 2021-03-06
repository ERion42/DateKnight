import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Row } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Wizard from '../components/img/DateKnightBig.png';

import Auth from '../utils/auth';

const SignUpForm = () => {
    const [userFormData, setUserFormData] = useState({
        email: '',
        username: '',
        password: '',
    });

    const [validated] = useState(false);

    const [showAlert, setShowAlert] = useState(false);

    const [addUser, { error }] = useMutation(ADD_USER);

    useEffect (() => {
        if (error) {
            setShowAlert(true);
        } else {
            setShowAlert(false);
        }
    }, [error]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await addUser({
                variables: { ...userFormData },
            });

            console.log(data);
            Auth.login(data.addUser.token)
        } catch (error) {
            console.error(error)
        }

        setUserFormData({
            email: '',
            username: '',
            password: '',
        });
    };

    return (

            <Row>
                <div className='col-md-1'></div>
                <img src= {Wizard} className='justify-content-center col-md-4 m-0 p-5' alt='Knight Wizard' />
                <div className='col-md-6 m-0 p-5'>
                    <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                        <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant="danger">
                            Something went wrong with your sign up!
                        </Alert>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="email">Email</Form.Label>
                            <Form.Control type="text" placeholder="Your email" name="email" onChange={handleInputChange} value={userFormData.email} required />
                            <Form.Control.Feedback type="invalid">
                                Email is Required!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="username">Username</Form.Label>
                            <Form.Control type="text" placeholder="Your username" name="username" onChange={handleInputChange} value={userFormData.username} required />
                            <Form.Control.Feedback type="invalid">
                                Username is Required!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control type="password" placeholder="Your password" name="password" onChange={handleInputChange} value={userFormData.password} required />
                            <Form.Control.Feedback type="invalid">
                                Password is Required!
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Button disabled={!(userFormData.email && userFormData.username && userFormData.password)} type="submit" variant="primary">Submit!</Button>
                    </Form>
                </div>
                <div className='col-md-1'></div>

            </Row>

    );
};

export default SignUpForm;
