import React from 'react'
import { useEffect } from 'react'
// import jQuery from 'jquery'
import { Link } from 'react-router-dom';
function Header() {

   
   useEffect(() => {
      const btn = document.querySelector('.offcanvas-open-btn')
      const overlayBtn = document.querySelector('.offcanvas__close-btn')
      btn.addEventListener('click', () => {
         const menu = document.querySelector('.offcanvas__area')
         menu.classList.toggle('offcanvas-opened')
         const overlay = document.querySelector('.body-overlay')
         overlay.classList.toggle('opened')
      })
      overlayBtn.addEventListener('click', () => {
         const menu = document.querySelector('.offcanvas__area')
         menu.classList.toggle('offcanvas-opened')
         const overlay = document.querySelector('.body-overlay')
         overlay.classList.toggle('opened')
      })
      const navBtn = document.querySelectorAll('.drop-down')
      navBtn.forEach((item) => {
         item.addEventListener('click', () => {
            const dropItems = document.querySelectorAll('.drop-items')
            dropItems.forEach((item1)=>{
               item1.classList.remove('toggle-drop-nav')
               
            })
            const abc = item.children[1];
            abc.classList.add('toggle-drop-nav')
         })
      })
   }, [])

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
                                       <li><Link to="/login"><i className="fal fa-user"></i>Login</Link></li>
                                       <li>|</li>
                                       <li><Link to="/resister">Register</Link></li>

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
                                    <Link to={`${process.env.PUBLIC_URL}/`}>
                                       <img src={`${process.env.PUBLIC_URL}/assets/img/logo/logo.png`} alt="logo" />
                                    </Link>
                                 </div>
                                 <div className="tp-header-attach d-none d-xl-block">
                                    <div className="tp-header__attach d-flex align-items-center">
                                       {/* <div className="tp-header__category d-none d-xl-block">
                                          <nav>
                                             <ul>
                                                <li>
                                                   <Link to={`${process.env.PUBLIC_URL}/offer`} className="cat-menu d-flex align-items-center">
                                                      <span><img src={`${process.env.PUBLIC_URL}/assets/img/offer.webp`} alt="offer" /></span>
                                                   </Link>
                                                   <ul className="cat-submenu">
                                                <li><Link to="course-details.html">English Learning</Link></li>
                                                <li><Link to="course-details.html">Web Development</Link></li>
                                                <li><Link to="course-details.html">Logo Design</Link></li>
                                                <li><Link to="course-details.html">Motion Graphics</Link></li>
                                                <li><Link to="course-details.html">Video Edition</Link></li>
                                             </ul>
                                                </li>
                                             </ul>
                                          </nav>
                                       </div> */}
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
                              <div className="main-menu">
                                 <nav id="mobile-menu">
                                    <ul>
                                       <li className="has-dropdown">
                                          <Link to="#">Services</Link>
                                          <ul className="submenu">
                                             <li><Link to="/service/coursework-help">Coursework Help</Link></li>
                                             <li><Link to="/service/essay-help">Essay Help</Link></li>
                                             <li><Link to="/service/thesis-help">Thesis Help</Link></li>
                                             <li><Link to="/service/case-study-help">Case Study Help</Link></li>
                                             <li><Link to="/service/referencing-style-help">Referencing Style Help</Link></li>
                                             <li><Link to="#">Proofreading Services</Link></li>
                                             <li><Link to="#">Rewrite Services</Link></li>
                                             <li><Link to="/service/assessment-help">Assessment Help</Link></li>
                                          </ul>
                                       </li>

                                       <li className="has-dropdown">
                                          <Link to="#">Assignment</Link>
                                          <ul className="submenu">
                                             <li><Link to="/assignment/nursing-assignment-help">Nursing Assignment Helper</Link></li>
                                             <li><Link to="/assignment/management-assignment-help">Management Assignment Helper</Link></li>
                                             <li><Link to="/assignment/marketing-assignment-help">Marketing Assignment Helper</Link></li>
                                             <li><Link to="/assignment/programming-assignment-help">Programming Assignment Helper</Link></li>
                                             <li><Link to="/assignment/finance-assignment-help">Finance Assignment Helper</Link></li>
                                             <li><Link to="/assignment/accounting-assignment-help">Accounting Assignment Helper</Link></li>
                                             <li><Link to="/assignment/law-assignment-help">Law Assignment Helper</Link></li>
                                             <li><Link to="/assignment/information-technology-assignment-help">Computer Science Assignment</Link></li>
                                             <li><Link to="/assignment/statistics-assignment-help">Statistics Assignment Helper</Link></li>
                                             <li><Link to="/assignment/engineering-assignment-help">Engineering Assignment Helper</Link></li>
                                             <li><Link to="/assignment/science-assignment-help">Science Assignment Helper</Link></li>
                                             <li><Link to="/assignment/tafe-assignment-help">TAFE Assignment Helper</Link></li>
                                             <li><Link to="/assignment/economics-assignment-help">Economics Assignment Helper</Link></li>
                                          </ul>
                                       </li>
                                       <li className="has-dropdown">
                                          <Link to="#">Dissertation</Link>
                                          <ul className="submenu">
                                             <li><Link to="/dissertation/dissertation-help">Dissertation Proposal</Link></li>
                                             <li><Link to="/dissertation/dissertation-help">Dissertation Writing</Link></li>
                                             <li><Link to="/dissertation/dissertation-help">Dissertation Experts</Link></li>
                                             <li><Link to="/">Research Writing</Link></li>
                                             <li><Link to="/dissertation/dissertation-help">Dissertation Proofreding</Link></li>
                                             <li><Link to="/dissertation/thesis-help">Thesis Writing</Link></li>
                                             <li><Link to="/dissertation/law-assignment-help">Law Dissertation</Link></li>
                                             <li><Link to="/dissertation/nursing-assignment-help">Nursing Dissertation</Link></li>
                                             <li><Link to="/dissertation/accounting-assignment-help">Accounting Dissertation</Link></li>
                                             <li><Link to="/dissertation/finance-assignment-help">Finance Dissertation</Link></li>
                                             <li><Link to="/dissertation/economics-assignment-help">Economics Dissertation</Link></li>
                                             <li><Link to="/dissertation/statistics-assignment-help">Statistics Dissertation</Link></li>
                                             <li><Link to="/dissertation/science-assignment-help">Chemistry Dissertation</Link></li>
                                          </ul>
                                       </li>
                                       <li className="has-dropdown">
                                          <Link to="#">Exam Quiz</Link>
                                          <ul className="submenu">
                                             <li><Link to="/quiz/exam-and-quiz-help">Accounting Exam Quiz</Link></li>
                                             <li><Link to="/quiz/exam-and-quiz-help">Finance Exam Quiz</Link></li>
                                             <li><Link to="/quiz/exam-and-quiz-help">Statisics Exam Quiz</Link></li>
                                             <li><Link to="/quiz/exam-and-quiz-help">Economics Exam Quiz</Link></li>
                                             <li><Link to="/quiz/exam-and-quiz-help">Biology Exam Quiz</Link></li>
                                             <li><Link to="/quiz/exam-and-quiz-help">History Exam Quiz</Link></li>
                                             <li><Link to="/quiz/exam-and-quiz-help">Maths Exam Quiz</Link></li>
                                          </ul>
                                       </li>
                                       <li>
                                          <Link to="/blog">Blog</Link>
                                       </li>
                                       <li>
                                          <Link to="/reviews">Reviews</Link>
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
                                    <Link to="/order" className="tp-btn">
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

   <div id="offerbutton">
<button class="offer"> <Link to="#" className="cat-menu d-flex align-items-center">
                                                <span><img src={`${process.env.PUBLIC_URL}/assets/img/offer.webp`} alt="logo" />
</span>
                                             </Link></button>
</div>  
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
                           <img src={`${process.env.PUBLIC_URL}/assets/img/logo/logo.png`} alt="logo" />
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
                  <div className="mobile-menu fix mb-40 ">
                     <ul className='mobile-nav'>
                        <li className='drop-down'>
                           <button type='button' className='nav-toggle-btn plus-icon'>SERVICES</button>
                           <ul className='drop-items'>
                              <li><Link to="/service/coursework-help">Coursework Help</Link></li>
                              <li><Link to="/service/essay-help">Essay Help</Link></li>
                              <li><Link to="/service/thesis-help">Thesis Help</Link></li>
                              <li><Link to="/service/case-study-help">Case Study Help</Link></li>
                              <li><Link to="/service/referencing-style-help">Referencing Style Help</Link></li>
                              <li><Link to="#">Proofreading Services</Link></li>
                              <li><Link to="#">Rewrite Services</Link></li>
                              <li><Link to="/service/assessment-help">Assessment Help</Link></li>
                           </ul>
                        </li>
                        <li className='drop-down'>
                           <button type='button' className='nav-toggle-btn plus-icon'>ASSIGNMENTS</button>
                           <ul className='drop-items'>
                              <li><Link to="/assignment/nursing-assignment-help">Nursing Assignment Helper</Link></li>
                              <li><Link to="/assignment/management-assignment-help">Management Assignment Helper</Link></li>
                              <li><Link to="/assignment/marketing-assignment-help">Marketing Assignment Helper</Link></li>
                              <li><Link to="/assignment/programming-assignment-help">Programming Assignment Helper</Link></li>
                              <li><Link to="/assignment/finance-assignment-help">Finance Assignment Helper</Link></li>
                              <li><Link to="/assignment/accounting-assignment-help">Accounting Assignment Helper</Link></li>
                              <li><Link to="/assignment/law-assignment-help">Law Assignment Helper</Link></li>
                              <li><Link to="/assignment/information-technology-assignment-help">Computer Science Assignment</Link></li>
                              <li><Link to="/assignment/statistics-assignment-help">Statistics Assignment Helper</Link></li>
                              <li><Link to="/assignment/engineering-assignment-help">Engineering Assignment Helper</Link></li>
                              <li><Link to="/assignment/science-assignment-help">Science Assignment Helper</Link></li>
                              <li><Link to="/assignment/tafe-assignment-help">TAFE Assignment Helper</Link></li>
                              <li><Link to="/assignment/economics-assignment-help">Economics Assignment Helper</Link></li>
                           </ul>
                        </li>
                        <li className='drop-down'>
                           <button type='button' className='nav-toggle-btn plus-icon'>DISSERTATION</button>
                           <ul className='drop-items'>
                              <li><Link to="/dissertation/dissertation-help">Dissertation Proposal</Link></li>
                              <li><Link to="/dissertation/dissertation-help">Dissertation Writing</Link></li>
                              <li><Link to="/dissertation/dissertation-help">Dissertation Experts</Link></li>
                              <li><Link to="/">Research Writing</Link></li>
                              <li><Link to="/dissertation/dissertation-help">Dissertation Proofreding</Link></li>
                              <li><Link to="/dissertation/thesis-help">Thesis Writing</Link></li>
                              <li><Link to="/dissertation/law-assignment-help">Law Dissertation</Link></li>
                              <li><Link to="/dissertation/nursing-assignment-help">Nursing Dissertation</Link></li>
                              <li><Link to="/dissertation/accounting-assignment-help">Accounting Dissertation</Link></li>
                              <li><Link to="/dissertation/finance-assignment-help">Finance Dissertation</Link></li>
                              <li><Link to="/dissertation/economics-assignment-help">Economics Dissertation</Link></li>
                              <li><Link to="/dissertation/statistics-assignment-help">Statistics Dissertation</Link></li>
                              <li><Link to="/dissertation/science-assignment-help">Chemistry Dissertation</Link></li>
                           </ul>
                        </li>
                        <li className='drop-down'>
                           <button type='button' className='nav-toggle-btn plus-icon'>EXAM QUIZ</button>
                           <ul className='drop-items'>
                              <li><Link to="/quiz/exam-and-quiz-help">Accounting Exam Quiz</Link></li>
                              <li><Link to="/quiz/exam-and-quiz-help">Finance Exam Quiz</Link></li>
                              <li><Link to="/quiz/exam-and-quiz-help">Statisics Exam Quiz</Link></li>
                              <li><Link to="/quiz/exam-and-quiz-help">Economics Exam Quiz</Link></li>
                              <li><Link to="/quiz/exam-and-quiz-help">Biology Exam Quiz</Link></li>
                              <li><Link to="/quiz/exam-and-quiz-help">History Exam Quiz</Link></li>
                              <li><Link to="/quiz/exam-and-quiz-help">Maths Exam Quiz</Link></li>
                           </ul>
                        </li>
                        <li>
                           <Link to="/blog" className='nav-toggle-btn'>BLOG</Link>
                        </li>
                        <li>
                           <Link to="/reviews" className='nav-toggle-btn'>REVIEWS</Link>
                        </li>
                     </ul>
                  </div>


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