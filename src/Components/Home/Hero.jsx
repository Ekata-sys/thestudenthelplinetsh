import React from 'react'
import Form from '../Form'
import Slider from "react-slick"
function Hero() {
    var brand = {
        autoplay: true,
		autoplaySpeed: 4000,
		dots: false,
		arrows: false,
		infinite: true,
		speed: 300,
		slidesToShow: 6,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,

				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
        ]
      };
   
  return (
    <>
      {/* <!-- hero section  --> */}
      <div className="tp-hero__section pt-130 theme-bg p-relative fix">
         <div className="container">
            <div className="row">
               <div className="col-lg-7">
                  <div>
                  <img src='./assets/img/banner-img.webp' className='fbanimg' alt='banner'/>
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
                  <div className="tp-hero__img">
                     {/* <img src="assets/img/hero/hero-img-1.png" alt="hero" /> */}
                     <div className='form d-flex justify-content-center pb-5 w-74 ps-0 ps-lg-5 ms-0 ms-lg-5'>
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
      {/* <!-- hero section end  --> */}

{/* 
      <!-- brnad section start  --> */}
      <div className="tp-brand__section">
         <div className="container">
            <div className="row justify-content-center">
               <div className="col-lg-12">
                  <div className="tp-brand__box white-bg pt-40">
                     <div className="row">
                        <div className="col-xl-4 col-md-6">
                           <h3>Tutorgo</h3>
                           <p>Join over 1490+ partners around the world</p>
                        </div>
                        <div className="col-xl-4 col-md-6">
                           <span>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fas fa-star"></i>
                              <i className="fal fa-star"></i>
                           </span>
                           <p>4.5 Star Rating (20+ Review)</p>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-12">
                           <div className="tp-brand_slider">
                        <Slider {...brand}>
                            
                              <div className="tp-brand__item">
                                 <img src="assets/img/brand/brand-1.png" alt="" />
                              </div>
                              <div className="tp-brand__item">
                                 <img src="assets/img/brand/brand-2.png" alt="" />
                              </div>
                              <div className="tp-brand__item">
                                 <img src="assets/img/brand/brand-3.png" alt="" />
                              </div>
                              <div className="tp-brand__item">
                                 <img src="assets/img/brand/brand-4.png" alt="" />
                              </div>
                              <div className="tp-brand__item">
                                 <img src="assets/img/brand/brand-5.png" alt="" />
                              </div>
                              <div className="tp-brand__item">
                                 <img src="assets/img/brand/brand-6.png" alt="" />
                              </div>
                              <div className="tp-brand__item">
                                 <img src="assets/img/brand/brand-2.png" alt="" />
                              </div>
                               </Slider>
                           </div>
                          
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- brnad section end  --> */}
    </>
  )
}

export default Hero