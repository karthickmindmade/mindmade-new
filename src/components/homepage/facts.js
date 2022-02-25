import React from 'react';
function Facts(){
    return(
        <section className="facts p-relative have-dsn-animate-number">
        <div className="bg-section p-absolute w-100 h-100 over-hidden">
            <div className="h-100 before-z-index" data-dsn-grid="move-up" data-overlay="5">
                <img className="cover-bg-img" src="assets/img/promotion/award-bg.jpg" alt="" />
            </div>
        </div>
        <div className="container h-100 align-items-center dsn-z-index-2 p-relative">
            <div className="row align-items-center justify-content-center h-100">
                <div className="col-lg-5 video-section">
                    <div className="section-title-2 no-bg white-text">
                        <h2>We proud of our digital kids</h2>
                        <p>OUR AWARDS</p>
                    </div>
                    <a href="https://vimeo.com/175353205" className="vid c-hidden v-middle dsn-z-index-2 video-wrap">
                        <div className="play-btn image-zoom" data-dsn="parallax">
                            PLAY
                        </div>
                    </a>
                </div>

                <div className="col-lg-7">
                    <div className="facts-inner d-flex">
                        <div className="fact-item p-relative">
                            <div className="box-number p-relative"><span className="number has-animate-number">300</span><small>+</small></div>

                            <div className="box-title p-relative">
                                <h5>Finished projects</h5>
                            </div>
                        </div>

                        <div className="fact-item p-relative">
                            <div className="box-number p-relative"><span className="number has-animate-number">150</span><small>+</small></div>

                            <div className="box-title p-relative">
                                <h5>Happy customers</h5>
                            </div>
                        </div>

                        <div className="fact-item p-relative">
                            <div className="box-number p-relative"><span className="number has-animate-number">5</span><small>+</small></div>

                            <div className="box-title p-relative">
                                <h5>Awards won</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}
export default Facts;