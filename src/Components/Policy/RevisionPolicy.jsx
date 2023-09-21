import React from 'react'
import { Link } from 'react-router-dom'
import Form from '../Form'

export default function RevisionPolicy() {
  return (
    <main>
        <div className="breadcrumb__area include-bg pt-200 pb-150 breadcrumb__overlay">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="breadcrumb__content p-relative z-index-1">
                        <h3 className="breadcrumb__title">Revision Policy</h3>
                        <div className="breadcrumb__list">
                           <span><Link to={`${process.env.PUBLIC_URL}/`} className='text-white'>Home </Link></span>
                           <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                           <span>Revision Policy</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="container mb-40 mt-40">
            <div className="row">
               <div className="col-md-8 col-lg-6">
                  <h2 className='text-decoration-underline'>Revision Policy</h2>
                  <p>The policy does not suit assignment orders that are inclined towards technical discipline.</p>
                  <p>This policy differs in matters of lengthy assignment. The lengthy sort of assignment is an exception for us.</p>
                  <p><strong>This policy differs in matters of lengthy assignment. The lengthy sort of assignment is an exception for us.</strong></p>
                  <ul className='green-check-bullet'>
                    <li>We deal with three categories of assignment writing services, i.e., advance, premium, and basic. In case of any discrepancies or issues, only the advanced category attains the privilege of demanding a refund.</li>
                    <li>All the instructions and briefing given by our team at the time of first interaction would only be considered valid and solid in the future.</li>
                    <li>All the required files and other academic documents must be submitted by the client in the starting as they are the reference material using which our experts will draft your assignment.</li>
                    <li>Any additional files after the completion of the assignment will be addressed after adding on to the prevailing payment.</li>
                    <li>In case of any discrepancies from the end of our academic writers, the assignments will be re-checked and necessary amendments will be made.</li>
                    <li>We don’t take any responsibility for the changes that are done by the client after the submission of the final draft of the assignment. We do not assume that the exact write-up is forwarded to the professor which is why proof of various documents will be required at the time of revision.</li>
                    <li>We are not liable for any loss of data from the client’s side</li>
                  </ul>
                  <h3 className='text-warning mt-30'>Revision Policy For SOP</h3>
                  <p>Everything related to the revision and refund in case of statement of purpose, letter of recommendation, visa SOP, or any other admission related documents is written and stated clearly below:</p>
                  <ul className='green-check-bullet'>
                    <li>Clients can ask for the revision within the 7 days of receiving the file.</li>
                    <li>Revision is done in accordance with the inputs received in the original input form.</li>
                    <li>Revised file is delivered within 48 to 72 working hours after receiving the revision inputs.</li>
                    <li>Revision does not include rewriting the SOP. It solely refers to the few alterations and editing in the original document.</li>
                    <li>Any additional information provided will be chargeable.</li>
                    <li>Remember to share your required word count or format with the original input form to avoid any future misunderstandings.</li>
                  </ul>
               </div>
               <div className="col-lg-1"></div>
               <div className="col-md-4 col-lg-5">
                  <h4 className='text-center'>Guaranteed Higher Grades!!</h4>
                  <h3 className='text-center text-warning mb-40'>Get Help Right Away!!</h3>
                  <Form/>
               </div>
            </div>
         </div>
    </main>
  )
}
