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
                           <Link href="index.html"><img src="assets/img/logo/logo.png" alt="" /></Link>
                        </div>
                        <div className="footer__widget-content">
                           <p>Aut cum mollitia reprehenderit.
                              Eos cumque dicta adipisci amet
                              architecto culpa.</p>
                           <div className="footer__social">
                              <span><Link to="#"><i className="fab fa-facebook-f"></i></Link></span>
                              <span><Link to="#" className="yt"><i className="fab fa-youtube"></i></Link></span>
                              <span><Link to="#" className="tw"><i className="fab fa-twitter"></i></Link></span>
                           </div>
                           
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-2 col-xl-2 col-lg-3 col-6">
                     <div className="footer__widget mb-50 footer-col-2">
                        <h3 className="footer__widget-title">GET TO KNOW US</h3>
                        <div className="footer__widget-content">
                           <ul>
                           <li><Link to="#">How It Works</Link></li>
                           <li><Link to="#">Contact Us</Link></li>
                              <li><Link to="#">About Us</Link></li>
                              <li><Link to="#">Reviews</Link></li>
                              <li><Link to="#">FAQs</Link></li>
                              <li><Link to="#">Blog</Link></li>
                              <li><Link to="#">Privacy Policy</Link></li>
                              <li><Link to="#">Refund Policy</Link></li>
                              <li><Link to="#">Revision Policy</Link></li>
                              <li><Link to="#">Terms & Conditions</Link></li>
                              <li><Link to="#">Order Now</Link></li>
                              <li><Link to="#">Our Offers</Link></li>
                              <li><Link to="#">Experts</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xxl-3 col-xl-3 col-lg-3 col-6">
                     <div className="footer__widget mb-50 footer-col-3">
                        <h3 className="footer__widget-title">Courses</h3>
                        <div className="footer__widget-content">
                           <ul>
                              <li><Link to="#">Masters Degree</Link></li>
                              <li><Link to="#">Post GraduateU</Link></li>
                              <li><Link to="#">Ndergraduate</Link></li>
                              <li><Link to="#">Engineering</Link></li>
                              <li><Link to="#">Ph.D Degree</Link></li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  <div className="col-xxl-4 col-xl-4 col-lg-3 col-md-6">
                     <div className="footer__widget mb-50 footer-col-4">
                        <h3 className="footer__widget-title">Sign Up for Our Newsletter</h3>
                        <div className="footer__widget-content">
                           <div className="footer__subscribe">
                              <p>Receive weekly newsletter with educational,
                                 popular books and much more!</p>
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
                     <div className="footer__widget mb-50 footer-col-1">
                        <div className="footer__widget-logo mb-30">
                           <Link href="index.html"><img src="assets/img/logo/logo.png" alt="" /></Link>
                        </div>
                        <div className="footer__widget-content">
                           <p>Aut cum mollitia reprehenderit.
                              Eos cumque dicta adipisci amet
                              architecto culpa.</p>
                           <div className="footer__social">
                              <span><Link to="#"><i className="fab fa-facebook-f"></i></Link></span>
                              <span><Link to="#" className="yt"><i className="fab fa-youtube"></i></Link></span>
                              <span><Link to="#" className="tw"><i className="fab fa-twitter"></i></Link></span>
                           </div>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer__bottom">
               <div className="row">
                  <div className="col-12">
                     <div className="footer__copyright text-center">
                        <p> © 2022 Tutorgo, All Rights Reserved. Design By <Link
                              to="https://themeforest.net/user/theme_pure/portfolio" target="_blank">Theme Pure</Link>
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