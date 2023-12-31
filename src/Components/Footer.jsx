import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
   <>
   
   {/* <!-- footer area start --> */}
   <footer>
      <div className="footer__area grey-bg">
         <div className="container">
            <div className="footer__top ">
               <div className="row">
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-6">
                     <div className="footer__widget mb-50 footer-col-1">
                        <div className="footer__widget-logo mb-30">
                        <h3 className="footer__widget-title">GET TO KNOW US</h3>
                        </div>
                        <div className="footer__widget-content">
                        <ul>
                           <li><Link to="/howitwork">How It Works</Link></li>
                           <li><Link to="/contact">Contact Us</Link></li>
                              <li><Link to="/about">About Us</Link></li>
                              <li><Link to="/review">Reviews</Link></li>
                              <li><Link to="/faqs">FAQs</Link></li>
                              <li><Link to="/blog">Blog</Link></li>
                              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                              <li><Link to="/refund-policy">Refund Policy</Link></li>
                              <li><Link to="/revision-policy">Revision Policy</Link></li>
                              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
                              <li><Link to="/order-now">Order Now</Link></li>
                              <li><Link to="/offer">Our Offers</Link></li>
                              <li><Link to="/experts">Experts</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-2 col-xl-2 col-lg-3 col-6">
                     <div className="footer__widget mb-50 footer-col-2">
                        <h3 className="footer__widget-title">SERVICES</h3>
                        <div className="footer__widget-content">
                           <ul>
                           <li><Link to="/">Assignment</Link></li>
                           <li><Link to="/au/dissertation-help">Dissertation</Link></li>
                              <li><Link to="/au/coursework-help.php">Coursework</Link></li>
                              <li><Link to="/">Homework</Link></li>
                              <li><Link to="/au/thesis-help">Thesis</Link></li>
                              <li><Link to="/au/essay-help">Essay</Link></li>
                              <li><Link to="/au/tafe-assignment-help">Tafe</Link></li>
                              <li><Link to="/">Proofreading</Link></li>
                              <li><Link to="/au/case-study-help">Case Studies</Link></li>
                              <li><Link to="/">Research Paper</Link></li>
                              <li><Link to="/au/referencing-style-help">Referencing</Link></li>
                              <li><Link to="/sample">Free Samples</Link></li>
                            
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-6">
                     <div className="footer__widget mb-50 footer-col-3">
                        <h3 className="footer__widget-title">Courses</h3>
                        <div className="footer__widget-content">
                        <ul>
                           <li><Link to="/au/information-technology-assignment-help">Computer Science</Link></li>
                           <li><Link to="/au/accounting-assignment-help">Accounting</Link></li>
                              <li><Link to="/au/economics-assignment-help">Economics</Link></li>
                              <li><Link to="/au/management-assignment-help">Management</Link></li>
                              <li><Link to="/au/nursing-assignment-help">Nursing</Link></li>
                              <li><Link to="/au/marketing-assignment-help">Marketing</Link></li>
                              <li><Link to="/au/finance-assignment-help">Finance</Link></li>
                              <li><Link to="/au/statistics-assignment-help">Statistics</Link></li>
                              <li><Link to="/au/law-assignment-help">Law</Link></li>
                              <li><Link to="/au/information-technology-assignment-help">Information Technology</Link></li>
                              <li><Link to="/">University</Link></li>
                              <li><Link to="/au/programming-assignment-help">Programming</Link></li>
                              <li><Link to="/au/engineering-assignment-help">Engineering</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-6">
                  <div className="footer__widget mb-50 footer-col-1">
                        <div className="footer__widget-logo mb-30">
                           <Link href="index.html"><img src="assets/img/logo/logo.png" alt="" /></Link>
                        </div>
                        <div className="footer__widget-content">
                        <p><span className='px-2'><i className="fa-solid fa-envelope fa-beat-fade"></i></span><a className="mail-to" href="mailto:info@thestudenthelpline.com">info@thestudenthelpline.com</a></p>
                        <p><span className='px-2'><i className="fa-solid fa-phone fa-beat-fade"></i></span><a href="tel:+61488896118">+61 4888 96 118</a></p>
                           <div className="footer__social">
                              <span><Link to="https://www.facebook.com/TheStudentHelpline/"><i className="fab fa-facebook-f"></i></Link></span>
                              <span><Link to="https://www.youtube.com/channel/UCMg7dgCXeYwPsNRCyoYFjlA" className="yt"><i className="fab fa-youtube"></i></Link></span>
                              <span><Link to="https://twitter.com/i/flow/login?redirect_after_login=%2Fthestudent_help" className="tw"><i className="fab fa-twitter"></i></Link></span>
                              <span><Link to="https://www.pinterest.com.au/thestudenthelpline/" className="yt"><i className="fab fa-pinterest"></i></Link></span>
                              <span><Link to="https://www.instagram.com/thestudenthelplineofficial/" className="tw"><i className="fab fa-instagram"></i></Link></span>
                           </div>
                           
                        </div>
                     </div>
                     <div className="footer__widget mb-50 footer-col-4">
                        <h3 className="footer__widget-title">Special Offers</h3>
                        <div className="footer__widget-content">
                           <div className="footer__subscribe">
                              <p>Subscribe to avail our special offers</p>
                              <form action="#">
                                 <div className="footer__subscribe-box">
                                    <div className="footer__subscribe-input">
                                       <input type="email" placeholder="Email address" />
                                    </div>
                                    <button className="footer-sub-btn" type="submit">Subscribe</button>
                                 </div>
                              </form>
                           </div>
                        </div>
                     </div>
                  
                  </div>
               </div>
            </div>

            
	   <div className="container">
		   <p><b>Disclaimer:</b> The reference papers offered by The Student Helpline act as sample papers for students and are not to be presented as it is. These papers are only meant to be utilized for study and reference purposes.</p>
	   </div>
	   <div className="text-center"><img src="https://thestudenthelpline.io/images/card.webp" alt=''/></div>
	

            <div className="footer__bottom">
               <div className="row">
                  <div className="col-12">
                     <div className="footer__copyright text-center">
                        <p> <Link
                              to="#" target="_blank">Copyright © 2010-2023 The Student Helpline All rights reserved</Link>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
   {/* <!-- footer area end --> */}
</>
  )
}

export default Footer