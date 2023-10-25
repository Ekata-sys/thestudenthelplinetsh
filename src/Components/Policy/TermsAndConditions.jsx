import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../Form'

export default function TermsAndConditions() {
  return (
    <main>
    <div className="breadcrumb__area include-bg pt-50 pb-50 breadcrumb__overlay">
        <div className="container">
           <div className="row">
              <div className="col-xxl-12">
                 <div className="breadcrumb__content p-relative z-index-1">
                    <h3 className="breadcrumb__title">Terms And Conditions</h3>
                    <div className="breadcrumb__list">
                       <span><Link to={`${process.env.PUBLIC_URL}/`} className='text-white'>Home </Link></span>
                       <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                           <span><Link to="/au">Australia</Link></span>
                       <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                       <span>Terms And Conditions</span>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>
     <div className="container mb-40 mt-40">
        <div className="row">
           <div className="col-md-8 col-lg-6">
            <h2 className='text-decoration-underline'>Terms And Conditions</h2>
            <p>We do not Sell or Share Your Info to Any Third Party or Marketing Agency.</p>
            <h4>This is our solemn promise.</h4>
            <p>We welcome you to the best online writing services, <Link to={`${process.env.PUBLIC_URL}/`} className="text-warning">The Student Helpline!</Link></p>
            <p>These sets of terms and conditions list all the various rules and regulations of numerous domains that are to be followed by both the internal and external experts as well as our clients. They are drafted and designed to secure the privacy of our clients. Proper accordance with these terms and conditions eliminates any room for misunderstandings in the future.</p>
            <p>By taking our services, we gladly assume that you have read and understood these conditions. Please agree with these terms before starting an amazing and wonderful journey with us.</p>
            <p><strong>Here is the list of the adopted terminology used to denote the subject of consideration:</strong></p>
            <ul>
              <li>Words like You, Yours, and Client are used to denote and address the customer or client taking our services.</li>
              <li>We refer to our company whenever we state things like The organization/firm/company, We, Us and Ourselves.</li>
              <li>Acknowledgement to both client and the company is given when words like Party, Us, and Parties.</li>
            </ul>
            <p>All terms pertain to the proposal, admission, and evaluation of payment that is required to begin the task of our services to the Customer in the most efficient way possible, with the explicit goal of fulfilling the Client's demands in regard to the Company's specified services. Any use of the above language, and also other terms in the solitary, plurality, capitalization, and/or he/she or they, is assumed to communicate the same meaning.</p>
            <ul>
              <li>We start your order after receiving 50% of the advance payment.</li>
              <li>After your work is ready, we share 1/4th of the work draft with you, then you are obliged to make the rest of the balance payment to receive the complete file.</li>
              <li>This method of sharing 1/4th of the entire file is done to ensure you that your work is ready. It also helps in regulating our plagiarism and <Link to={`${process.env.PUBLIC_URL}/privacy-policy`}>privacy policy</Link>.</li>
            </ul>
            <p><strong>Free*</strong> -  Book 3 Assignment and Get One Assignment Absolutely Free</p>
           </div>
           <div className="col-lg-1"></div>
           <div className="col-md-4 col-lg-5">
              <h4 className='text-center'>Guaranteed Higher Grades!!</h4>
              <h3 className='text-center text-warning mb-40'>Get Help Right Away!!</h3>
              <div className='formback'>
              <Form/>
              </div>
           </div>
        </div>
     </div>
</main>
  )
}
