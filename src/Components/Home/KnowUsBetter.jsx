import React from 'react'

function KnowUsBetter() {
  return (
    <>
      <div className="tp-about__section pt-120 pb-90">
         <div className="container">
            <div className="row align-items-center">
               <div className="col-lg-7">
                  <div className="tp-about__img-wrapper d-md-flex p-relative">
                     <div className="tp-about__img-large w-img mb-30">
                        <img src="assets/img/about/who-r-img.webp" alt=""/>
                     </div>
                     <div className="tp-about__img-sm w-img mb-30">
                        <img src="assets/img/about/about-2.jpg" alt=""/>
                     </div>

                     <div className="tp-about-shapes">
                        <div className="tp-about__shapes-1">
                           <img src="assets/img/icons/about-shapes.png" alt=""/>
                           <div className="tp-about__shapes-2 ">
                              <img src="assets/img/icons/ring-shape.png" alt=""/>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className="col-lg-5">
                  <div className="tp-section__title-wrapper">
                     <h3 className="tp-section__title mb-15">Know Us Better</h3>
                     <p className="mb-40">Lorem ipsum dolor sit amet, consectetur aliqua adipiscing
                        elit, sed do eiumod tempor.</p>

                     <div className="tp-about__feature-list mb-40">
                        <ul>
                           <li><span><i className="icon_check"></i></span>Upskill your organization.</li>
                           <li><span><i className="icon_check"></i></span>Access more then 100K online courses</li>
                           <li><span><i className="icon_check"></i></span>Access more then 1M online Video</li>
                        </ul>
                     </div>
                     <div className="tp-hero__btn-wrappper">
                        <a href="about-us.html" className="tp-border-btn br-0">
                           <span>Get Started</span>
                           <div className="transition"></div>
                        </a>
                     </div>
                  </div>
               </div>

            </div>

         </div>
      </div>
    </>
  )
}

export default KnowUsBetter