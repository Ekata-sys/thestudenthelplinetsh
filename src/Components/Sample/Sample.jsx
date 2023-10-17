
import React, { useEffect } from 'react'
import "../Sample/sample.css";
import Vtab from './Vtab';
import Form from '../Form';
import {Link} from 'react-router-dom';
import { useState } from 'react';
function Sample() {
  const [data,setData] = useState([]);
  let temp;  
  const [content,setContent] = useState([]);
  async function getData(){
    const request = await  fetch("https://thestudenthelpline.io/sample_category_api.php",{
      method:"GET",
      headers:{
        'apitoken':'9667TSH##',
      }
    })
    const response = await request.json();
    setData(response.Result)
  }

  async function getContent(){
    const contentRequest = await  fetch("https://thestudenthelpline.io/api.php",{
      method:"GET",
      headers:{
        'Api-Token':'3773##ssf',
      }
    })
    const contentResponse = await contentRequest.json();
    setContent(contentResponse.Result)
  }

  useEffect(()=>{
    getData()
    getContent()
  },"");
  return (
    <>
           


<div className="breadcrumb__area include-bg pt-50 pb-50 breadcrumb__overlay"
         data-background="assets/img/breadcrumb/breadcrumb-bg.jpg">
         <div className="container">
            <div className="row">
               <div className="col-xxl-12">
                  <div className="breadcrumb__content p-relative z-index-1">
                     <h3 className="breadcrumb__title">Sample</h3>
                     <div className="breadcrumb__list">
                        <span><Link to="/">Home</Link></span>
                        <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                        <span>Sample</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>

<section className='pt-50 pb-50'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-7'>
               <div>
               <Vtab data={data} content={content}/>
               </div>
                </div>
                <div className="col-xxl-5 col-xl-5 col-lg-5">
                <div className='formback'>
                                 <Form/>
                                 </div>

                               
                <div className='my-5'>
                                 <div class="row sample2">
					 <div class="col-sm-6">
					   <div class="ord-b"> 
						<img src="https://thestudenthelpline.io/images/order-1.png" alt=''/>
						<h4>21 Step Quality Check</h4>
					   </div>	
					 </div>
					<div class="col-sm-6">
					   <div class="ord-b"> 
						<img src="https://thestudenthelpline.io/images/order-2.png" alt=''/>
						<h4>2000+ Ph.D Experts</h4>
					   </div>	
					 </div>
					 <div class="col-sm-6">
						 <div class="ord-b">
							<img src="https://thestudenthelpline.io/images/order-3.png" alt=''/>
							<h4>Earn while you Learn with us</h4>
						</div>	
					 </div>
					 <div class="col-sm-6">
					   <div class="ord-b">
						  <img src="https://thestudenthelpline.io/images/order-4.png" alt=''/>
						  <h4>Confidentiality Agreement</h4>
						</div>
					 </div>
					 <div class="col-sm-6">
					   <div class="ord-b">
						<img src="https://thestudenthelpline.io/images/order-5.png" alt=''/>
						<h4>Live Expert Sessions</h4>
					   </div>	
					 </div>
					 <div class="col-sm-6">
					   <div class="ord-b">
						  <img src="https://thestudenthelpline.io/images/order-6.png" alt=''/>
						  <h4>Dedicated App</h4>
					   </div>	
					 </div>
					 <div class="col-sm-6">
					   <div class="ord-b">
						  <img src="https://thestudenthelpline.io/images/order-7.png" alt=''/>
						  <h4>Money Back Guarantee</h4>
						</div>	
					 </div>
					  <div class="col-sm-6">
					   <div class="ord-b">
						  <img src="https://thestudenthelpline.io/images/order-8.png" alt=''/>
						  <h4>Customer Feedback</h4>
						</div>	
					 </div>
				  </div>
          </div>
                </div>
            </div>
        </div>
    </section>


    </>
  )
}

export default Sample