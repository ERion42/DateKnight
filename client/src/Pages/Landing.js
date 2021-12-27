import React from "react";
import Logo from '../components/img/DateKnightBig.png';

function Landing() {
    return (

        <div>

            <div className="container col-xxl-8 px-4 py-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <div className="col-10 col-sm-12 col-lg-6">
                        <img src={Logo} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
                    </div>
                    <div className="col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">date</h1>
                    <p className="lead">/dāt/</p>
                    <p className="lead"><em>noun</em></p>
                    <p className="lead"><strike>1. the day of the month or year as specified by a number.</strike></p>
                    <p className="lead">2. a <strong>social</strong> or <strong>romantic</strong> appointment or engagement.</p>
                    <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    </div>
                    </div>
                </div>
            </div>
            <div className="container col-xxl-8 px-4 pb-5">
                <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                    <p className="lead text-center">
                        Dates can be difficult. Whether it's with that special someone, a group of friends, or just some "you time", you want to make sure your evening goes off without a hitch, right? Well, that's where we come in.
                    </p>
                    <p className="lead text-center">
                        We'll help you plan the perfect date, be it social, romantic, or solo! We'll ask you a few questions about your preferences in order to build a profile then generate a fun date for you based on that profile! Then you can enjoy a fun little date without the hassle of planning it and if it goes wrong you can always blame the app!
                    </p>
                </div>
            </div>

        </div>        
    )
}

export default Landing;