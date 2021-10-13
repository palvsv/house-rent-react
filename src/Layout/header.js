import React from 'react'   

export default function header_component () {
  return (
   <React.Fragment>
        <header className="mobile-header-area nevy-blue-bg hidden-md hidden-lg">
        <div className="container">
            <div className="row">
            <div className="col-xs-12 tb">
                <div className="mobile-header-block">
                <div className="menu-area tb-cell">
                    <div className="mobile-menu-main hidden-md hidden-lg">
                    <div className="menucontent overlaybg"></div>
                    <div className="menuexpandermain slideRight">
                        <a
                        id="navtoggole-main"
                        className="animated-arrow slideLeft menuclose"
                        >
                        <span></span>
                        </a>
                        <span id="menu-marker"></span>
                    </div>
                    <div id="mobile-main-nav" className="main-navigation slideLeft">
                        <div className="menu-wrapper">
                        <div
                            id="main-mobile-container"
                            className="menu-content clearfix"
                        ></div>
                        <div className="left-content">
                            <ul>
                            <li>
                                <a href="#">
                                <i className="fa fa-phone-square"></i>Call Us -
                                01623 030020
                                </a>
                            </li>
                            <li>
                                <a href="#" className="cd-signin">
                                <i className="fa fa-address-book"></i>Login /
                                Register
                                </a>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="logo-area tb-cell">
                    <div className="site-logo">
                    <a href="index.html">
                        <img src="assets/images/logo.png" alt="site-logo" />
                    </a>
                    </div>
                </div>
                <div className="search-block tb-cell">
                    <a href="#" className="main-search">
                    <i className="fa fa-search"></i>
                    </a>
                </div>
                <div className="additional-content tb-cell">
                    <a href="#" className="trigger-overlay">
                    <i className="fa fa-sliders"></i>
                    </a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </header>

        <header className="header-area nevy-blue-bg hidden-xs hidden-sm">
        <div className="container">
            <div className="header-top-content">
            <div className="row">
                <div className="col-md-7 col-sm-7 mobile-center">
                <div className="site-logo">
                    <a href="index.html">
                    <img src="assets/images/logo.png" alt="site-logo" />
                    </a>
                </div>
                </div>
                <div className="col-md-5 col-sm-5 mobile-center">
                <div className="left-content">
                    <ul>
                    <li>
                        <a href="#">
                        <i className="fa fa-phone-square"></i>Call Us - 01623 030020
                        </a>
                    </li>
                    <li>
                        <a href="#" className="cd-signin">
                        <i className="fa fa-address-book"></i>Login / Register
                        </a>
                    </li>
                    <li>
                        <a href="#" className="main-search">
                        <i className="fa fa-search"></i>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="trigger-overlay">
                        <i className="fa fa-bars"></i>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </header>

        <header className="header-bottom-content nevy-blue-bg hidden-xs hidden-sm">
        <div className="container">
            <div className="row">
            <div className="col-md-10 col-sm-10">
                <nav id="main-nav" className="site-navigation top-navigation">
                <div className="menu-wrapper">
                    <div className="menu-content">
                    <ul className="menu-list">
                        <li>
                        <a href="#">Home</a>
                        <ul className="sub-menu">
                            <li>
                            <a href="index.html">Home Layout One</a>
                            </li>
                            <li>
                            <a href="index02.html">Home Layout Two</a>
                            </li>
                            <li>
                            <a href="index03.html">Home Layout Three</a>
                            </li>
                            <li>
                            <a href="index04.html">Home Layout Four</a>
                            </li>
                            <li>
                            <a href="index05.html">Home Layout Five</a>
                            </li>
                            <li>
                            <a href="index06.html">Home Layout Six</a>
                            </li>
                            <li>
                            <a href="index07.html">Home Layout Seven</a>
                            </li>
                            <li>
                            <a href="index08.html">Home Layout Eight</a>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <a href="booking.html">Booking</a>
                        </li>
                        <li>
                        <a href="#">House</a>
                        <ul className="sub-menu">
                            <li>
                            <a href="apartment.html">All Apartment</a>
                            </li>
                            <li>
                            <a href="apartment-single.html">Apartment Single</a>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <a href="#">Pages</a>
                        <ul className="sub-menu">
                            <li>
                            <a href="gallery.html">Our Gallery</a>
                            </li>
                            <li>
                            <a href="comming.html">Coming Soon</a>
                            </li>
                            <li>
                            <a href="404.html">404</a>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <a href="about.html">About</a>
                        </li>
                        <li>
                        <a href="#">Blog</a>
                        <ul className="sub-menu">
                            <li>
                            <a href="blog.html">Blog</a>
                            </li>
                            <li>
                            <a href="blog-single.html">Single Post</a>
                            </li>
                        </ul>
                        </li>
                        <li>
                        <a href="contact.html">Contact</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>
            </div>

            <div className="col-md-2 col-sm-2">
                <div className="booking">
                <span>
                    <a href="booking.html">Booking</a>
                </span>
                </div>
            </div>
            </div>
        </div>
        </header>
   </React.Fragment>
  )
}
