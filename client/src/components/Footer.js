import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
    return (
        // <Navbar className="footer mt-5 py-3 bg-light text-center">
        //     <Container className="container">
        //         <span className="text-muted">Copyright 2022</span>
        //     </Container>
        // </Navbar>

        <nav className="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">
                   
                </a>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav">
                        {/* <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li> */}
                        <li className="nav-item">
                            <span className="nav-link">Copyright 2022</span>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                        <li className="nav-item dropup">
                            <a className="nav-link dropdown-toggle" href="/" id="dropdown10" data-bs-toggle="dropdown" aria-expanded="false">Dropup</a>
                        <ul className="dropdown-menu" aria-labelledby="dropdown10">
                            <li>
                                <a className="dropdown-item" href="/">Action</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/">Another action</a>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/">Something else here</a>
                            </li>
                        </ul>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>

    )

}

export default Footer;
