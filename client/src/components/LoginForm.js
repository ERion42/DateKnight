import React, { useState, useEffect } from 'react';
import { Form, Button, Alert, Row, Col, Container } from 'react-bootstrap';

import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Wizard from '../components/img/DateKnightBig.png';

import Auth from '../utils/auth';

const LoginForm = () => {
    const [userFormData, setUserFormData] = useState({
        email: '',
        password: ''
    });
    const [validated] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    const [login, { error }] = useMutation(LOGIN_USER);

    useEffect (() => {
        if (error) {
            setShowAlert(true)
        } else {
            setShowAlert(false)
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
            const { data } = await login({
                variables: { ...userFormData },
            });
            console.log(data);
            Auth.login(data.login.token);
        } catch (error) {
            console.error(error)
        }

        setUserFormData({
            email: '',
            password: '',
        });
    };

    return (
        <>
            <Container>
                <Row>

                    <div className="col-md-9 m-0 p-5">
                        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
                            <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant="danger">
                                Something went wrong with your login.
                            </Alert>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="email">Email</Form.Label>
                                <Form.Control type='text' placeholder="Your Email" name="email" onChange={handleInputChange} value={userFormData.email} required />
                                <Form.Control.Feedback type="invalid">
                                    Email is required!
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label htmlFor="password">Password</Form.Label>
                                <Form.Control type="password" placeholder="Your Password" name="password" onChange={handleInputChange} value={userFormData.password} required />
                                <Form.Control.Feedback type="invalid">
                                    Password is required!
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Button disabled={!(userFormData.email && userFormData.password)} type="submit" variant="primary">Submit!</Button>
                        </Form>
                    </div>
                    <div className='col-md-3 m-0 p-5'>
                        <img src= {Wizard} className='justify-content-center'/>
                    </div>

                </Row>
            </Container>
        </>
    );
};

export default LoginForm;
