import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../Form'

export default function Privacypolicy() {
  return (
    <main>
        <div className="breadcrumb__area include-bg pt-200 pb-150 breadcrumb__overlay">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="breadcrumb__content p-relative z-index-1">
                        <h3 className="breadcrumb__title">Privacy Policy</h3>
                        <div className="breadcrumb__list">
                           <span><Link to={`${process.env.PUBLIC_URL}/`} className='text-white'>Home </Link></span>
                           <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                           <span>Privacy Policy</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container mb-40 mt-40">
            <div className="row">
               <div className="col-md-8 col-lg-6">
                  <h2 className='text-decoration-underline'>Privacy Policy</h2>
                  <p>We guarantee the privacy of your personal and assignment information. We require the data in order to provide you with the most up-to-date content and to improve the user-friendly encounter, as well as to give you the current report in compliance with our customer service contract and terms and policies.</p>
                  <p>The student helpline collects a great deal of data through its operations, sites, smartphone application, and other engaging aspects. This information aids us in regulating and resolving any differences, engaging in trustworthy business operations, and making legal judgments. We take all appropriate precautions to guarantee that your data is protected, managed, and protected in accordance with this privacy policy.</p>
                  <p>Analytics, statistics, web beacons, cookies and other goal-oriented advertising technologies are used to collect customer data. When we interchange a few clicks, a piece of the data is saved automatically, and that record can be utilized to make the user-to-user contact process go more smoothly. This happens as a result of the action you're doing, the type of product or service you're looking for, and the frequency and length of a specific session.</p>
                  <ul>
                     <li>All customer data is stored privately and not shared with anybody outside the organization. No one else has access to this information. Your data and information are required to perform the obligatory procedure, which will streamline the information exchange and keep you informed of all relevant changes.</li>
                     <li>Everything that you need to know about confidentiality and anonymity is given above. We keep both sides' identities hidden; neither yours nor our experts' identities are disclosed.</li>
                     <li>While your order is made, a WhatsApp group is created for easier, effective, efficient, and accessible communication. After the completion of your task, no information shared in the group will be kept.</li>
                     <li>While your order is made, a WhatsApp group is created for easier, effective, efficient, and accessible communication. After the completion of your task, no information shared in the group will be kept.</li>
                     <li>While your order is made, a WhatsApp group is created for easier, effective, efficient, and accessible communication. After the completion of your task, no information shared in the group will be kept.</li>
                     <li>While your order is made, a WhatsApp group is created for easier, effective, efficient, and accessible communication. After the completion of your task, no information shared in the group will be kept.</li>
                  </ul>
                  <p><i>While your order is made, a WhatsApp group is created for easier, effective, efficient, and accessible communication. After the completion of your task, no information shared in the group will be kept.</i></p>
               </div>
               <div className="col-lg-1"></div>
               <div className="col-md-4 col-lg-5">
                  <h4 className='text-center'>High Grades Guaranteed Or Your Money Back!</h4>
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
