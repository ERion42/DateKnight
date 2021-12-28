// NOT FULLY RESPONSIVE ON SMALLER SCREENS - issues around 575px
// The clock icons don't seem to be uniform either
import React from "react";
import { Col, Row, Container, Card, Button, Navbar, Nav } from "react-bootstrap";
import AboutPic from "./images/shadowCouple.png";
import BlankPic from './images/gradientSquare.png';

const AboutPage = () => {
    return (
       <>
        <Navbar sticky="top" bg="primary" variant="dark"  className="text-right">
            <Container>
                <h4 className="text-white pe-5">About the...</h4>
                <Nav className="me-auto">
                    <Nav.Link href="#project">Project</Nav.Link>
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#developers">Developers</Nav.Link>
                </Nav>
            </Container>
        </Navbar>

            <div id="project" className="px-4 pt-5 my-5 text-center border-bottom">
                    <h1 className="display-4 fw-bold">About This Project</h1>
                    <div className="col-lg-6 mx-auto">
                        <p className="lead mb-4">This application is the culmination of two different projects developed for a fullstack web developer boot-camp. Both apps were developed within 1 week with a team of 3-4 coders. The first app designed a date based on user-input and geolocation while the second app located sporting, musical, or other events and helped the user book a ticket. After the boot-camp was over, several of the developers from the program got back together to work on them and improve them.</p>
                    </div>  
                    <img src={AboutPic} className="img-fluid border rounded-3 shadow-lg mb-4 align-content-center" alt="Example" loading="lazy"></img>
            </div>        
            
            <h2 id="features" className="text-center display-4 pt-5 fw-bold">Features</h2>

            <div className="container px-4 mb-5 border-bottom" id="icon-grid">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 py-5">
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3 className="fw-bold ps-2">Events</h3>
                            <p className="ms-1">Find local or far-away sporting events, music festivals, art shows, or other events</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3 className="fw-bold ps-2">Theaters</h3>
                            <p className="ms-1">Find the perfect movie to watch by choosing options from nearby movie theaters</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3 className="fw-bold ps-2">Streaming</h3>
                            <p className="ms-1">Select what services you have and select from a list of features that meet your critiera</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3 className="fw-bold ps-2">Dining</h3>
                            <p className="ms-1">Based on your preferences you'll be given a number of dining choices in your area</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3 className="fw-bold ps-2">Beverages</h3>
                            <p className="ms-1">If you're staying in, we'll help you pick out and make one heck of a drink</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3 className="fw-bold ps-2">Cooking</h3>
                            <p className="ms-1">When you want the perfect dish to accompany the perfect night in, we'll help you in the kitchen</p>
                        </div>
                    </div>
                </div>
            </div>

            <h2 className="text-center ">Upcoming Features</h2>
            <div className="container px-4 border-bottom" id="icon-grid">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4 py-5">
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3 className="fw-bold ps-2">Mapping</h3>
                            <p className="ms-1">Find the halfway point or points between you and any number of people you want to hang out with</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3 className="fw-bold ps-2">Directions</h3>
                            <p className="ms-1">Detailed instructions on how to get from point A to point B to point C and then back again</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3 className="fw-bold ps-2">Reviews</h3>
                            <p className="ms-1">Get a list of reviews from people who've done the thing you're thinking about doing</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3 className="fw-bold ps-2">Safety</h3>
                            <p className="ms-1">Are their health and safety regulations for the area you're in? Find them before you do the thing</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3 className="fw-bold ps-2">Family</h3>
                            <p className="ms-1">Do you want to make sure your event is family friendly? There'll be a filter for that</p>
                        </div>
                    </div>
                    <div className="col d-flex align-items-start">
                        <div>
                            <h3 className="fw-bold ps-2">Profiles</h3>
                            <p className="ms-1">Save your preferences so future planning sessions will go quickly and </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="px-4 my-5 text-center border-bottom ms-5 ps-5">
                    <h1 id="developers" className="display-4 fw-bold pb-5">About The Developers</h1>

                    <Container fluid className="ms-5 ps-5">
                        <Row>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={BlankPic} height="285px" width="285px" />
                                    <Card.Body>
                                        <Card.Title>Eric</Card.Title>
                                        <Card.Text>
                                        I gave it a cold? I gave it a virus. A computer virus.
                                        </Card.Text>
                                        <Button variant="primary">Portfolio</Button>
                                    </Card.Body>
                                </Card>                            
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={BlankPic} height="285px" width="285px" />
                                    <Card.Body>
                                        <Card.Title>James</Card.Title>
                                        <Card.Text>
                                        Eventually, you do plan to have dinosaurs on your dinosaur tour, right?
                                        </Card.Text>
                                        <Button variant="primary">Portfolio</Button>
                                    </Card.Body>
                                </Card>                
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={BlankPic} height="285px" width="285px" />
                                    <Card.Body>
                                        <Card.Title>Josh</Card.Title>
                                        <Card.Text>
                                        They're using our own satellites against us. And the clock is ticking.
                                        </Card.Text>
                                        <Button variant="primary">Portfolio</Button>
                                    </Card.Body>
                                </Card>                                            
                            </Col>
                            <Col>
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src={BlankPic} height="285px" width="285px" />
                                    <Card.Body>
                                        <Card.Title>Patrick</Card.Title>
                                        <Card.Text>
                                        God help us, we're in the hands of engineers.
                                        </Card.Text>
                                        <Button variant="primary">Portfolio</Button>
                                    </Card.Body>
                                </Card>                                            
                            </Col>
                        </Row>

                    </Container>

            </div>  
       </>


    )
}

export default AboutPage;