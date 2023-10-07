import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Link} from 'react-router-dom'
function SubjectExperties() {


    // const subject = {
    //     loop:true,
    //     margin:25,
    //     responsiveClass:true,
    //     autoplay:true,
    //     responsive:{
    //         0:{
    //             items:1,
    //             nav:false,
    //             loop:true
    //         },
    //         600:{
    //             items:2,
    //             nav:false,
    //             loop:true
    //         },
    //         1000:{
    //             items:3,
    //             nav:true,
    //             loop:true
    //         }
    //     }
    // };
  

    const subject = {
            loop:true,
          margin:10,
          nav:true,
          autoplay:true,
          autoplayTimeout:3000,
          autoplayHoverPause:true,
          center: true,
          dots:false,
          pagination: false,
          navText: [
              "<i className='fa fa-angle-left'></i>",
              "<i className='fa fa-angle-right'></i>"
          ],
          responsive:{
              0:{
                  items:1
              },
              600:{
                  items:1
              },
              1000:{
                  items:3
              }
          }
        };
   
  return (
  <>
  <section className='experties pad60'>
             
                <div className="container mt-4" id='reviews'>
                <div className="text-center mb-4 py-5">
                <h3 className='text-black'>Our Subject Expertise</h3>
                </div>
                <div className="slider">
                <OwlCarousel className='owl-theme' {...subject}>
                <div   className="slider-card">
<span className="se-img"><img src="./assets/img/imgicon/it.webp" alt="It Assignment" /></span>
<h5><Link to="#">IT/Computer</Link></h5>
<p>Computer Science is a systematic study of designing and analysis of algorithms that helps in solving programs determining the performance of computer hardware and software. The theoretical aspects and their practical application pave an easy way for human interaction with technology. Learning this discipline may sound like a hard endeavor for many students? However, your willingness to invest time in it may solve it all. For more contact us.</p>
</div>
<div   className="slider-card">
<span className="se-img"> <img src="./assets/img/imgicon/accounting.webp" alt="Accounting Assignment"/> </span>
<h5><Link to="#">Accounting and Finance</Link></h5>
<p>Accounting solves the real-life problems of businesses regardless of their size and helps in making efficient cost planning decisions and measuring the overall economic performance of a company. Accounting relates to information analysis for different aspects of business whereas finance solely concerns a business' monetary funds. Writing for such a discipline and channelizing our energy might seem a waste. But we have got you covered with our experts’ team working round the clock. </p></div>
<div   className="slider-card">
<span className="se-img"> <img src="./assets/img/imgicon/statistics.webp" alt="Marketing Assignment"/> </span>
<h5><Link to="#">Marketing</Link></h5>
<p>Marketing is the process of flash any service or commodity to get a comparative advantage in the marketplace. It is among the most essential management roles since it assists to create new consumers and provide importance to the firm. Students are given marketing assignments so that they could reflect carefully about the importance of marketing as a discipline, method techniques employed by large businesses, and how to upgrade their abilities as marketing professionals.</p>
</div>
<div   className="slider-card">
<span className="se-img"> <img src="./assets/img/imgicon/economics.webp" alt="Economics Assignment"/> </span>
<h5><Link to="#">Economics</Link></h5>
<p>In the words of Adam Smith, “Economics is an inquiry into the nature and causes of the wealth of nations.” The scope of study expanded over time and was divided into two branches namely macroeconomics and microeconomics. The former deals with how the overall economy that includes the market and other systems operates on a large scale along with the government as a major sector. if you are looking for help with economics assignment, contact us now.</p>
</div>
<div   className="slider-card">
<span className="se-img"> <img src="./assets/img/imgicon/engineering.webp" alt="Engineering Assignment"/> </span>
<h5><Link to="#">Engineering</Link></h5>
<p>Building machines, complex structures, and creating an infrastructure requires the application of systematic scientific principles. The scientific study that uses theories of science and mathematics to reach logical conclusions for practical application in the real world are taught in Engineering. Be it mechanical, chemical, civil, electrical, management, geotechnical, or other hundreds of different subcategories of engineering under each branch, we are here to assure you 24x7.</p>
</div>
<div   className="slider-card">
<span className="se-img"> <img src="./assets/img/imgicon/law.webp" alt="Law Assignment"/> </span>
<h5><Link to="#">Law</Link></h5>
<p>As a discipline of study, Law denotes rules and principles that guide and keep in check unjust human behavior. As John Austin says, “Law is the command of the sovereign backed by the threat of punishment.” Law is not just a subject but it is an entire pool of discipline. There are diverse fields among law like Property law, International law, Criminal procedure, Civil procedure, The Law of Tort, etc. Be it any field, we have Ph.D. holders with the best of experience to help you with your task.</p>
</div>
<div   className="slider-card">
<span className="se-img"> <img src="./assets/img/imgicon/management.webp" alt="Management Assignment"/> </span>
<h5><Link to="#">Management</Link></h5>
<p>Management is what we do and how we do it to generate the desired result. It revolves around four pillars of planning, organizing, leading, and controlling. The efficient and effective use of resources to get the desired objective is the prime focus of Management. It involves coming together of different resources like human resources, technical resources, natural resources, etc working towards a common objective in the organization. Nonetheless, we have experts who could you.</p>
</div>
<div   className="slider-card">
<span className="se-img"> <img src="./assets/img/imgicon/nursing.webp" alt="Nursing Assignment"/> </span>
<h5><Link to="#">Nursing</Link></h5>
<p>Nursing is a discipline that specializes in complete health advancement, illness control, and providing holistic care to those who are mentally and physically unwell. It also includes campaigns and support for a secure environment to assist the community to prosper. Many students benefit from a Nursing assignment to grasp new regulations and evaluate current ones to master how to run the public health service appropriately. So that's why nursing is regarded as key area of study.</p>
</div>


</OwlCarousel>
           </div>
                </div>
            </section>


</>
  )
}

export default SubjectExperties