import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

function Review() {
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
                margin: 40,
            }
        }
    };
    const reviews =[
        {
            id:1,
            name:"Jackson",
            review:"I recently enrolled in my college program, where one of my core subjects was mathematics. As I have been weak with mathematics in my schooling years, I wanted to look for an online tutoring service to help me with my maths curriculum. While I was looki",
            profile:"sophia",
            orderCode:"TSH00098"
        },
        {
            id:2,
            name:"Bella",
            review:"My daughter was struggling to learn English, and I thought searching for the best online English tutoring in Australia would give me some relevant answers. I came across The Student Helpline and wanted to give it a try. After taking a few lessons, I sa",
            profile:"steph",
            orderCode:"TSH09090"
        },
        {
            id:3,
            name:"Karansher",
            review:"I have been taking tutoring tips from The StudentHelpline for quite some time now and must say that there has never been a single day when they have mismanaged my timings. I was very particular about this thing from the start, and surely they have neve ",
            profile:"ashley",
            orderCode:"TSH81291"
        },
        {
            id:4,
            name:"Amanda Welsh",
            review:"I was very bad at studying Engineering, but my mom wanted me to pursue this field for better future prospects. I agreed to her wishes but faced a hard time understanding the basics when I came across this amazing and the most wonderful service provider",
            profile:"ashley",
            orderCode:"TSH01456"
        },
        {
            id:5,
            name:"McGregor",
            review:"I came from Spain to study in Australia. As I had very little knowledge of English, I was willing to take English tutoring in Brisbane. By having a look at my writing style, you can see what magic they have done to my language skills. With their Englis",
            profile:"ashley",
            orderCode:"TSH12123"
        },
        {
            id:6,
            name:"Jack M",
            review:"I am engaged in completing a group project with my friends regarding physics. The authors of TSH have been of great help to us in solving difficult numerical and other problems to simplify our project. I recommend these services to all students to get hel",
            profile:"ashley",
            orderCode:"TSH01533"
        },
        {
            id:7,
            name:"Mia",
            review:"I was quite tensed about the assignment given by my collage with the list of instructions. When I went through my assignment question it was something that was beyond my comprehension. So, to complete my assignments on time, I have hired a trusted expert",
            profile:"ashley",
            orderCode:"TSH01673"
        }
    ]
    
  return (
    <section className="feedback pad60">
	   <div className="container">
	   <div className='text-center py-3'>
       <h3>A Glimpse To TheStudentHelpline Evaluation Done By You</h3>
       </div>
	       {/* <div id="owl-demo" className="owl-carousel owl-theme owl3"> */}
		   <OwlCarousel className='owl-theme' {...options}>
                    {
                        reviews.map((data)=>(
                            <div className="c-card p-xl-4 p-3" key={data.id}>
                                <div>
                                {/* <img src={`./assets/img/${data.profile}.webp`} alt="" style={{ width: "75px" }} /> */}
                                <p className='fs-5 fw-bold'>{data.name}</p>
                                <p>{data.review}</p>
                                </div>
                                <div className='h-100 d-flex flex-column justify-content-end'>
                                <p className='mb-0 '><strong>Order Code:</strong>{data.orderCode}</p>
                                <p className='verifiedBadge mb-0'>
                                <span className="star-fa">
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
							<i className="fa fa-star"></i>
						</span></p>
                                </div>
                            </div>
                        ))
                    }
                </OwlCarousel>
	   </div>
	</section>
  )
}

export default Review