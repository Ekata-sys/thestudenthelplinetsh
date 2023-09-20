import React from 'react'
import{Link} from 'react-router-dom'
function Contact() {
  return (
    <>
     <main>

<div className="breadcrumb__area include-bg pt-200 pb-150 breadcrumb__overlay"
   data-background="assets/img/breadcrumb/breadcrumb-bg.jpg">
   <div className="container">
      <div className="row">
         <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
               <h3 className="breadcrumb__title">Contact Us</h3>
               <div className="breadcrumb__list">
                  <span><Link to="#">Home</Link></span>
                  <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                  <span>contact</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

 <section className="contact__area pt-115 pb-120">
   <div className="container">
      <div className="row">
         <div className="col-xxl-7 col-xl-7 col-lg-6">
            <div className="contact__wrapper">
               <div className="section__title-wrapper mb-40">
                  <h2 className="section__title">Get in<span className="yellow-bg yellow-bg-big">touch<img src="assets/img/shape/yellow-bg.png" alt=""/></span></h2>
                  <p>Have a question or just want to say hi? We'd love to hear from you.</p>
               </div>
               <div className="contact__form mb-30">
                  <form action="assets/mail.php" id="contact-form">
                     <div className="row">
                        <div className="col-xxl-6 col-xl-6 col-md-6">
                           <div className="contact__form-input">
                              <input type="text" placeholder="Your Name" name="name"/>
                           </div>
                        </div>
                        <div className="col-xxl-6 col-xl-6 col-md-6">
                           <div className="contact__form-input">
                              <input type="email" placeholder="Your Email" name="email"/>
                           </div>
                        </div>
                        <div className="col-xxl-12">
                           <div className="contact__form-input">
                              <input type="text" placeholder="Subject" name="subject"/>
                           </div>
                        </div>
                        <div className="col-xxl-12">
                           <div className="contact__form-input">
                              <textarea placeholder="Enter Your Message" name="message"></textarea>
                           </div>
                        </div>
                        <div className="col-xxl-12">
                           <div className="contact__btn">
                              <button type="submit" className="tp-btn"><span>Send your message</span> </button>
                           </div>
                        </div>
                     </div>
                  </form>
               </div>
               <div className="contact-response">
                  <p className="ajax-response"></p>
               </div>
            </div>
            <div className="row contact-right">
						   <div className="col-md-4">
						     <div className="inner-b-contact">
							    <img src="https://thestudenthelpline.io/images/contact-1.png" alt=''/>
							    <h4>24 X 7</h4>
								<h5>Support</h5>
							 </div>
						   </div>
						   <div className="col-md-4">
						      <div className="inner-b-contact">
							    <img src="https://thestudenthelpline.io/images/contact-2.png" alt=''/>
							    <h4>100+</h4>
								<h5>Subjects Covered</h5>
							 </div>
						   </div>
						   <div className="col-md-4">
						      <div className="inner-b-contact">
							    <img src="https://thestudenthelpline.io/images/contact-3.png" alt=''/>
							    <h4>2000+</h4>
								<h5>Ph.D Experts</h5>
							 </div>
						   </div>
						</div>
         </div>
         <div className="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1">
            <div className="contact__info white-bg p-relative z-index-1">
               <div className="contact__shape">
                  <img className="contact-shape-1" src="assets/img/contact/contact-shape-1.png" alt=""/>
                  <img className="contact-shape-2" src="assets/img/contact/contact-shape-2.png" alt=""/>
                  <img className="contact-shape-3" src="assets/img/contact/contact-shape-3.png" alt=""/>
               </div>
               <div className="contact__info-inner white-bg">
                  <ul>
                     <li>
                        <div className="contact__info-item d-flex align-items-start mb-35">
                           <div className="contact__info-icon mr-15">
                              <svg className="map" viewBox="0 0 24 24">
                                 <path className="st0" d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z"/>
                                 <circle className="st0" cx="12" cy="10" r="3"/>
                              </svg>
                           </div>
                           <div className="contact__info-text">
                              <h4>Australia</h4>
                              <p><Link target="_blank" to="#">Maypole Crescent 70-80 Upper St Norwich NR2 1LT</Link></p>

                           </div>
                           {/* <div className="contact__info-text">
                              <h4>Canada</h4>
                              <p><Link target="_blank" to="#">90 Park Lawn Rd, Etobicoke - Ontario, Canada PO Box: M8Y 0B6</Link></p>

                           </div>
                           <div className="contact__info-text">
                              <h4>United Kingdom</h4>
                              <p><Link target="_blank" to="#">148 Broadhurst Gardens, London, UK - NW63BH</Link></p>

                           </div>
                           <div className="contact__info-text">
                              <h4>Singapore</h4>
                              <p><Link target="_blank" to="#">08-1518 Block, 467 Hougang Ave 8, Singapore -530467</Link></p>

                           </div> */}
                        </div>
                     </li>
                     <li>
                        <div className="contact__info-item d-flex align-items-start mb-35">
                           <div className="contact__info-icon mr-15">
                              <svg className="mail" viewBox="0 0 24 24">
                                 <path className="st0" d="M4,4h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6C2,4.9,2.9,4,4,4z"/>
                                 <polyline className="st0" points="22,6 12,13 2,6 "/>
                              </svg>
                           </div>
                           <div className="contact__info-text">
                              <h4>Email us directly</h4>
                              <p><Link to="mailto:info@thestudenthelpline.com">info@thestudenthelpline.com</Link></p>
                              <p><Link to="mailto:info@helpassignment.com.au">info@helpassignment.com.au</Link></p>
                           </div>
                        </div>
                     </li>
                     <li>
                        <div className="contact__info-item d-flex align-items-start mb-35">
                           <div className="contact__info-icon mr-15">
                              <svg className="call" viewBox="0 0 24 24">
                                 <path className="st0" d="M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6  c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1  L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C21.3,15,22,15.9,22,16.9z"/>
                                 </svg>
                           </div>
                           <div className="contact__info-text">
                              <h4>Phone</h4>
                              <p><Link to="tel:+61 4888 96 118">+61 4888 96 118</Link></p>
                              <p><Link to="tel:+65 8417 1433">+65 8417 1433</Link></p>
                              <p><Link to="tel:+1 916 533 9620">+1 916 533 9620</Link></p>
                              <p><Link to="tel:+44 7418 343403">+44 7418 343403</Link></p>
                           </div>
                        </div>
                     </li>
                  </ul>
                  <div className="contact__social pl-30">
                     <h4>Follow Us</h4>
                     <ul>
                        <li><Link to="https://www.facebook.com/TheStudentHelpline/" className="fb" ><i className="social_facebook"></i></Link></li>
                        <li><Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Fthestudent_help" className="tw" ><i className="social_twitter"></i></Link></li>
                        <li><Link to="https://www.pinterest.com.au/thestudenthelpline/" className="pin" ><i className="social_pinterest"></i></Link></li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>


<div className="tp-contact-map">
   <div className="container-fluid p-0">
      {/* <div className="tp-map-height">
         <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d8189.17205082922!2d90.42451837459143!3d23.89452795954588!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1665830360467!5m2!1sen!2sbd" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title=''></iframe>
      </div> */}
   </div>
</div>
   
</main>

    </>
  )
}

export default Contact