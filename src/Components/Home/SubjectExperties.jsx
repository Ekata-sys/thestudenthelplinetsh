import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
function SubjectExperties() {
    const options = {
        loop: true,
        autoplay: true,
        dots: false,
        nav: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                margin:10
            },
            600: {
                items: 2,
                margin:10
            },
            1000: {
                items: 3,
                margin:10
            },
            1200:{
                items: 3,
                margin: 40,
            }
        }
    };
  
  return (
  <>
  <section className='why-sec'>
                <div className='container'>
                <div className="container mt-4" id='reviews'>
                <div className="text-center mb-4 py-5">
                <h3>Our Subject Expertise</h3>
                </div>
           
                <OwlCarousel className='owl-theme' {...options}>
    <div className='item'>
    <div className="r-card p-xl-4">
                                <div>
                                <img src='./assets/img/review1.webp' alt="" className='' />
                                <p className='fs-5 fw-bold'>Sumit</p>
                                <p>I received my phd dissertation on time and received average marks. The dissertation was well designed in excellent perspective to get the marks you need and with excellent vocabulary was used. Highly recommended to get help from Dissertation Helper, they have team of professional dissertation writers.</p>
                                </div>
                                <div className='h-100 d-flex flex-column justify-content-end'>
                            <div className='star'><i  className="fa-solid fa-star"></i><i  className="fa-solid fa-star"></i><i  className="fa-solid fa-star"></i><i  className="fa-solid fa-star"></i><i  className="fa-solid fa-star"></i></div>
                                </div>
                            </div>
        
    </div>
    <div className='item'>
    <div className="r-card p-xl-4">
                                <div>
                                <img src='./assets/img/review2.webp' alt="" className='' />
                                <p className='fs-5 fw-bold'>William</p>
                                <p>I had an amazing experience with their dissertation writing service and I'm delighted with the outcome. I'm confident to recommend them on a short notice as I have been awarded good grades in my semester due to the timely delivery of my dissertation to me.</p>
                                </div>
                                <div className='h-100 d-flex flex-column justify-content-end'>
                            <div className='star'><i  className="fa-solid fa-star"></i><i  className="fa-solid fa-star"></i><i  className="fa-solid fa-star"></i><i  className="fa-solid fa-star"></i><i  className="fa-solid fa-star"></i></div>
                                </div>
                            </div>
        
                              
        
    </div>
    <div className='item'>
    <div className="r-card p-xl-4">
                                <div>
                                <img src='./assets/img/review3.webp' alt="" className='' />
                                <p className='fs-5 fw-bold'>Amenda</p>
                                <p>Dissertation Helper has been a trustworthy aid in my university tasks and it is the only reliable website with reasonable prices for their services! I am sincerely appreciative of the great work done by you all! Appreciate it!</p>
                                </div>
                                <div className='h-100 d-flex flex-column justify-content-end'>
                            <div className='star'><i  className="fa-solid fa-star"></i><i  className="fa-solid fa-star"></i><i  className="fa-solid fa-star"></i><i  className="fa-solid fa-star"></i><i  className="fa-solid fa-star"></i></div>
                                </div>
                            </div>
        
    </div>


</OwlCarousel>
            </div>
                </div>
            </section>
</>
  )
}

export default SubjectExperties