import React from "react";
import Curser from "./components/curser";
import AwardSection from "./components/Design/AwardSection";
import DesignHeader from "./components/Design/DesignHeader";
import DesignSectionTwo from "./components/Design/DesignSecondSection";
import ImageHead from "./components/Design/ImageHead";
import ServiceAbout from "./components/Design/serviceAbout";
import Footer from "./components/footer";
import Header from "./components/header";
import MiniLogo from "./components/mini_logo";
import ScrollToTop from "./components/scrol";

function DesignPage() {
    return (
        <div>
            <head>
                <title>Web Design | Web Development Company Coimbatore</title>
            </head>
            <Header />
            <main class="main-root">
                <div id="dsn-scrollbar">
                    <DesignHeader />
                    <div class="wrapper">
                      
                        <AwardSection />
                        <ImageHead />
                        <ServiceAbout />
                        <Footer />
                    </div>
                </div>
            </main>
            <ScrollToTop />
            <Curser />
            <MiniLogo />
        </div>
    )
}
export default DesignPage;