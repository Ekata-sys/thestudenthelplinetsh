import React from 'react'
import {Link} from 'react-router-dom'
import ThreeSteps from './Home/ThreeSteps'
import Form from './Form'
function HowWork() {
  return (
   <>
   <div className="breadcrumb__area include-bg pt-200 pb-150 breadcrumb__overlay"
   data-background="assets/img/breadcrumb/breadcrumb-bg-3.jpg">
   <div className="container">
      <div className="row">
         <div className="col-xxl-12">
            <div className="breadcrumb__content p-relative z-index-1">
               <h3 className="breadcrumb__title">How it works</h3>
               <div className="breadcrumb__list">
                  <span><Link to=">#">Home</Link></span>
                  <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                  <span>How it works</span>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
<section>
    <div className='container pt-50'>
        <div className='row'>
            <div className='col-xl-8 col-lg-8'>
            {/* <div className="col-sm-7 privacy__left aos-init aos-animate" data-aos="fade-right"> */}
			   <h4 className="text-left">Your Assignment, Our Responsibility. </h4>
			   <h3 className="text-left">How Does It Works?</h3>
			   <p>Consult Leading Highly-Qualified Experienced Writers <br/>GUARANTEED A++GRADE</p>			   <div className="row pad60">
			     <div className="col-sm-6">
				   <img src="assets/img/how-it-work.webp" alt=''/>
				 </div>
				 <div className="col-sm-6">
				    <h4 className="text-left">How Does it Works?</h4>
					<p className="text-justify">We all are aware that in this twenty-first century's fleet-footed academic environment, students must perform numerous tasks at the same time. Unfortunately, the majority of students struggle to meet the deadlines and begin to fret and become desperate for immediate assistance. To guarantee that your valuable time is not squandered filling out questionnaires with your personal information, we have built our site to be student-oriented in order to give speedy service. Truly, obtaining assignment assistance could never have been easier! You do not need to read a long-winded guidebook to take advantage of our efficient services.</p>

<p className="text-justify">Our method is straightforward, swift, and notably safe you only need to follow three basic procedures, or say, give the CPR!</p>					
				 </div>
			   </div>
		     {/* </div> */}

            </div>
            <div className='col-xl-4 col-lg-4'>
                <div className="formback">
                  <Form/>
                </div>
                </div>
        </div>
    </div>
</section>
<section>
    <ThreeSteps/>
    <div className='container'>
        <p>That's it! Now you well know how to give yourself a CPR on emergencies, especially when faced with an Assignment arrest.</p>
        <p>But, if you are dissatisfied with the quality of the work received or sense that certain portions may be improved, please do not hesitate to contact us. We provide limitless revisions till you are absolutely content. Even yet, revision requests are uncommon for us because our experienced writers have years of expertise and produce high-quality work in a single sitting.</p>
    <p>We are available 24 hours a day, seven days a week for your convenience. We are always here to assist you anytime you require academic assignment assistance.</p>
    </div>
</section>
   </>
  )
}

export default HowWork