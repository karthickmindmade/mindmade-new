import React from "react";
import Header from './components/header';
import Curser from './components/curser';
import Facts from "./components/homepage/facts";
import Footer from "./components/homepage/footer";
import IntroAbout from "./components/homepage/intro_about";
import NextUp from "./components/homepage/Next_up";
import OurBlogs from "./components/homepage/our_blogs";
import SectionMse from "./components/homepage/section_mse";
import UixSpacing from "./components/homepage/uix_spacing";
import MiniLogo from "./components/mini_logo";

import OurWorks from "./components/homepage/our_work";
function Homepage() {

    return (
        <div>
            <head>
            <title>MindMade Technologies</title>
            </head>
        <Header />  
         <main class="main-root">
        <div id="dsn-scrollbar">
            <div className="main-slider demo-2 has-horizontal p-relative w-100 h-100-v over-hidden" data-dsn-header="parallax">
                <div className="bg-container" id="dsn-hero-parallax-img">
                    <div className="slide-inner h-100">
                        <div className="swiper-wrapper">
                            <div className="slide-item swiper-slide">
                                <div className="image-bg cover-bg w-100 h-100" data-image-src="assets/img/banner/2.png" data-overlay="2"></div>
                                <div className="slide-content p-absolute h-100 w-100">
                                    <div className="row align-items-center h-100">
                                        <div className="content p-relative w-100">
                                            <div className="metas d-inline-block">
                                                <span>Product</span>
                                            </div>
                                            <h1 className="title user-no-selection">
                                                <a href="/" className="effect-ajax" data-dsn-ajax="slider">Diesel Watch</a>
                                            </h1>

                                            <div className="sub-text-header d-inline-block user-no-selection">
                                                <h5>Elia Pirazzo</h5>
                                                <span>- March 17th 2016</span>
                                            </div>

                                            <div className="dsn-button-link mt-30 user-no-selection">
                                                <a href="/" className="link-custom effect-ajax d-flex a-item-center p-relative" data-dsn-ajax="slider">
                                                    <span className="link-text">View Case</span>
                                                    <span className="link-circle p-absolute">
                                                        <i className="fas fa-arrow-right"></i>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="box-next p-absolute nav-slider overflow-hidden header-no-scale-hero">
                    <div className="swiper-wrapper" role="navigation"></div>
                </div>
                <div className="dsn-controls p-absolute d-flex a-item-center">
                    <div className="dsn-numbers d-block text-center">
                        <span>01</span>
                    </div>

                    <div className="dsn-progress p-relative">
                        <div className="dsn-progress-indicator p-absolute w-100"></div>
                    </div>

                    <div className="dsn-numbers d-block text-center">
                        <span className="full-number fw-blod">05</span>
                    </div>
                </div>
                <div className="dsn-slider-content p-absolute h-100 w-100">
                    <div className="content-slider margin-lr-100 p-relative w-100 h-100"></div>
                </div>
            </div>
            <div >
                <UixSpacing />
                <SectionMse />
                <IntroAbout />
                <OurWorks />
                <Facts />
                <OurBlogs />
                <NextUp />
                <Footer />
            </div>
        </div>
        </main>
        <div class="scroll-to-top">
            <img src="assets/img/scroll_top.svg" alt="" />
            <div class="box-numper">
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
            </div>
        </div>
      <Curser />
       <MiniLogo />
</div>
    );
}

export default Homepage;