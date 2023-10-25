import React from 'react'
import {Link} from 'react-router-dom'
function SignUp() {
  return (
   <>
      <main>

<div className="breadcrumb__area include-bg pt-50 pb-50 breadcrumb__overlay"
   data-background="assets/img/breadcrumb/breadcrumb-bg-3.jpg">
   <div className="container">
      <div className="row">
         <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
               <h3 className="breadcrumb__title">Sign In</h3>
               <div className="breadcrumb__list">
                  <span><Link to=">#">Home</Link></span>
                  <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                           <span><Link to="/au">Australia</Link></span>
                  <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                  <span>Sign-in</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>




   <section className="signup__area po-rel-z1 pt-100 pb-145 p-relative fix">
      <div className="sign__shape">
         <img className="man-1" src="assets/img/icons/about-shapes.png" alt=""/>
         <img className="man-2" src="assets/img/icons/book-shape.png" alt=""/>
         <img className="circle" src="assets/img/icons/role-shape.png" alt=""/>
         <img className="zigzag" src="assets/img/icons/ring-2.png" alt=""/>
      </div>
      <div className="container">
         <div className="row">
            <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
               <div className="tp-section__title-wrapper text-center mb-55">
                  <h2 className="tp-section__title">Create a free <br/>  Account</h2>
                  <p>I'm a subhead that goes with a story.</p>
               </div>
            </div>
         </div>
         <div className="row">
            <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
               <div className="sign__wrapper white-bg">
                  <div className="sign__header mb-35">
                     <div className="sign__in text-center">
                        <p> <span>........</span> Or, <Link to=">sign-up.html">sign up</Link> with your email<span> ........</span> </p>
                     </div>
                  </div>
                  <div className="sign__form">
                     <form action="#">
                        <div className="sign__input-wrapper mb-25">
                           <h5>Full Name</h5>
                           <div className="sign__input">
                              <input type="text" placeholder="Full name"/>
                              <i className="fal fa-user"></i>
                           </div>
                        </div>
                        <div className="sign__input-wrapper mb-25">
                           <h5>Work email</h5>
                           <div className="sign__input">
                              <input type="text" placeholder="e-mail address"/>
                              <i className="fal fa-envelope"></i>
                           </div>
                        </div>
                        <div className="sign__input-wrapper mb-25">
                           <h5>Password</h5>
                           <div className="sign__input">
                              <input type="text" placeholder="Password"/>
                              <i className="fal fa-lock"></i>
                           </div>
                        </div>
                        <div className="sign__input-wrapper mb-10">
                           <h5>Re-Password</h5>
                           <div className="sign__input">
                              <input type="text" placeholder="Re-Password"/>
                              <i className="fal fa-lock"></i>
                           </div>
                        </div>
                        <div className="sign__action d-flex justify-content-between mb-30">
                           <div className="sign__agree d-flex align-items-center">
                              <input className="m-check-input" type="checkbox" id="m-agree"/>
                              <label className="m-check-label" for="m-agree">I agree to the <Link to=">#">Terms & Conditions</Link>
                                 </label>
                           </div>
                        </div>
                        <button className="e-btn w-100"> <span></span> Sign Up</button>
                        <div className="sign__new text-center mt-20">
                           <p>Already have a Account ? <Link to=">sign-in.html"> Sign In</Link></p>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </section>

<div className="signup__area po-rel-z1 pt-100 pb-145 p-relative d-none">
   <div className="sign__shape">
      <img className="man-1" src="assets/img/icons/about-shapes.png" alt=""/>
      <img className="man-2" src="assets/img/icons/book-shape.png" alt=""/>
      <img className="circle" src="assets/img/icons/role-shape.png" alt=""/>
      <img className="zigzag" src="assets/img/icons/lines-shape.png" alt=""/>
   </div>
   <div className="container">
      <div className="row">
         <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2">
            <div className="tp-section__title-wrapper text-center mb-55">
               <h2 className="tp-section__title">Sign in to <br/> recharge direct.</h2>
               <p>it you don't have an account you can <Link to=">#">Register here!</Link></p>
            </div>
         </div>
      </div>
      <div className="row">
         <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div className="sign__wrapper white-bg">
               <div className="sign__header mb-35">
                  <div className="sign__in text-center">
                     <p> <span>........</span><Link to=">sign-in.html">sign in</Link> with your email<span>
                           ........</span> </p>
                  </div>
               </div>
               <div className="sign__form">
                  <form action="#">
                     <div className="sign__input-wrapper mb-25">
                        <h5>Work email</h5>
                        <div className="sign__input">
                           <input type="text" placeholder="e-mail address"/>
                           <i className="fal fa-envelope"></i>
                        </div>
                     </div>
                     <div className="sign__input-wrapper mb-10">
                        <h5>Password</h5>
                        <div className="sign__input">
                           <input type="text" placeholder="Password"/>
                           <i className="fal fa-lock"></i>
                        </div>
                     </div>
                     <div className="sign__action d-sm-flex justify-content-between mb-30">
                        <div className="sign__agree d-flex align-items-center">
                           <input className="m-check-input" type="checkbox" id="m-agree"/>
                           <label className="m-check-label" for="m-agree">Keep me signed in
                           </label>
                        </div>
                        <div className="sign__forgot">
                           <Link to=">#">Forgot your password?</Link>
                        </div>
                     </div>
                     <button className="e-btn  w-100"> <span></span> Sign In</button>
                     <div className="sign__new text-center mt-20">
                        <p>New to Markit? <Link to=">sign-up.html">Sign Up</Link></p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>


   
</main>

   </>
  )
}

export default SignUp