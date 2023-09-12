import React from 'react'
// import { useEffect } from 'react'
// import jQuery from 'jquery'
import { Link } from 'react-router-dom';
function Header() {

    // useEffect(() => {
    //     (function ($) {
    //         "use strict";

    //     $('#mobile-menu').meanmenu({
    //         meanMenuContainer: '.mobile-menu',
    //         meanScreenWidth: "991",
    //         meanExpand: ['<i className="fal fa-plus"></i>'],
    //     });
    //     $(".offcanvas-open-btn").on("click", function () {
    //         $(".offcanvas__area").addClass("offcanvas-opened");
    //         $(".body-overlay").addClass("opened");
    //     });
    //     $(".offcanvas-close-btn").on("click", function () {
    //         $(".offcanvas__area").removeClass("offcanvas-opened");
    //         $(".body-overlay").removeClass("opened");
    //     });
    // })(jQuery);
    // }, [])
  return (
    <>
{/*     
   <!-- header area start --> */}
   <header>
      <div className="tp-header__area">
         <div className="tp-header__top theme-bg-2 d-none d-lg-block">
            <div className="container-fluid">
               <div className="tp-header__container">
                  <div className="row align-items-center">
                     <div className="col-xxl-6 col-xl-8 col-lg-8 col-md-8">
                        <div className="tp-header__info">
                           <ul>
                              <li>
                              <Link to="tel:+61488896118"><i className="fa-regular fa-phone"></i>
                                 +61 4888 96 118</Link>
                              </li>
                              <li>
                                 <Link to="https://goo.gl/maps/qzqY2PAcQwUz1BYN9" target="_blank"><i
                                       className="fa-regular fa-location-dot"></i> 2 Peebles St, Endeavour Hills Victoria, Australia PO Box: 3802</Link>
                              </li>
                              <li>
                                 <i className="fa-regular fa-clock"></i> Mon
                                    - Sat 8.00 - 18.00
                              </li>
                           </ul>
                        </div>
                     </div>
                     <div className="col-xxl-6 col-xl-4 col-lg-4 col-md-4">
                        <div className="tp-header__top-right d-flex justify-content-end align-items-center">
                           <div className="tp-header__account">
                              <ul>
                                 <li><Link to="#"><i className="fal fa-user"></i>Login</Link></li>
                                 <li>|</li>
                                 <li><Link to="#">Register</Link></li>

                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tp-header__main" id="header-sticky">
            <div className="container-fluid">
               <div className="tp-header__container">
                  <div className="row align-items-center">
                     <div className="col-xxl-5 col-xl-5 col-lg-3 col-md-6 col-6">
                        <div className="tp-header-left d-flex justify-content-between align-items-center">
                           <div className="logo">
                              <Link to="#">
                                 <img src="assets/img/logo/logo.png" alt="logo" />
                              </Link>
                           </div>
                           <div className="tp-header-attach d-none d-xl-block">
                              <div className="tp-header__attach d-flex align-items-center">
                                 <div className="tp-header__category d-none d-xl-block">
                                    <nav>
                                       <ul>
                                          <li>
                                             <Link to="#" className="cat-menu d-flex align-items-center">
                                                <span><img src='assets/img/offer.webp' alt="offer"/></span>
                                             </Link>
                                             {/* <ul className="cat-submenu">
                                                <li><Link to="course-details.html">English Learning</Link></li>
                                                <li><Link to="course-details.html">Web Development</Link></li>
                                                <li><Link to="course-details.html">Logo Design</Link></li>
                                                <li><Link to="course-details.html">Motion Graphics</Link></li>
                                                <li><Link to="course-details.html">Video Edition</Link></li>
                                             </ul> */}
                                          </li>
                                       </ul>
                                    </nav>
                                 </div>
                                 <div className="tp-header__search">
                                    <form>
                                       <input type="text" placeholder="Search Courses" />
                                       <button><i className="fal fa-search"></i></button>
                                    </form>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     
                     <div className="col-xxl-5 col-xl-5 col-lg-6 d-none d-lg-block">
                        <div className="main-menu text-end">
                           <nav id="mobile-menu">
                              <ul>
                                 <li className="has-dropdown">
                                    <Link to="#">Services</Link>
                                    <ul className="submenu">
                                       <li><Link to="#">Coursework Help</Link></li>
                                       <li><Link to="#">Essay Help</Link></li>
                                       <li><Link to="#">Thesis Help</Link></li>
                                       <li><Link to="#">Case Study Help</Link></li>
                                       <li><Link to="#">Referencing Style Help</Link></li>
                                       <li><Link to="#">Proofreading Services</Link></li>
                                       <li><Link to="#">Rewrite Services</Link></li>
                                       <li><Link to="#">Assessment Help</Link></li>
                                    </ul>
                                 </li>
                               
                                 <li className="has-dropdown">
                                    <Link to="#">Assignment</Link>
                                    <ul className="submenu">
                                       <li><Link to="#">Nursing Assignment Helper</Link></li>
                                       <li><Link to="#">Management Assignment Helper</Link></li>
                                       <li><Link to="#">Marketing Assignment Helper</Link></li>
                                       <li><Link to="#">Programming Assignment Helper</Link></li>
                                       <li><Link to="#">Finance Assignment Helper</Link></li>
                                       <li><Link to="#">Accounting Assignment Helper</Link></li>
                                       <li><Link to="#">Law Assignment Helper</Link></li>
                                       <li><Link to="#">Computer Science Assignment</Link></li>
                                       <li><Link to="#">Statistics Assignment Helper</Link></li>
                                       <li><Link to="#">Engineering Assignment Helper</Link></li>
                                       <li><Link to="#">Science Assignment Helper</Link></li>
                                       <li><Link to="#">TAFE Assignment Helper</Link></li>
                                       <li><Link to="#">Economics Assignment Helper</Link></li>
                                    </ul>
                                 </li>
                                 <li className="has-dropdown">
                                    <Link to="#">Dissertation</Link>
                                    <ul className="submenu">
                                       <li><Link to="#">Dissertation Proposal</Link></li>
                                       <li><Link to="#">Dissertation Writing</Link></li>
                                       <li><Link to="#">Dissertation Experts</Link></li>
                                       <li><Link to="#">Research Writing</Link></li>
                                       <li><Link to="#">Dissertation Proofreding</Link></li>
                                       <li><Link to="#">Thesis Writing</Link></li>
                                       <li><Link to="#">Law Dissertation</Link></li>
                                       <li><Link to="#">Nursing Dissertation</Link></li>
                                       <li><Link to="#">Accounting Dissertation</Link></li>
                                       <li><Link to="#">Finance Dissertation</Link></li>
                                       <li><Link to="#">Economics Dissertation</Link></li>
                                       <li><Link to="#">Statistics Dissertation</Link></li>
                                       <li><Link to="#">Chemistry Dissertation</Link></li>
                                    </ul>
                                 </li>
                                 <li className="has-dropdown">
                                    <Link to="#">Exam Quiz</Link>
                                    <ul className="submenu">
                                       <li><Link to="#">Accounting Exam Quiz</Link></li>
                                       <li><Link to="#">Finance Exam Quiz</Link></li>
                                       <li><Link to="#">Statisics Exam Quiz</Link></li>
                                       <li><Link to="#">Economics Exam Quiz</Link></li>
                                       <li><Link to="#">Biology Exam Quiz</Link></li>
                                       <li><Link to="#">History Exam Quiz</Link></li>
                                       <li><Link to="#">Maths Exam Quiz</Link></li>
                                    </ul>
                                 </li>
                                 <li>
                                    <Link to="#">Blog</Link>
                                 </li>
                                 <li>
                                    <Link to="#">Reviews</Link>
                                 </li>
                                 {/* <li>
                                 <Link to="#" >
                                                <span><img src='assets/img/offer.webp' alt="offer"/></span>
                                             </Link>
                                 </li> */}
                              </ul>
                           </nav>
                        </div>
                     </div>
                     <div className="col-xxl-2 col-xl-2 col-lg-3 col-md-6 col-6">
                        <div className="tp-header__main-right d-flex justify-content-end align-items-center">
                           <div className="header-acttion-btns d-flex align-items-center d-none d-md-flex">
                              <Link to="#" className="tp-btn">
                                 <span>Order Now<i className="fa-regular fa-arrow-right"></i> </span>
                                 <div className="transition"></div>
                              </Link>
                           </div>
                           <div className="tp-header__hamburger ml-50 d-lg-none">
                              <button className="hamburger-btn offcanvas-open-btn">
                                 <span></span>
                                 <span></span>
                                 <span></span>
                              </button>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </header>

   
   {/* <!-- header area end --> */}

{/* 
   <!-- offcanvas area start --> */}
   <div className="offcanvas__area" >
      <div className="offcanvas__wrapper">
         <div className="offcanvas__content">
            <div className="offcanvas__close text-end">
               <button className="offcanvas__close-btn offcanvas-close-btn">
                  <i className="fal fa-times"></i>
               </button>
            </div>
            <div className="offcanvas__top mb-40">
               <div className="offcanvas__subtitle">
                  <span className="text-white d-inline-block mb-25 d-none d-lg-block">ELEVATE YOUR BUSINESS WITH</span>
               </div>
               <div className="offcanvas__logo mb-40">
                  <a href="index.html">
                     <img src="assets/img/logo/logo.png" alt="logo"/>
                  </a>
               </div>
               <div className="offcanvas-info d-none d-lg-block">
                  <p>Limitless customization options & Elementor compatibility let anyone create a beautiful website
                     with Valiance. </p>
               </div>
               <div className="offcanvas__btn d-none d-lg-block">
                  <a href="contact.html" className="tp-btn">Contact us <span></span></a>
               </div>
            </div>
            <div className="mobile-menu fix mb-40"></div>


            <div className="offcamvas__bottom">
               <div className="offcanvas__cta mt-30 mb-20">
                  <h3 className="offcanvas__cta-title">Contact info</h3>
                  <span>27 Division St, New York,</span>
                  <span>+154 4808 84082 4830</span>
                  <span>support@noxia.com</span>
                  <span>Office Hours: 8AM - 5PM</span>
                  <span>Sunday - Wekend Day</span>
               </div>
            </div>
         </div>
      </div>
   </div>

   <div className="body-overlay"></div>
   {/* <!-- offcanvas area end --> */}
</>
  )
}

export default Header