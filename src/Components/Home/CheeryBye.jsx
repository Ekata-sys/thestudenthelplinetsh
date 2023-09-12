import React from 'react'

function CheeryBye() {
  return (
    <>
         {/* <!-- counter start  --> */}
      <div className="tp-counter-2__section">
         <div className="container">
            <div className="tp-counter-2__bg pt-60 pb-30" data-background="assets/img/bg/count-bg-2.jpg">
               <div className="row">
                  <div className="col-lg-3 col-md-6">
                     <div className="tp-counter-2__item has-border mb-30">
                        <span className="tp-counter-2__icon"><i className="fa-thin fa-cassette-tape"></i></span>
                        <span><b className="counter">1306</b>Courses & videos</span>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="tp-counter-2__item has-border mb-30">
                        <span className="tp-counter-2__icon"><i className="fa-thin fa-chalkboard-user"></i></span>
                        <span><b className="counter">620</b>Expert teachers</span>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="tp-counter-2__item has-border mb-30">
                        <span className="tp-counter-2__icon"><i className="fa-thin fa-graduation-cap"></i></span>
                        <span><b className="counter">530</b>University students</span>
                     </div>
                  </div>
                  <div className="col-lg-3 col-md-6">
                     <div className="tp-counter-2__item has-border mb-30">
                        <span className="tp-counter-2__icon"><i className="fa-thin fa-book"></i></span>
                        <span><b className="counter">200</b>Classes complete</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      {/* <!-- counter end  --> */}

    </>
  )
}

export default CheeryBye