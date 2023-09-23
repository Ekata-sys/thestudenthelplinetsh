import React from 'react'
import Form from '../Form'
function Hero() {
  return (
    <>
         <div className="tp-hero__section pt-50 pb-100 theme-bg p-relative fix">
         <div className="container">
            <div className="row">
               <div className="col-lg-7">
                  <div>
                  <img src='./assets/img/au/country-banner.webp' className='fbanimg' alt='banner'/>
                  </div>
                  {/* <div className="tp-hero__content pt-200">
                     <span className="tp-hero__subtitle text-white mb-10">Education Goal</span>
                     <h3 className="tp-hero__title text-white mb-15">Free online courses
                        from the experts.</h3>
                     <p className="text-white mb-45">Presenting Academy, the tech school of the future.</p>
                     <div className="tp-hero__btn-wrappper d-md-flex align-items-center">
                        <div className="hero-btn-1 mr-20 p-relative z-index-1">
                           <a href="course.html" className="tp-btn br-0">
                              <span>Explore Coureses</span>
                              <div className="transition"></div>
                           </a>
                        </div>
                        <div className="hero-btn-2">
                           <a href="https://www.youtube.com/watch?v=vQD4YAgc7PE"
                              className="tp-play-btn d-flex align-items-center popup-video">

                              <i className="arrow_triangle-right"></i>
                              <span>Watch it Now</span>
                           </a>
                        </div>
                     </div>
                     
                  </div> */}
               </div>
               <div className="col-lg-5">
                  <div>
                     {/* <img src="assets/img/hero/hero-img-1.png" alt="hero" /> */}
                     <div className="formback">
                <Form/>
                <br/>
              </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="tp-hero__shapes">
            <div className="tp-hero__shapes-1">
               <img src="assets/img/icons/book-shape.png" alt="" />
            </div>
            <div className="tp-hero__shapes-2">
               <img src="assets/img/icons/circle-shape.png" alt="" />
            </div>
            <div className="tp-hero__shapes-3">
               <img src="assets/img/icons/dots-shapes.png" alt="" />
            </div>
            <div className="tp-hero__shapes-4">
               <img src="assets/img/icons/line-shape.png" alt="" />
            </div>
            <div className="tp-hero__shapes-5">
               <img src="assets/img/icons/lines-shape.png" alt="" />
            </div>
            <div className="tp-hero__shapes-6">
               <img src="assets/img/icons/role-shape.png" alt="" />
            </div>
         </div>
      </div>
    </>
  )
}

export default Hero