import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import Form from '../Form';
import "slick-carousel/slick/slick-theme.css";

export default function OrderNow() {
   var settings = {
      dots: false,
      arrow: false,
      autoplay: true,
      infinite: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      speed: 4000,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [{
         breakpoint: 1199,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3
         }
       },
       {
         breakpoint: 1024,
         settings: {
           slidesToShow: 3,
           slidesToScroll: 3
         }
       },
       {
         breakpoint: 680,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }]
   };
   return (
      <main>
         <div class="breadcrumb__area include-bg pt-200 pb-150 breadcrumb__overlay"
            data-background="assets/img/breadcrumb/breadcrumb-bg.jpg" style={{ backgroundImage: "url(./assets/img/breadcrumb/breadcrumb-bg.jpg)" }}>
            <div class="container">
               <div class="row">
                  <div class="col-xxl-12">
                     <div class="breadcrumb__content p-relative z-index-1">
                        <h3 class="breadcrumb__title">Order Now</h3>
                        <div class="breadcrumb__list">
                           <span><Link to="/">Home</Link></span>
                           <span class="dvdr"><i class="fa-regular fa-angle-right"></i></span>
                           <span>Order-Now</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="signup__area po-rel-z1 pt-100 pb-145 p-relative">
            <div class="container">
               <div class="row">
                  <div class="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
                     <div class="tp-section__title-wrapper text-center mb-55">
                        <h2 class="tp-section__title">Your academic success is our promise</h2>
                        <p className='text-primary'>Book Now With Up To 50% OFF</p>
                     </div>
                  </div>
               </div>
               <div class="row">
                  <div className="col-md-6 col-lg-7 mx-auto pt-4 pb-4 pb-md-0">
                     <h3>Acquire These Benefits With Your ORDER:</h3>
                     <ul className='list-unstyled order-list ps-1'>
                        <li><i class="fa fa-check-circle list-icons" aria-hidden="true"></i>Money-Back Policy</li>
                        <li><i class="fa fa-check-circle list-icons" aria-hidden="true"></i>On-time Delivery of Work</li>
                        <li><i class="fa fa-check-circle list-icons" aria-hidden="true"></i>Free Plagiarism Report Confirming Content Authenticity</li>
                        <li><i class="fa fa-check-circle list-icons" aria-hidden="true"></i>24/7 Customer Assistance to Answer any Queries</li>
                        <li><i class="fa fa-check-circle list-icons" aria-hidden="true"></i>100% Ownership Belonging to the Client</li>
                        <li><i class="fa fa-check-circle list-icons" aria-hidden="true"></i>Confidentiality of Personal Information</li>
                        <li><i class="fa fa-check-circle list-icons" aria-hidden="true"></i>Unlimited Revisions</li>
                        <li><i class="fa fa-check-circle list-icons" aria-hidden="true"></i>500+ Professional Subject Matter Experts</li>
                        <li><i class="fa fa-check-circle list-icons" aria-hidden="true"></i>2M+ Satisfied Students</li>
                        <li><i class="fa fa-check-circle list-icons" aria-hidden="true"></i>Completed 258000+ Orders</li>
                     </ul>
                  </div>
                  <div class="col-md-6 col-lg-5">
                     <div class="sign__wrapper white-bg position-relative p-0">
                        <div class="sign__shape d-none d-md-block">
                           <img class="man-1" src="assets/img/icons/about-shapes.png" alt="" />
                           <img class="man-2" src="assets/img/icons/book-shape.png" alt="" />
                           <img class="circle" src="assets/img/icons/role-shape.png" alt="" />
                           <img class="zigzag" src="assets/img/icons/lines-shape.png" alt="" />
                        </div>
                        <div class="sign__header mb-35">
                        </div>
                        <div class="sign__form formback" style={{ zIndex: "9999" }}>
                           <Form/>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container mt-5 mb-5 news-slider">
            <Slider {...settings}>
               <img className='me-2' src={`${process.env.PUBLIC_URL}/assets/img/news-articles/assignment-help.webp`} width={300} alt="" />
               <img className='me-2' src={`${process.env.PUBLIC_URL}/assets/img/news-articles/business-review.webp`} width={300} alt="" />
               <img className='me-2' src={`${process.env.PUBLIC_URL}/assets/img/news-articles/research-perposal.webp`} width={300} alt="" />
               <img className='me-2' src={`${process.env.PUBLIC_URL}/assets/img/news-articles/assignment-help.webp`} width={300} alt="" />
               <img className='me-2' src={`${process.env.PUBLIC_URL}/assets/img/news-articles/the-europea-business.webp`} width={300} alt="" />
            </Slider>
         </div>
      </main>
   )
}
