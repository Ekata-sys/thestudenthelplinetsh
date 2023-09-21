import React from 'react'
import { Link } from 'react-router-dom'
import ExpertCard from './ExpertCard'

export default function Experts() {
    const expertData= [
        {
            name:"Ava",
            location:"Canada",
            subject:"Statstics",
            orders:"45",
            stars:["","","","",""],
            rating:4
        },
        {
            name:"Lawrence",
            location:"UK",
            subject:"Computer Science",
            orders:"185",
            stars:["","","","",""],
            rating:4
        },
        {
            name:"Julie",
            location:"Canada",
            subject:"Statstics",
            orders:"45",
            stars:["","","","",""],
            rating:4
        },
        {
            name:"Ruby",
            location:"Canada",
            subject:"Engineering",
            orders:"45",
            stars:["","","","",""],
            rating:4
        },
        {
            name:"Emily",
            location:"UK",
            subject:"Economics",
            orders:"45",
            stars:["","","","",""],
            rating:4
        },
        {
            name:"Samantha",
            location:"UK",
            subject:"Essays",
            orders:"94",
            stars:["","","","",""],
            rating:4
        }
    ]
    return (
        <main>
            <div className="breadcrumb__area include-bg pt-200 pb-150 breadcrumb__overlay">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">Experts</h3>
                                <div className="breadcrumb__list">
                                    <span><Link to={`${process.env.PUBLIC_URL}/`} className='text-white'>Home </Link></span>
                                    <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                                    <span>Experts</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-40 container mb-40'>
                <div className="bg-info bg-opacity-10 p-5 text-center">
                    <h3 className="text-warning">
                    Choose the Best Assignment Specialist Near Your Location
                    </h3>
                    <p className='mt-20'>Get exemplary assignment writing assistance from skilled and talented assignment professionals of the Thestudenthelipline.com. Our Ph.D. qualified assignment specialists from internationally recognized universities present their knowledge to assist you in creating remarkable assignment strategies.Score higher than ever before with valuable assistance from actual <Link to={`${process.env.PUBLIC_URL}/`} className='text-primary'>assignment help</Link> specialists in a broad range of subjects.</p>
                    <p>We make it possible for you to hire professional writers for a variety of assignments and subjects. We have expertise working on various genres, including dissertations, theses, essays, and research papers. They pay heed to you and develop one-of-a-kind, user-friendly content that achieves the intended objectives.</p>
                    <h3 className='mb-20'>Listed below are a few of the many perks of our Academic Writers</h3> 
                    <p className='mb-10'>
                        <strong className='text-decoration-underline'>Dedication</strong> Primary promise of our <Link to={`${process.env.PUBLIC_URL}/`} className='text-primary'>assignment help</Link> is to finish on schedule. This is one area where they are unwilling to budge.
                    </p>
                    <p className='mb-10'>
                        <strong className='text-decoration-underline'>Excellence</strong> One of our specialists' distinguishing characteristics is the competence to develop exceptional explanations with impeccable layouts and immaculate language.
                    </p>
                    <p className='mb-10'><strong className='text-decoration-underline'>Certification</strong> Having earned degrees from prestigious academic institutions all around the globe, our writers complement their experience to their knowledge.
                    </p>
                    <p><strong className='text-decoration-underline'>Uniqueness</strong> Each meticulously created assignment is filled with one-of-a-kind contributions from our specialists, putting our strategies in a class of their own.</p>
                </div>
                <div className='mt-40'>
                    <h3 className='text-center'>Perfect writer + Perfect Delivery <span className='text-warning'>=Perfect Score</span></h3>
                    <div className="row mt-40">
                        {expertData.map((data,index)=>(
                            <div className="col-md-6 mb-30">
                            <ExpertCard data={data}/>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
