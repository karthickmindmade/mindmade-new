import React from 'react';
function ImageHead() {

    return (
        <div class="image-head p-relative mb-section">
        <div class="bg-section p-absolute w-100 h-100 over-hidden">
            <div class="h-100 before-z-index" data-dsn-grid="move-up" data-overlay="5">
                <img class="cover-bg-img has-top-bottom" src="assets/img/portfolio/project1-4.jpg" alt="" />
            </div>
        </div>


        <div class="box-text margin-lr-100 p-relative background-theme">
            <h4>Our First Class Website Design & Development Services <br />in Coimbatore include:</h4>
            <div class="shap-section">
                <img src="assets/img/arr.svg" alt="" />
            </div>
        </div>
    </div>
    );
}

export default ImageHead;