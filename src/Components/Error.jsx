import React from 'react'
import {Link} from 'react-router-dom'
function Error() {
  return (
   <>
    <main>
       {/* <!-- breadcrumb area start --> */}
       <div className="breadcrumb__area include-bg pt-50 pb-50 breadcrumb__overlay"
       data-background="assets/img/breadcrumb/breadcrumb-bg.jpg" alt=""/>
       <div className="container">
          <div className="row">
             <div className="col-xxl-12">
                <div className="breadcrumb__content p-relative z-index-1">
                   <h3 className="breadcrumb__title">404</h3>
                   <div className="breadcrumb__list">
                      <span><Link to="#">Home</Link></span>
                      <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                      <span>404</span>
                   </div>
                </div>
             </div>
          </div>
       </div>

    {/* <!-- breadcrumb area end --> */}

      {/* <!-- error area start --> */}
      <section className="error__area pt-60 pb-90">
         <div className="container">
            <div className="row">
               <div className="col-xxl-8 offset-xxl-2 col-xl-8 offset-xl-2 col-lg-10 offset-lg-1">
                  <div className="error__item text-center">
                     <div className="error__thumb mb-45 w-img">
                        <img src="assets/img/icons/404.png" alt="" />
                     </div>
                     <div className="error__content">
                        <h1 className="error__title">Page Not Found!</h1>
                        <p>Please try searching for some other page.</p>
                        <Link to="index.html" className="tp-btn">
                           <span>Back To Home</span>
                           <div className="transition"></div>
                        </Link>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
      {/* <!-- error area end --> */}

   </main>

   </>
  )
}

export default Error