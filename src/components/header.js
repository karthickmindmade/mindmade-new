import React from 'react';
function Header() {
  
    return (
        <div className="site-header">
        <div className="extend-container d-flex w-100 align-items-baseline justify-content-between align-items-end">
            <div className="inner-header p-relative">
                <div className="main-logo">
                    <a href="/#" data-dsn="parallax">
                        <img className="dark-logo" src="assets/img/logo-dark.png" alt="" />
                        <img className="light-logo" src="assets/img/logo.png" alt="" />
                    </a>
                </div>
            </div>
            <div className="menu-icon d-flex align-items-baseline">
                <div className="text-menu p-relative font-heading text-transform-upper">
                    <div className="p-absolute text-button">Menu</div>
                    <div className="p-absolute text-open">Open</div>
                    <div className="p-absolute text-close">Close</div>
                </div>
                <div className="icon-m" data-dsn="parallax">
                    <span className="menu-icon-line p-relative d-inline-block icon-top"></span>
                    <span className="menu-icon-line p-relative d-inline-block icon-center"></span>
                    <span className="menu-icon-line p-relative d-block icon-bottom"></span>
                </div>
            </div>
            <nav className="accent-menu main-navigation p-absolute w-100 d-flex align-items-baseline">
                <div className="menu-cover-title">Menu</div>
                <ul className="extend-container p-relative d-flex flex-column justify-content-center h-100">
                    <li className="dsn-active">
                        <a href="/" className="user-no-selection">
                            <span className="dsn-title-menu">Home</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#" className="user-no-selection">
                            <span className="dsn-title-menu">About us</span>
                        </a>
                    </li>
        
                    <li className="dsn-drop-down">
                        <a href="/#" className="user-no-selection">
                            <span className="dsn-title-menu">Services</span>
                            <span className="dsn-bg-arrow"></span>
                        </a>
        
                        <ul>
                            <li className="dsn-back-menu">
                                <img src="assets/img/left-chevron.svg" alt="" />
                                <span className="dsn-title-menu">Services</span>
                            </li>
                            <li>
                                <a href="/design">
                                    <span className="dsn-title-menu">Website Design</span>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <span className="dsn-title-menu">E-Commerce</span>
                                </a>
                            </li>
        
                            <li>
                                <a href="/#">
                                    <span className="dsn-title-menu">Branding & Logo Design</span>
                                </a>
                            </li>
        
                            <li>
                                <a href="/#">
                                    <span className="dsn-title-menu">Search Engine Optimisation</span>
                                </a>
                            </li>
        
                            <li>
                                <a href="/#">
                                    <span className="dsn-title-menu">Digital Marketing</span>
                                </a>
                            </li>
                            <li>
                                <a href="/#">
                                    <span className="dsn-title-menu">Mobile App Development</span>
                                </a>
                            </li>
        
                            <li>
                                <a href="/#">
                                    <span className="dsn-title-menu"> Software Development</span>
                                </a>
                            </li>
        
                            <li>
                                <a href="/#">
                                    <span className="dsn-title-menu">IT Offshore Outsourcing</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="/#" className="user-no-selection">
                            <span className="dsn-title-menu">Work</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#" className="user-no-selection">
                            <span className="dsn-title-menu">Story</span>
                        </a>
                    </li>
                    <li>
                        <a href="/#" className="user-no-selection">
                            <span className="dsn-title-menu">Contact us</span>
                        </a>
                    </li>
                </ul>
                <div className="container-content d-flex flex-column justify-content-end">
                    <div className="nav__info">
                        <div className="nav-content">
                            <p className="title-line">
                                Address
                            </p>
                            <p>
                                Door No 19-1/22, First Floor, <br />
                                Govindasamy Naidu Layout, <br />
                                Singanallur, Coimbatore – 641 005
                            </p>
                        </div>
                        <div className="nav-content">
                            <p className="title-line">
                                Contact
                            </p>
                            <p className="links over-hidden">
                                <a href="/#" data-hover-text="+91-9566566699" className="link-hover">+91-9566566699</a>
                            </p>
                            <p className="links over-hidden">
                                <a href="/#" data-hover-text="+91-9629596919" className="link-hover">+91-9629596919</a>
                            </p>
                            <p className="links over-hidden">
                                <a href="/#" data-hover-text="info@mindmade.in" className="link-hover">info@mindmade.in</a>
                            </p>
                        </div>
                    </div>
        
                    <div className="nav-social">
                        <div className="nav-social-inner p-relative">
                            <p className="title-line">
                                Follow us
                            </p>
                            <ul>
                                <li>
                                    <a href="/#" target="_blank" rel="nofollow">
                                        Dribbble.
                                        <div className="icon-circle"></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" target="_blank" rel="nofollow">
                                        Behance.
                                        <div className="icon-circle"></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" target="_blank" rel="nofollow">
                                        Linkedin.
                                        <div className="icon-circle"></div>
                                    </a>
                                </li>
                                <li>
                                    <a href="/#" target="_blank" rel="nofollow">
                                        Twitter.
                                        <div className="icon-circle"></div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="nav-border-bottom"></div>
            </nav>
        </div>
        </div>
  
    );
  }
  
  export default Header;
  

