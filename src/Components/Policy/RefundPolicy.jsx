import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../Form'

export default function RefundPolicy() {
  return (
    <main>
        <div className="breadcrumb__area include-bg pt-200 pb-150 breadcrumb__overlay">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="breadcrumb__content p-relative z-index-1">
                        <h3 className="breadcrumb__title">Refund Policy</h3>
                        <div className="breadcrumb__list">
                           <span><Link to={`${process.env.PUBLIC_URL}/`} className='text-white'>Home </Link></span>
                           <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                           <span>Refund Policy</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container mb-40 mt-40">
            <div className="row">
               <div className="col-md-8 col-lg-6">
                  <h2 className='text-decoration-underline'>Refund Policy</h2>
                  <p>We strive to offer our customers the utmost service attainable. We adhere to best practices to deliver high-quality services. We have established an entirely transparent refund policy as we strongly believe in integrity, candour, and transparency. We serve our clients from various academic and industrial disciplines by providing them with the greatest solutions.</p>
                  <p>However, we also offer a refund policy on both SOP and assignment on the following terms and conditions:</p>
                  <ul>
                    <li>You can only cancel within the following 1 hour after payment is processed. Email our customer service representative to cancel a purchase and share the order ID in the subject line. It won't be able to cancel an order once it has been confirmed, as we operate promptly to fulfill every order in terms of giving each and every one of our clients the most efficient service possible, and we allocate an expert(s) or team(s) to carry out the task within the time window.</li>
                    <li>Due to various unforeseen circumstances, it is occasionally challenging to provide the service within the agreed-upon deadline, but rest assured that we will do everything necessary. If that happens, we will make up for it by offering discounts on subsequent services as per the management's decision. Sometimes we require login information, a database, or additional information to work on the order; if you don't provide it on time, clearly, our delivery will be impacted, and there won't be reimbursement in that instance.
</li>
                  </ul>
                  <p>It is impossible to get a refund on</p>
                  <ul>
                    <li>Orders where partial payments are still due.</li>
                    <li>If the order deadline is under or equivalent to 72 hours at order confirmation time (whenever the customer completes the payment on the invoice).</li>
                    <li>If a customer requests a change after the order has been confirmed, but it wasn't part of the initial request. (The prerequisite has changed)</li>
                    <li>Refund requests cannot be considered if there have been numerous changes, alterations, or lengthy follow-ups, mostly in case of revision or explanation.</li>
                    <li>Once the solution file or SOP has been delivered, no refund requests will be considered.</li>
                    <li>We make no guarantees regarding selections, grades or results as obtaining the best outcome is attainable with steady work throughout time.</li>
                  </ul>
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
