import React from 'react'
import FaqAccordion from './FaqAccordion'
import { useParams } from 'react-router-dom'
import { auData } from '../../au_service_list'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import Form from '../Form'

async function fetchData(){
   const response = await fetch(`${process.env.PUBLIC_URL}/assets/au_service_list.json`)
   return await response.json()
}

export default function Service() {
   const {title} = useParams();
   let a = auData.find(obj=>obj.service_page_url===title)
   const afterService = [
      {
         link: '',
         content: 'SPSS Assignment Help AU'
      },
      {
         link: '',
         content: 'TAFE Assignment Help AU'
      },
      {
         link: '',
         content: 'Marketing Assignment Help AU'
      },
      {
         link: '',
         content: 'Business Assignment Help AU'
      },
      {
         link: '',
         content: 'Cookery Assignment Help AU'
      },
      {
         link: '',
         content: 'Exam And Quiz Help AU'
      },
      {
         link: '',
         content: 'Finance Assignment Help AU'
      },
      {
         link: '',
         content: 'Mathematics Assignment Help AU'
      },
      {
         link: '',
         content: 'Mathematics Assignment Help AU'
      },
      {
         link: '',
         content: 'IT Assignment Help AU'
      },
   ]
   return (
      <main>
         <Helmet>
         <title>{a.seo_page_title}</title>
      </Helmet>
         <div className="breadcrumb__area include-bg pt-200 pb-150 breadcrumb__overlay">
            <div className="container">
               <div className="row">
                  <div className="col-xxl-12">
                     <div className="breadcrumb__content p-relative z-index-1">
                        <h3 className="breadcrumb__title">{a.service_page_name}</h3>
                        <div className="breadcrumb__list">
                           <span><Link to={`${process.env.PUBLIC_URL}/`} className='text-white'>Home </Link></span>
                           <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                           <span>{a.service_page_url}</span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="course-details pt-60">
            <div className="container">
               <div className="course-details__header">
                  <div className="container">
                     <div className="row">
                        <div className="col-lg-7">
                           <div className="course-details__content">
                              <div dangerouslySetInnerHTML={{ __html: a.service_content }} />
                           </div>
                           <div className="course__tab-content mb-95">
                           <div dangerouslySetInnerHTML={{ __html: a.service_content_two }} />
                           <div dangerouslySetInnerHTML={{ __html: a.service_content_three }} />
                           </div>
                        </div>
                        <div className="col-xxl-5 col-xl-5 col-lg-5">
                           <div className="course__sidebar pl-70 p-relative">
                              <div className="course__sidebar-widget-2 white-bg mb-20 p-0">
                                 <Form/>
                              </div>
                              <div className="course__sidebar-widget-2 white-bg mb-20">
                                 <div className="course__sidebar-course">
                                    <h3 className="course__sidebar-title">Related Services</h3>
                                    <ul className='ps-0 pe-4'>
                                       <li className='px-4 py-2 bg-info bg-opacity-10 mb-3 services-links' ><a href="">Coursework Help Au</a></li>
                                    </ul>
                                 </div>
                              </div>
                              {a.studentQuestions[0].ques ? 
                                 <div className="course__sidebar-widget-2 white-bg mb-20">
                                 <div className="course__sidebar-course">
                                    <h3 className="course__sidebar-title">Student Asked Questions</h3>
                                    <FaqAccordion data={a.studentQuestions} />
                                 </div>
                              </div>
                              :""}
                              <div className="course__sidebar-widget-2 white-bg mb-20">
                                 <div className="course__sidebar-course">
                                    <h3 className="course__sidebar-title">Most Sought After Services</h3>
                                    <ul className='ps-0 pe-4'>
                                       {
                                          afterService.map((element, index) => (
                                             <li className='px-4 py-2 bg-info bg-opacity-10 mb-3 services-links' key={index}><a href={`${element.link}`}>{element.content}</a></li>
                                          ))
                                       }
                                    </ul>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>

            </div>
         </div>

      </main>
   )
}
