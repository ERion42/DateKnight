import React from "react";
import Logo from '../components/img/DateKnightBig.png';

function Landing() {
    return (

        <div>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-8 col-lg-6">
                    <img src={Logo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">Are You Ready For a Really Great Time?</h1>
                    <p className="lead">Hey, you know how I'm, like, always trying to save the planet? Here's my chance. Do you have any idea how long it takes those cups to decompose. I gave it a cold? I gave it a virus. A computer virus. So you two dig up, dig up dinosaurs? You really think you can fly that thing?</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    </div>
                    </div>
                </div>
            </div>

        </div>        
    )
}

export default Landing;