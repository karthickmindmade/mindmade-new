import React from 'react';
function IntroAbout(){
    return(
        <section className="intro-about have-dsn-animate-number section-padding bg-gray" data-dsn-animate="section">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="intro-about-info">
                        <div className="section-title-2">
                            <h2>About Us</h2>
                            <p>what we do</p>
                        </div>

                        <div className="intro-about-info-bottom">
                            <h2 className="title-h2 dsn-up">SINCE 2005.</h2>

                            <p className="dsn-text">MindMade Technologies - the culmination of more than 20 years of dedication, sustained effort and a pinch of creativity in every endeavour!</p>

                            <div className="accordion mt-30">
                                <div className="accordion__wrapper">
                                    <div className="accordion__item dsn-up">
                                        <div className="accordion__question expanded d-flex align-items-center p-relative">
                                            <span className="icon">
                                                <img src="assets/img/vision.svg" alt="" />
                                            </span>
                                            <h4 className="sm-title-block">Our Vision</h4>
                                        </div>
                                        <div className="accordion__answer active">
                                            <p>
                                                To become a global organization by creating a platform for IT, and by delivering expert solutions, leveraged by the deployment of emerging technologies. (To make it short…
                                                “Being known to the World”)
                                            </p>
                                        </div>
                                    </div>

                                    <div className="accordion__item dsn-up">
                                        <div className="accordion__question d-flex align-items-center p-relative">
                                            <span className="icon">
                                                <img src="assets/img/mission.svg" alt="" />
                                            </span>
                                            <h4 className="sm-title-block">Our Values</h4>
                                        </div>
                                        <div className="accordion__answer">
                                            <p>
                                                We are constantly improving our working environment, raising standards for life in MindMade and creating new values for our employees (family members). Our goal with every new
                                                solution coming out from MindMade is to bring new values, new benefits, for users worldwide.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="box-img p-relative over-hidden">
                        <div className="bg-section p-absolute w-100 h-100">
                            <div className="h-100" data-dsn-grid="move-up">
                                <img className="cover-bg-img has-top-bottom" src="assets/img/about-intro.jpg" alt="" />
                            </div>
                        </div>
                        <img src="assets/img/promotion/about.jpg" alt="" />

                        <div className="exper background-theme p-absolute">
                            <div className="numb-ex">
                                <span className="word-text has-animate-number">20</span>
                            </div>

                            <h4 className="sm-title-block dsn-up">
                                YEARS OF <br />
                                DIGITAL EXPERIENCE
                            </h4>
                            <div className="shap-section">
                                <img src="assets/img/simble.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default IntroAbout