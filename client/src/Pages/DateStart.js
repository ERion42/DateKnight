// NOTE: I'd like to eventually add personalization options so you can pick from one of the following classes: Family Knight, Friends Knight, or Couples Knight. That way we can gear the pictures to match up better. The idea is that we want to be inclusive for all forms of people. Also it'd be nice to get a rotating stock of photos so it's not always the same ones.

import React from "react";
import { Link } from 'react-router-dom';
import EventPic from "./images/events/01.png"
import StayInPic from "./images/stayIn/01.png"
import GoOutPic from "./images/goOut/06.png"

import EventPage from "./Event";
import GoOutPage from "./GoOut";
import StayInPage from "./StayIn";

const DateStart = () => {
    return (
        <div className="mt-5">
            <div className="row">
                <div>
                    <h1>Welcome!</h1>
                </div>
                <div>
                    <p>We can't wait to help you pick out an exciting date for you and that special someone, someones, family, or friends!</p>
                    <p>First we're going to help you narrow down exactly what kind of date it's going to be, then we'll give you some options!</p>                
                </div>            
            </div>
            <div className="mt-3 mb-5">
                <h2>First, what kind of activities interest you most?</h2>
            </div>
            <div>
                <div className="container d-flex justify-content-center mt-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 mt-3">
                            <h3>Events</h3>
                            <p>Whether it's a sporting event, a music festival, or just visiting a state park, we'll help you find the right event for your mood!</p>
                            <Link to={EventPage} className='nav-link'>
                                <img src= {EventPic} className="mw-100" />
                            </Link>
                        </div>
                        <div className="col-lg-4 mt-3">
                            <h3>Hit The Town</h3>
                            <p>A classic choice for those who want to be out and about, we'll help you find the right combination of activities with this selection.</p>
                            <Link to={GoOutPage} className='nav-link'>
                                <img src= {GoOutPic} className="mw-100" />
                            </Link>
                        </div>
                        <div className="col-lg-4 mt-3">
                            <h3>Stay In</h3>
                            <p>This choice is best for groups or couples who want to focus on each other's company... and the food, drink, and entertainment, of course.</p>
                            <Link to={StayInPage} className='nav-link'>
                                <img src= {StayInPic} className="mw-100" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DateStart;