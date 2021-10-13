import React from "react";
import header_component from "../Layout/header";

export default function Home() {
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
     
      <div className="header-overlay-content">
        <div className="overlay overlay-hugeinc gradient-transparent overlay-menu-item">
          <button type="button" className="overlay-close">
            Close
          </button>
          <nav>
            <ul className="overlay-menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
                <ul className="sub-menu">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                  <li>
                    <a href="#">Work</a>
                  </li>
                  <li>
                    <a href="#">Clients</a>
                    <ul className="sub-menu">
                      <li>
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Work</a>
                      </li>
                      <li>
                        <a href="#">Clients</a>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Clients</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="gradient-transparent overlay-search">
          <button type="button" className="overlay-close">
            Close
          </button>
          <div className="header-search-content">
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <form action="#" method="get" className="searchform">
                    <div className="input-group" id="adv-search">
                      <input
                        type="text"
                        className="form-controller"
                        placeholder="Search for snippets"
                      />
                      <div className="input-group-btn">
                        <div className="btn-group" role="group">
                          <div className="dropdown dropdown-lg">
                            <button
                              type="button"
                              className="btn btn-default dropdown-toggle"
                              data-toggle="dropdown"
                              aria-expanded="false"
                            >
                              <span className="fa fa-caret-down"></span>
                            </button>
                            <div
                              className="dropdown-menu dropdown-menu-right"
                              role="menu"
                            >
                              <div className="form-horizontal">
                                <div className="checkbox">
                                  <label>
                                    <input type="checkbox" /> From Blog
                                  </label>
                                </div>
                                <div className="checkbox">
                                  <label>
                                    <input type="checkbox" />
                                    Find Your Apartment
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            <span
                              className="fa fa-search"
                              aria-hidden="true"
                            ></span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="cd-user-modal">
          <div className="cd-user-modal-container">
            <ul className="cd-switcher">
              <li>
                <a href="#0">Sign in</a>
              </li>
              <li>
                <a href="#0">New account</a>
              </li>
            </ul>

            <div id="cd-login">
              <form className="cd-form">
                <p className="fieldset">
                  <label className="image-replace cd-email" htmlFor="signin-email">
                    E-mail
                  </label>
                  <input
                    className="full-width has-padding has-border"
                    id="signin-email"
                    type="email"
                    placeholder="E-mail"
                  />
                  <span className="cd-error-message">Error message here!</span>
                </p>

                <p className="fieldset">
                  <label
                    className="image-replace cd-password"
                    htmlFor="signin-password"
                  >
                    Password
                  </label>
                  <input
                    className="full-width has-padding has-border"
                    id="signin-password"
                    type="text"
                    placeholder="Password"
                  />
                  <a href="#0" className="hide-password">
                    Hide
                  </a>
                  <span className="cd-error-message">Error message here!</span>
                </p>

                <p className="fieldset">
                  <input type="checkbox" id="remember-me"  />
                  <label htmlFor="remember-me">Remember me</label>
                </p>

                <p className="fieldset">
                  <input className="full-width" type="submit" value="Login" />
                </p>
              </form>

              <p className="cd-form-bottom-message">
                <a href="#0">Forgot your password?</a>
              </p>
              <a href="#0" className="cd-close-form">
                Close
              </a>
            </div>

            <div id="cd-signup">
              <form className="cd-form">
                <p className="fieldset">
                  <label
                    className="image-replace cd-username"
                    htmlFor="signup-username"
                  >
                    Username
                  </label>
                  <input
                    className="full-width has-padding has-border"
                    id="signup-username"
                    type="text"
                    placeholder="Username"
                  />
                  <span className="cd-error-message">Error message here!</span>
                </p>

                <p className="fieldset">
                  <label className="image-replace cd-email" htmlFor="signup-email">
                    E-mail
                  </label>
                  <input
                    className="full-width has-padding has-border"
                    id="signup-email"
                    type="email"
                    placeholder="E-mail"
                  />
                  <span className="cd-error-message">Error message here!</span>
                </p>

                <p className="fieldset">
                  <label
                    className="image-replace cd-password"
                    htmlFor="signup-password"
                  >
                    Password
                  </label>
                  <input
                    className="full-width has-padding has-border"
                    id="signup-password"
                    type="text"
                    placeholder="Password"
                  />
                  <a href="#0" className="hide-password">
                    Hide
                  </a>
                  <span className="cd-error-message">Error message here!</span>
                </p>

                <p className="fieldset">
                  <input type="checkbox" id="accept-terms" />
                  <label htmlFor="accept-terms">
                    I agree to the <a href="#0">Terms</a>
                  </label>
                </p>

                <p className="fieldset">
                  <input
                    className="full-width has-padding"
                    type="submit"
                    value="Create account"
                  />
                </p>
              </form>

              <a href="#0" className="cd-close-form">
                Close
              </a>
            </div>

            <div id="cd-reset-password">
              <p className="cd-form-message">
                Lost your password? Please enter your email address. You will
                receive a link to create a new password.
              </p>

              <form className="cd-form">
                <p className="fieldset">
                  <label className="image-replace cd-email" htmlFor="reset-email">
                    E-mail
                  </label>
                  <input
                    className="full-width has-padding has-border"
                    id="reset-email"
                    type="email"
                    placeholder="E-mail"
                  />
                  <span className="cd-error-message">Error message here!</span>
                </p>
                <p className="fieldset">
                  <input
                    className="full-width has-padding"
                    type="submit"
                    value="Reset password"
                  />
                </p>
              </form>

              <p className="cd-form-bottom-message">
                <a href="#0">Back to log-in</a>
              </p>
            </div>
            <a href="#0" className="cd-close-form">
              Close
            </a>
          </div>
        </div>
      </div>

      <div className="slider-area">
        <div className="pogoSlider">
          <div
            className="pogoSlider-slide overlay-gradient bg_slide_1"
            data-transition="expandReveal"
            data-duration="1000"
            style={{backgroundImage: `url(assets/images/slider-one.png)`}}
           
          >
            <div className="container-slider one">
              <div className="row">
                <div className="col-md-12">
                  <div className="slider-text-content">
                    <h3
                      className="pogoSlider-slide-element"
                      data-in="slideDown"
                      data-out="slideUp"
                      data-duration="500"
                      data-delay="500"
                    >
                      Good Service is our passion
                    </h3>
                    <h2
                      className="pogoSlider-slide-element"
                      data-in="slide-left"
                      data-out="slideUp"
                      data-duration="500"
                      data-delay="500"
                    >
                      Awesome apartment Villa
                    </h2>
                    <p
                      className="pogoSlider-slide-element"
                      data-in="slideDown"
                      data-out="slideUp"
                      data-duration="500"
                      data-delay="500"
                    >
                      No matter what the weather, no matter what the situation
                      we are in, if we have the right perspective in life, life
                      will always be beautiful!
                    </p>
                    <a
                      href="#"
                      className="button pogoSlider-slide-element"
                      data-in="slideDown"
                      data-out="slideUp"
                      data-duration="500"
                      data-delay="500"
                    >
                      Special Offer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="pogoSlider-slide  overlay-gradient bg_slide_1"
            data-transition="expandReveal"
            data-duration="1000"
          
          >
            <div className="container-slider one">
              <div className="row">
                <div className="col-md-12">
                  <div className="slider-text-content">
                    <h3
                      className="pogoSlider-slide-element"
                      data-in="slideDown"
                      data-out="slideUp"
                      data-duration="500"
                      data-delay="500"
                    >
                      Good Service is our passion
                    </h3>
                    <h2
                      className="pogoSlider-slide-element"
                      data-in="slide-left"
                      data-out="slideUp"
                      data-duration="500"
                      data-delay="500"
                    >
                      Awesome apartment Villa
                    </h2>
                    <p
                      className="pogoSlider-slide-element"
                      data-in="slideDown"
                      data-out="slideUp"
                      data-duration="500"
                      data-delay="500"
                    >
                      No matter what the weather, no matter what the situation
                      we are in, if we have the right perspective in life, life
                      will always be beautiful!
                    </p>
                    <a
                      href="#"
                      className="button pogoSlider-slide-element"
                      data-in="slideDown"
                      data-out="slideUp"
                      data-duration="500"
                      data-delay="500"
                    >
                      Special Offer
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="call-to-action style-two default-template-gradient">
        <div className="container">
          <div className="row tb">
            <div className="col-md-6 col-sm-6 tb-cell">
              <div className="left-content">
                <h3>Do you want to Rent your House</h3>
                <h4>Call us and list your property here</h4>
              </div>
            </div>
            <div className="col-md-6 col-sm-6 tb-cell">
              <div className="right-content">
                <div className="row">
                  <div className="col-md-6">
                    <div className="contact-left">
                      <h4>
                        <a href="#">
                          +880123654987<span>company@gmail.com</span>
                        </a>
                      </h4>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="contact">
                      <a href="#">Contact us</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutus-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-content-one">
                <h2 className="title">About Us</h2>
                <h5 className="sub-title">Welcome to our House Rent Company</h5>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-2">
              <div className="tab-list">
                <ul
                  className="nav nav-tabs about-tab hidden-xs hidden-sm"
                  role="tablist"
                >
                  <li role="presentation" className="active">
                    <a
                      href="#home"
                      aria-controls="home"
                      role="tab"
                      data-toggle="tab"
                    >
                      About Company
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#profile"
                      aria-controls="profile"
                      role="tab"
                      data-toggle="tab"
                    >
                      Terms &amp; Condition
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#messages"
                      aria-controls="messages"
                      role="tab"
                      data-toggle="tab"
                    >
                      Our specialty
                    </a>
                  </li>
                  <li role="presentation">
                    <a
                      href="#messages"
                      aria-controls="messages"
                      role="tab"
                      data-toggle="tab"
                    >
                      Our specialty
                    </a>
                  </li>
                </ul>
                <form className="hidden-md hidden-lg">
                  <select className="about-mobile">
                    <option value="0">About Company</option>
                    <option value="1">Terms &amp; Condition</option>
                    <option value="2">Our specialty</option>
                    <option value="3">Our specialty</option>
                  </select>
                </form>
              </div>
            </div>

            <div className="col-md-10">
              <div className="tab-content">
                <div role="tabpanel" className="tab-pane active row" id="home">
                  <div className="col-md-6">
                    <div className="text-content">
                      <p>
                        Amorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Cras vitae nibh nisl. Cras etitikis mauris egeth
                        lorem ultricies ferme is ntum a inti diam. Morbi mollis
                        pellden tesque offs aiug ueia nec rhoncus. Nam ute
                        ultricies. Cras etitikis mauris eget lorem ultricies
                        ferme ntum a inti diam. Morbi mollis pellen tesque offs
                        aiug ueia nec rhoncus. Nam ute ultricies.
                      </p>
                      <ul>
                        <li>Amorem ipsum dolor sit amet, consectetur </li>
                        <li>Cras etitikis mauris egeth lorem ultricies</li>
                        <li>Amorem ipsum dolor sit amet, consectetur </li>
                        <li>Cras etitikis mauris egeth lorem ultricies</li>
                        <li>Amorem ipsum dolor sit amet, consectetur </li>
                        <li>Cras etitikis mauris egeth lorem ultricies</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="image-content">
                      <img src="assets/images/about-image.png" alt="about" />
                    </div>
                  </div>
                </div>

                <div role="tabpanel" className="tab-pane fade row" id="profile">
                  <div className="col-md-6">
                    <div className="text-content">
                      <p>
                        Amorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Cras vitae nibh nisl. Cras etitikis mauris egeth
                        lorem ultricies ferme is ntum a inti diam. Morbi mollis
                        pellden tesque offs aiug ueia nec rhoncus. Nam ute
                        ultricies. Cras etitikis mauris eget lorem ultricies
                        ferme ntum a inti diam. Morbi mollis pellen tesque offs
                        aiug ueia nec rhoncus. Nam ute ultricies.
                      </p>
                      <ul>
                        <li>Amorem ipsum dolor sit amet, consectetur </li>
                        <li>Cras etitikis mauris egeth lorem ultricies</li>
                        <li>Amorem ipsum dolor sit amet, consectetur </li>
                        <li>Cras etitikis mauris egeth lorem ultricies</li>
                        <li>Amorem ipsum dolor sit amet, consectetur </li>
                        <li>Cras etitikis mauris egeth lorem ultricies</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="image-content">
                      <img src="assets/images/about-image.png" alt="about" />
                    </div>
                  </div>
                </div>

                <div role="tabpanel" className="tab-pane fade row" id="messages">
                  <div className="col-md-6">
                    <div className="text-content">
                      <p>
                        Amorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Cras vitae nibh nisl. Cras etitikis mauris egeth
                        lorem ultricies ferme is ntum a inti diam. Morbi mollis
                        pellden tesque offs aiug ueia nec rhoncus. Nam ute
                        ultricies. Cras etitikis mauris eget lorem ultricies
                        ferme ntum a inti diam. Morbi mollis pellen tesque offs
                        aiug ueia nec rhoncus. Nam ute ultricies.
                      </p>
                      <ul>
                        <li>Amorem ipsum dolor sit amet, consectetur </li>
                        <li>Cras etitikis mauris egeth lorem ultricies</li>
                        <li>Amorem ipsum dolor sit amet, consectetur </li>
                        <li>Cras etitikis mauris egeth lorem ultricies</li>
                        <li>Amorem ipsum dolor sit amet, consectetur </li>
                        <li>Cras etitikis mauris egeth lorem ultricies</li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="image-content">
                      <img src="assets/images/about-image.png" alt="about" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="apartments-area bg-gray-color">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="heading-content-one border">
                <h2 className="title">Rooms &amp; Apartments</h2>
                <h5 className="sub-title">Find Your Rooms, for your abaility</h5>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-6">
              <div className="apartments-content">
                <div className="image-content">
                  <a href="apartment-single.html">
                    <img
                      src="assets/images/apartment/apartment-one.png"
                      alt="apartment"
                    />
                  </a>
                </div>

                <div className="text-content">
                  <div className="top-content">
                    <h3>
                      <a href="apartment-single.html">Family Apartment</a>
                    </h3>
                    <span>
                      <i className="fa fa-map-marker"></i>
                      Dhanmondi, Dhaka
                    </span>
                  </div>
                  <div className="bottom-content clearfix">
                    <div className="meta-bed-room">
                      <i className="fa fa-bed"></i> 3 Bedrooms
                    </div>
                    <div className="meta-bath-room">
                      <i className="fa fa-bath"></i>2 Bathroom
                    </div>
                    <span className="clearfix"></span>
                    <div className="rent-price pull-left">$200</div>
                    <div className="share-meta dropup pull-right">
                      <ul>
                        <li className="dropup">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fa fa-share-alt"></i>
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-google-plus"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-star-o"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-6">
              <div className="apartments-content">
                <div className="image-content">
                  <a href="apartment-single.html">
                    <img
                      src="assets/images/apartment/apartment-two.png"
                      alt="apartment"
                    />
                  </a>
                </div>

                <div className="text-content">
                  <div className="top-content">
                    <h3>
                      <a href="apartment-single.html">Family Apartment</a>
                    </h3>
                    <span>
                      <i className="fa fa-map-marker"></i>
                      Dhanmondi, Dhaka
                    </span>
                  </div>
                  <div className="bottom-content clearfix">
                    <div className="meta-bed-room">
                      <i className="fa fa-bed"></i> 3 Bedrooms
                    </div>
                    <div className="meta-bath-room">
                      <i className="fa fa-bath"></i>2 Bathroom
                    </div>
                    <span className="clearfix"></span>
                    <div className="rent-price pull-left">$200</div>
                    <div className="share-meta dropup pull-right">
                      <ul>
                        <li className="dropup">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fa fa-share-alt"></i>
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-google-plus"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-star-o"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix hidden-md hidden-lg"></div>

            <div className="col-md-4 col-sm-6 col-xs-6">
              <div className="apartments-content">
                <div className="image-content">
                  <a href="apartment-single.html">
                    <img
                      src="assets/images/apartment/apartment-three.png"
                      alt="apartment"
                    />
                  </a>
                </div>

                <div className="text-content">
                  <div className="top-content">
                    <h3>
                      <a href="apartment-single.html">Family Apartment</a>
                    </h3>
                    <span>
                      <i className="fa fa-map-marker"></i>
                      Dhanmondi, Dhaka
                    </span>
                  </div>
                  <div className="bottom-content clearfix">
                    <span className="meta-bed-room">
                      <i className="fa fa-bed"></i> 3 Bedrooms
                    </span>
                    <span className="meta-bath-room">
                      <i className="fa fa-bath"></i>2 Bathroom
                    </span>
                    <span className="clearfix"></span>
                    <span className="rent-price pull-left">$200</span>
                    <div className="share-meta dropup pull-right">
                      <ul>
                        <li className="dropup">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fa fa-share-alt"></i>
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-google-plus"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-star-o"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix hidden-xs hidden-sm"></div>

            <div className="col-md-4 col-sm-6 col-xs-6">
              <div className="apartments-content">
                <div className="image-content">
                  <a href="apartment-single.html">
                    <img
                      src="assets/images/apartment/apartment-four.png"
                      alt="apartment"
                    />
                  </a>
                </div>

                <div className="text-content">
                  <div className="top-content">
                    <h3>
                      <a href="apartment-single.html">Family Apartment</a>
                    </h3>
                    <span>
                      <i className="fa fa-map-marker"></i>
                      Dhanmondi, Dhaka
                    </span>
                  </div>
                  <div className="bottom-content clearfix">
                    <span className="meta-bed-room">
                      <i className="fa fa-bed"></i> 3 Bedrooms
                    </span>
                    <span className="meta-bath-room">
                      <i className="fa fa-bath"></i>2 Bathroom
                    </span>
                    <span className="clearfix"></span>
                    <span className="rent-price pull-left">$200</span>
                    <div className="share-meta dropup pull-right">
                      <ul>
                        <li className="dropup">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fa fa-share-alt"></i>
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-google-plus"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-star-o"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="clearfix hidden-md hidden-lg"></div>

            <div className="col-md-4 col-sm-6 col-xs-6">
              <div className="apartments-content">
                <div className="image-content">
                  <a href="apartment-single.html">
                    <img
                      src="assets/images/apartment/apartment-five.png"
                      alt="apartment"
                    />
                  </a>
                </div>

                <div className="text-content">
                  <div className="top-content">
                    <h3>
                      <a href="apartment-single.html">Family Apartment</a>
                    </h3>
                    <span>
                      <i className="fa fa-map-marker"></i>
                      Dhanmondi, Dhaka
                    </span>
                  </div>
                  <div className="bottom-content clearfix">
                    <span className="meta-bed-room">
                      <i className="fa fa-bed"></i> 3 Bedrooms
                    </span>
                    <span className="meta-bath-room">
                      <i className="fa fa-bath"></i>2 Bathroom
                    </span>
                    <span className="clearfix"></span>
                    <span className="rent-price pull-left">$200</span>
                    <div className="share-meta dropup pull-right">
                      <ul>
                        <li className="dropup">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fa fa-share-alt"></i>
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-google-plus"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-star-o"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-6">
              <div className="apartments-content">
                <div className="image-content">
                  <a href="apartment-single.html">
                    <img
                      src="assets/images/apartment/apartment-six.png"
                      alt="apartment"
                    />
                  </a>
                </div>

                <div className="text-content">
                  <div className="top-content">
                    <h3>
                      <a href="apartment-single.html">Family Apartment</a>
                    </h3>
                    <span>
                      <i className="fa fa-map-marker"></i>
                      Dhanmondi, Dhaka
                    </span>
                  </div>
                  <div className="bottom-content clearfix">
                    <span className="meta-bed-room">
                      <i className="fa fa-bed"></i> 3 Bedrooms
                    </span>
                    <span className="meta-bath-room">
                      <i className="fa fa-bath"></i>2 Bathroom
                    </span>
                    <span className="clearfix"></span>
                    <span className="rent-price pull-left">$200</span>
                    <div className="share-meta dropup pull-right">
                      <ul>
                        <li className="dropup">
                          <a
                            href="#"
                            className="dropdown-toggle"
                            data-toggle="dropdown"
                            role="button"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fa fa-share-alt"></i>
                          </a>
                          <ul className="dropdown-menu">
                            <li>
                              <a href="#">
                                <i className="fa fa-facebook"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-twitter"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-instagram"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="fa fa-google-plus"></i>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="#">
                            <i className="fa fa-star-o"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a href="#" className="button nevy-button">
            All Apartments
          </a>
        </div>
      </div>
    
      <div
        className="fun-fects-area count-down-image"
       
      >
        <div className="container">
          <div className="stat">
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="milestone-counter">
                <h3
                  className="stat-count highlight"
                  data-form="1"
                  data-to="2500"
                  data-speed="3000"
                >
                  2500
                </h3>
                <div className="milestone-details">Clients</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="milestone-counter">
                <h3
                  className="stat-count highlight"
                  data-form="1"
                  data-to="3055"
                  data-speed="3000"
                >
                  3055
                </h3>
                <div className="milestone-details">Booking</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="milestone-counter">
                <h3
                  className="stat-count highlight"
                  data-form="1"
                  data-to="50"
                  data-speed="3000"
                >
                  50
                </h3>
                <div className="milestone-details">Swimming</div>
              </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
              <div className="milestone-counter">
                <h3
                  className="stat-count highlight"
                  data-form="1"
                  data-to="1530"
                  data-speed="3000"
                >
                  1530
                </h3>
                <div className="milestone-details">Apartment</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="gallery-area">
        <div className="container-fluid">
          <div className="container-large-device">
            <div className="row">
              <div className="col-md-7">
                <div className="gallery-left-content">
                  <div className="row">
                    <div className="col-md-4 col-sm-6 col-xs-6">
                      <a
                        className="image-pop-up"
                        href="assets/images/gallery/gallery-one.png"
                      >
                        <img
                          src="assets/images/gallery/gallery-one.png"
                          alt="gallery"
                        />
                      </a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-6">
                      <a
                        className="image-pop-up"
                        href="assets/images/gallery/gallery-two.png"
                      >
                        <img
                          src="assets/images/gallery/gallery-two.png"
                          alt="gallery"
                        />
                      </a>
                    </div>
                    <div className="clearfix visible-xs-block"></div>
                    <div className="col-md-4 col-sm-6 col-xs-6">
                      <a
                        className="image-pop-up"
                        href="assets/images/gallery/gallery-three.png"
                      >
                        <img
                          src="assets/images/gallery/gallery-three.png"
                          alt="gallery"
                        />
                      </a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-6">
                      <a
                        className="image-pop-up"
                        href="assets/images/gallery/gallery-four.png"
                      >
                        <img
                          src="assets/images/gallery/gallery-four.png"
                          alt="gallery"
                        />
                      </a>
                    </div>
                    <div className="clearfix visible-xs-block"></div>
                    <div className="col-md-4 col-sm-6 col-xs-6">
                      <a
                        className="image-pop-up"
                        href="assets/images/gallery/gallery-five.png"
                      >
                        <img
                          src="assets/images/gallery/gallery-five.png"
                          alt="gallery"
                        />
                      </a>
                    </div>
                    <div className="col-md-4 col-sm-6 col-xs-6">
                      <a className="image-pop-up" href="#">
                        <img
                          src="assets/images/gallery/gallery-six.png"
                          alt="gallery"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="gallery-right-content">
                  <h2>
                    Our
                    <br /> Photo Gallery
                  </h2>
                  <h3>
                    Best of our <br />
                    Event portfolio Photos
                  </h3>
                  <p>
                    Amorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras vitae nibh nisl. Cras etitikis mauris eget lorem
                    ultricies ferme ntum a inti diam. Morbi mollis pellen tesque
                    offs aiug ueia nec rhoncus. Nam ute ultricies.
                  </p>
                  <a href="gallery.html" className="button nevy-button">
                    All Photos &amp; Video
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="company-logo-area default-template-gradient">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="logo-content">
                <h2>Company With Us</h2>
                <div className="brand-slider owl-carousel">
                  <div className="item">
                    <a href="#">
                      <img src="assets/images/logo/logo-one.png" alt="logo" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src="assets/images/logo/logo-two.png" alt="logo" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src="assets/images/logo/logo-three.png" alt="logo" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src="assets/images/logo/logo-four.png" alt="logo" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src="assets/images/logo/logo-five.png" alt="logo" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src="assets/images/logo/logo-six.png" alt="logo" />
                    </a>
                  </div>
                  <div className="item">
                    <a href="#">
                      <img src="assets/images/logo/logo-seven.png" alt="logo" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="blog-area bg-gray-color">
        <div className="container">
          <div className="col-md-12">
            <div className="heading-content-one">
              <h2 className="title">Blog</h2>
              <h5 className="sub-title">Our Newa Feed</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-6">
              <article className="post">
                <figure className="post-thumb">
                  <a href="blog-single.html">
                    <img src="assets/images/blog/blog-one.png" alt="blog" />
                  </a>
                </figure>
                <div className="post-content">
                  <div className="entry-meta">
                    <span className="entry-date">July 25, 2016</span>
                    <span className="devied"></span>
                    <span className="entry-category">
                      <a href="#">Rooms &amp; suites</a>
                    </span>
                  </div>
                  <div className="entry-header">
                    <h3>
                      <a href="blog-single.html">
                        Finding best places to visit in California
                      </a>
                    </h3>
                  </div>
                  <div className="entry-footer">
                    <div className="entry-footer-meta">
                      <span className="view">
                        <i className="fa fa-eye"></i>35
                      </span>
                      <span className="like">
                        <a href="#">
                          <i className="fa fa-heart-o"></i>09
                        </a>
                      </span>
                      <span className="comments">
                        <a href="#">
                          <i className="fa fa-comments"></i>05
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6">
              <article className="post">
                <figure className="post-thumb">
                  <a href="blog-single.html">
                    <img src="assets/images/blog/blog-two.png" alt="blog" />
                  </a>
                </figure>
                <div className="post-content">
                  <div className="entry-meta">
                    <span className="entry-date">July 25, 2016</span>
                    <span className="devied"></span>
                    <span className="entry-category">
                      <a href="#">Rooms &amp; suites</a>
                    </span>
                  </div>
                  <div className="entry-header">
                    <h3>
                      <a href="blog-single.html">
                        Finding best places to visit in California
                      </a>
                    </h3>
                  </div>
                  <div className="entry-footer">
                    <div className="entry-footer-meta">
                      <span className="view">
                        <i className="fa fa-eye"></i>35
                      </span>
                      <span className="like">
                        <a href="#">
                          <i className="fa fa-heart-o"></i>09
                        </a>
                      </span>
                      <span className="comments">
                        <a href="#">
                          <i className="fa fa-comments"></i>05
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-md-4 col-sm-6 col-xs-6">
              <article className="post">
                <figure className="post-thumb">
                  <a href="blog-single.html">
                    <img src="assets/images/blog/blog-three.png" alt="blog" />
                  </a>
                </figure>
                <div className="post-content">
                  <div className="entry-meta">
                    <span className="entry-date">July 25, 2016</span>
                    <span className="devied"></span>
                    <span className="entry-category">
                      <a href="#">Rooms &amp; suites</a>
                    </span>
                  </div>
                  <div className="entry-header">
                    <h3>
                      <a href="blog-single.html">
                        Finding best places to visit in California
                      </a>
                    </h3>
                  </div>
                  <div className="entry-footer">
                    <div className="entry-footer-meta">
                      <span className="view">
                        <i className="fa fa-eye"></i>35
                      </span>
                      <span className="like">
                        <a href="#">
                          <i className="fa fa-heart-o"></i>09
                        </a>
                      </span>
                      <span className="comments">
                        <a href="#">
                          <i className="fa fa-comments"></i>05
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <a href="blog.html" className="button">
            show all
          </a>
        </div>
      </div>

      <div className="contact-area pd-zero">
        <div className="container-fluid pd-zero">
          <div className="row">
            <div className="col-md-7">
              <div className="map-left-content">
                <iframe
                  width="600"
                  height="350"
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyC871wKM6aoCLSV_pT3xBVsYzNGXaDh7Pw&q=121King+St,Melbourne+VIC+3000,Australia"
                  allowFullScreen="allowFullScreen"
                ></iframe>
              </div>
            </div>
            <div className="col-md-5">
              <div className="heading-content-two available">
                <h2 className="title">
                  We Are Available
                  <br /> For You 24/7
                </h2>
                <h5 className="sub-title">
                  Our online support service is always 24 Hours
                </h5>
              </div>
              <div className="map-right-content">
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="contact">
                      <h4>
                        <i className="fa fa-address-book"></i>Address
                      </h4>
                      <p>112/B - Road 121, King/St Melbourne Australia</p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="contact">
                      <h4>
                        <i className="fa fa-envelope"></i>Mail
                      </h4>
                      <p>yourmail@domain.com houserent@domain.com</p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-6">
                    <div className="contact">
                      <h4>
                        <i className="fa fa-phone-square"></i>Call
                      </h4>
                      <p>
                        +99 0215469875 <br />
                        666 35874692050
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6">
                    <div className="contact">
                      <h4>
                        <i className="fa fa-user-circle"></i>Social account
                      </h4>
                      <div className="social-icon">
                        <a href="#">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                        <a href="#">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer
        className="footer-area"
       
      >
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="widget widget_about yellow-color">
                <div className="widget-title-area">
                  <h3 className="widget-title">About House Rent</h3>
                </div>
                <div className="widget-about-content">
                  <img src="assets/images/footer-logo.png" alt="house" />
                  <p>
                    We Provide Premium Word Press, Ghost and HTML template. Our
                    Perm tritium Templates is, develop gaped in a way so that
                    the clients find Support. Themes are developed in a way so
                    that the clients find.
                  </p>
                  <a href="#" className="button">
                    More
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget widget_place_category yellow-color">
                <div className="widget-title-area">
                  <h3 className="widget-title">Place Category</h3>
                </div>
                <ul>
                  <li>
                    Flat for Rent <a href="#">Francis</a>
                  </li>
                  <li>
                    Flat for Rent <a href="#">Collins St</a>
                  </li>
                  <li>
                    Flat for Rent <a href="#">Rose Ln</a>
                  </li>
                  <li>
                    Flat for Rent <a href="#">Cosgrave Ln</a>
                  </li>
                  <li>
                    Flat for Rent <a href="#">Bourke St</a>
                  </li>
                  <li>
                    Flat for Rent <a href="#">Flienders Ln</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-4">
              <div className="widget widget_instagram yellow-color">
                <div className="widget-title-area">
                  <h3 className="widget-title">Instagram Image</h3>
                </div>
                <div className="instagram-image-content">
                  <a href="#">
                    <img
                      src="assets/images/instagram/instagram-one.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/instagram/instagram-two.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/instagram/instagram-three.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/instagram/instagram-four.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/instagram/instagram-five.png"
                      alt=""
                    />
                  </a>
                  <a href="#">
                    <img
                      src="assets/images/instagram/instagram-six.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="bottom-content">
                <p>
                  Copyright &copy;2017 <a href="#">HTMLguru</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

     
    </React.Fragment>
  );
}
