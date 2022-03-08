import React from 'react';
function DesignHeader() {

    return (
        <header data-dsn-header="parallax">
                        <div class="header-master">
                            <div class="p-absolute w-100 h-100 over-hidden before-z-index" data-overlay="5">
                                <img id="dsn-hero-parallax-img" class="cover-bg-img transform-3d header-scale-hero" src="assets/img/agency-1.jpg" alt="" />
                            </div>
                            <div class="container h-100">
                                <div class="row align-items-center justify-content-center h-100">
                                    <div id="dsn-hero-parallax-title"
                                        class="content p-relative text-center header-no-scale-hero">
                                        <div class="metas meta-personal p-relative">
                                            <span> We build that build your business </span>
                                        </div>
                                        <h1 class="title"> WE KNOW HOW TO MAKE THEM SUCCESSFUL. </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
    );
}

export default DesignHeader;