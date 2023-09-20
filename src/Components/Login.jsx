import React from 'react'
import {Link} from 'react-router-dom'
function Login() {
  return (
  <>
  <section>
  <main>


<div className="breadcrumb__area include-bg pt-200 pb-150 breadcrumb__overlay"
   data-background="assets/img/breadcrumb/breadcrumb-bg.webp">
   <div className="container">
      <div className="row">
         <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
               <h3 className="breadcrumb__title">Sign In</h3>
               <div className="breadcrumb__list">
                  <span><Link to="#">Home</Link></span>
                  <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                  <span>Sign-in</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

<div className="signup__area po-rel-z1 pt-100 pb-145 p-relative">
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
               <h2 className="tp-section__title">Sign in to <br/> order direct.</h2>
               <p>it you don't have an account you can <Link to="#">Register here!</Link></p>
            </div>
         </div>
      </div>
      <div className="row">
         <div className="col-xxl-6 offset-xxl-3 col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
            <div className="sign__wrapper white-bg">
               <div className="sign__header mb-35">
                  <div className="sign__in text-center">
                     <p> <span>........</span><Link to="sign-in.html">sign in</Link> with your email<span>
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
                           <Link to="#">Forgot your password?</Link>
                        </div>
                     </div>
                     <button className="e-btn  w-100"> <span></span> Sign In</button>
                     <div className="sign__new text-center mt-20">
                        <p>New to Markit? <Link to="sign-up.html">Sign Up</Link></p>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>

<div className='container'>
		<div className='row'>
			<div className='col-lg-4 col-md-6 col-sm-12 col-12'>
<div className='login-left'>
<img src="assets/img/login-img.webp" alt=''/>
</div>
			</div>
			<div className='col-lg-8 col-md-6 col-sm-12 col-12'>

            <div className="login-right">
					<h3>1,50,000+ <strong>STUDENTS</strong></h3>
					<p> TRUSTED US FOR ASSIGNMENT HELP</p>					
                    {/* <a className="btn-s" href="https://thestudenthelpline.io/login.php"> Order Without Login </a> */}
				
			   </div>
            <div className="row login-sec">
					   <div className="col-sm-4">
						 <span><img src="assets/img/l-1.webp" alt=''/></span>
						 <p>One Time Delivery</p>
					   </div>
					   
					   <div className="col-sm-4">
						 <span><img src="assets/img/l-2.webp" alt=''/></span>
						 <p>24 X 7 Live Help</p>
					   </div>
					   
					   <div className="col-sm-4">
						 <span><img src="assets/img/l-3.webp" alt=''/></span>
						 <p>Services For All Subjects</p>
					   </div>
					   
					   <div className="col-sm-4">
						 <span><img src="assets/img/l-4.webp" alt=''/></span>
						 <p>5,137 PHD Experts</p>
					   </div>
					   
					   <div className="col-sm-4">
						 <span><img src="assets/img/l-5.webp" alt=''/></span>
						 <p>Plagiarism Free Work</p>
					   </div>
					   
					   <div className="col-sm-4">
						 <span><img src="assets/img/l-6.webp" alt=''/></span>
						 <p>Best Price Guarantee</p>
					   </div>
						
					</div>
			</div>
		</div>
	 </div>

</main>
  </section>
  </>
  )
}

export default Login