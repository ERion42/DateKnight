import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <Navbar className="footer mt-auto py-3 bg-light">
            <Container className="container">
                <span className="text-muted">Copyright 2022</span>
            </Container>
        </Navbar>
    )

}

export default Footer;
