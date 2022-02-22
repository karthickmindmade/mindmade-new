function Footer() {
  
    return (
  
        <footer className="footer-1 p-relative background-section">
        <div className="container">
            <div className="footer-links p-relative">
                <div className="row">
                    <div className="col-lg-3 col-md-6 footer-block-inner">
                        <div className="footer-block">
                            <div className="footer-logo">
                                <a href="index.html">
                                    <img src="assets/img/logo-dark.png" alt="" className="logo-light" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-block-inner">
                        <div className="footer-block col-menu">
                            <h4 className="footer-title">Follow us</h4>

                            <div className="footer-social p-relative">
                                <ul>
                                    <li className="over-hidden">
                                        <a href="/#" data-dsn="parallax" target="_blank" rel="nofollow">Dribbble.</a>
                                    </li>
                                    <li className="over-hidden">
                                        <a href="/#" data-dsn="parallax" target="_blank" rel="nofollow">Behance.</a>
                                    </li>

                                    <li className="over-hidden">
                                        <a href="/#" data-dsn="parallax" target="_blank" rel="nofollow">Twitter.</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-block-inner">
                        <div className="footer-block col-contact">
                            <h4 className="footer-title">Contact</h4>
                            <p><strong>T</strong> <span>:</span> +91-9629596919</p>
                            <p><strong>C</strong> <span>:</span>+91-9566566699</p>
                            <p className="over-hidden"><strong>E</strong> <span>:</span><a className="link-hover" data-hover-text="info@mindmade.in" href="/#">info@mindmade.in</a></p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 footer-block-inner">
                        <div className="col-address">
                            <h4 className="footer-title">Address</h4>

                            <p>
                                Door No 19-1/22, First Floor, <br />
                                Govindasamy Naidu Layout, <br />
                                Singanallur, Coimbatore – 641 005
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-nav">
            <div className="container">
                <ul>
                    <li><a className="link-hover" data-dsn="parallax" href="/#">Home</a></li>
                    <li><a className="link-hover" data-dsn="parallax" href="/#">About us</a></li>
                    <li><a className="link-hover" data-dsn="parallax" href="/#">Work</a></li>
                    <li><a className="link-hover" data-dsn="parallax" href="/#">Story</a></li>
                    <li><a className="link-hover" data-dsn="parallax" href="/#">Contact</a></li>
                </ul>
            </div>
        </div>

        <div className="copyright">
            <div className="text-center">
                <p>© 2021 All rights reserved. MindMade Technologies</p>
            </div>
        </div>
    </footer>
    );
  }
  
  export default Footer;
  