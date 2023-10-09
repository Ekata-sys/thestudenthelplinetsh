import React from 'react'
import "../Sample/sample.css";
import Vtab from './Vtab';
import Form from '../Form';
import {Link} from 'react-router-dom';
function Sample() {
  return (
    <>
           
{/* <section>
  <div className='container position-relative'>
    <div className='pt-60'>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
    </div>
  <div id="overlay" className="cover blur-in">
  <div className="sample-content">
    <h1>The history or Lorem Ipsum</h1>
    <span>
    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    </span>
    <span>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse faucibus viverra porta. Pellentesque scelerisque eros quis dignissim semper. Nulla ut justo a sapien lobortis posuere. Maecenas scelerisque justo eleifend risus dapibus, id bibendum tellus placerat. Sed massa diam, ornare ut varius ut, auctor non arcu. Cras rutrum tortor eu diam feugiat aliquam. Suspendisse rutrum pretium pretium. 
      </p>
    </span>
    <span>
    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
    </span>
  </div>
</div>
<div className="row pop-up">
  <div className="boxsample small-6 large-centered">
    <Link to="#" className="close-button">&#10006;</Link>
    <h3>lorem ipsum</h3>
    <p>Integer non odio id ante rutrum dictum. Nam ac dapibus felis, at pharetra sapien. </p>
    <p>Maecenas lacus nisi, pellentesque a congue vel, rhoncus sit amet lacus. Sed mattis ultrices risus in tincidunt.</p>
   
  </div>
</div>
  </div>
</section> */}

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
               <Vtab />
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