import React from 'react';
function NextUp() {
  
    return (
        <section className="next-up next-project p-relative section-padding">
        <div className="bg-section p-absolute w-100 h-100 over-hidden">
            <div className="h-100 before-z-index" data-dsn-grid="move-up" data-overlay="5">
                <img className="cover-bg-img has-top-bottom" src="assets/img/promotion/contact-us.jpg" alt="" />
            </div>
        </div>
        <div className="container-fluid p-relative dsn-z-index-2">
            <div className="row margin-lr-100">
                <div className="col-lg-6 col-md-7 offset-lg-6 offset-md-5">
                    <div className="next-up-inner p-relative background-section">
                        <h2 className="title">
                            Get In<br />
                            Touch!
                        </h2>
                        <a href="/#l" className="btn background-theme p-relative effect-ajax" data-dsn="parallax"><span>Contact us</span></a>

                        <div className="infos d-flex a-item-center bd-highlight">
                            <div className="infos_content mr-auto">
                                See More <br />
                                Works!
                            </div>
                            <div className="infos_button">
                                <a href="/#" className="effect-ajax image-zoom" data-dsn="parallax"> portfolio </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        );
    }
    
    export default NextUp;