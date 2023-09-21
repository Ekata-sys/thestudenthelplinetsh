import React from 'react'
import { Link } from 'react-router-dom'

export default function Offer() {
    return (
        <main>
            <div class="breadcrumb__area include-bg pt-200 pb-150 breadcrumb__overlay"
                data-background="assets/img/breadcrumb/breadcrumb-bg.jpg" style={{ backgroundImage: "url(./assets/img/breadcrumb/breadcrumb-bg.jpg)" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-xxl-12">
                            <div class="breadcrumb__content p-relative z-index-1">
                                <h3 class="breadcrumb__title">Offers</h3>
                                <div class="breadcrumb__list">
                                    <span ><Link className='text-white' to={`${process.env.PUBLIC_URL}/`}>Home</Link></span>
                                    <span class="dvdr text-white"><i class="fa-regular fa-angle-right"></i></span>
                                    <span>Offers</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-20">
                <div className="row">
                <div className="col-lg-7 my-auto">
                    <h2 className='mb-1'>BONZER! DISCOUNTS ON</h2>
                    <h2 className='text-danger'>Today offer for you </h2>
                    <table className='mt-20'>
                        <tbody>
                            <tr>
                                <td className='fs-5 pe-4 pb-3'><i class="fa-sharp fa-solid fa-book text-success"></i> Turnitin Report</td>
                                <td className='fs-5 pe-4 pb-3'><i class="fa-solid fa-shield-check text-success"></i> 100% Plagiarism Free</td>
                            </tr>
                            <tr>
                                <td className='fs-5 pe-4 pb-3'><i class="fa-sharp fa-solid fa-eye text-success"></i> Proofreading & Editing</td>
                                <td className='fs-5 pe-4 pb-3'><i class="fa-sharp fa-solid fa-thumbs-up text-success"></i> A++ Guaranted</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-5">
                    <img src={`${process.env.PUBLIC_URL}/assets/img/offer-img.webp`} alt="" />
                </div>
                </div>
            </div>
            <div className="container mt-40 mb-40">
                <div className="row justify-content-center">
                    <div className="col md-4 px-3 px-lg-5 w-lg-75 w-100">
                        <div className="border rounded h-100 position-relative">
                            <div className="offer-header bg-success bg-opacity-10 p-3 p-lg-4">
                                <h3 className='text-center fw-bolder text-success'>First Time Users</h3>
                                <p className='mb-0 text-center'>114 Students Used Today</p>
                            </div>
                            <div className='px-3'>
                            <table className='mt-40'>
                                <tbody>
                                    <tr>
                                        <td className='pe-2 align-top fs-6'><i class="fa-sharp fa-light fa-shield-check text-success"></i></td>
                                        <td className='pb-4'>Gift yourself with free initial 500 words for availing the facility for atleast 2000 words.</td>
                                    </tr>
                                    <tr>
                                        <td className='pe-2 align-top fs-6'><i class="fa-sharp fa-light fa-shield-check text-success"></i></td>
                                        <td className='pb-4'>Enjoy $40 Off on availing the service for 2000 or more words.</td>
                                    </tr>
                                    <tr>
                                        <td className='pe-2 align-top fs-6'><i class="fa-sharp fa-light fa-shield-check text-success"></i></td>
                                        <td className='pb-4'>Get yourself with 2 assigments of more than 2500 word & second one is 100% off. No payment at all.</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className='text-center mb-4 position-relative' style={{bottom:"0"}}>
                                <Link className='btn btn-outline-success' to={`${process.env.PUBLIC_URL}/order`}>Redeem Now</Link>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col md-4 px-3 px-lg-5 w-lg-75 w-100">
                        <div className="border rounded h-100 position-relative">
                            <div className="offer-header bg-info bg-opacity-10 p-3 p-lg-4">
                                <h3 className='text-center fw-bolder text-info'>Existing Users</h3>
                                <p className='mb-0 text-center'>197 Students Used Today</p>
                            </div>
                            <div className='px-3'>
                            <table className='mt-40'>
                                <tbody>
                                    <tr className='mt-4'>
                                        <td className='pe-2 align-top fs-6'><i class="fa-sharp fa-light fa-shield-check text-success"></i></td>
                                        <td className='pb-4'>Get 100 words on absolute zero value by ordering for 3000 words.</td>
                                    </tr>
                                    <tr className='mt-4'>
                                        <td className='pe-2 align-top fs-6'><i class="fa-sharp fa-light fa-shield-check text-success"></i></td>
                                        <td className='pb-4'>Book 2 assignments for 3000 words each. And the second one is absolutely FREE!</td>
                                    </tr>
                                    <tr className='mt-4'>
                                        <td className='pe-2 align-top fs-6'><i class="fa-sharp fa-light fa-shield-check text-success"></i></td>
                                        <td className='pb-4'>Multiple Use Allowed</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className='text-center mb-4 position-absolute' style={{bottom:"0",left:"50%",transform:"translate(-50%)"}} >
                                <Link className='btn btn-outline-info' to={`${process.env.PUBLIC_URL}/order`}>Redeem Now</Link>
                            </div>
                            </div>  
                        </div>
                    </div>
                    <div className="col md-4 px-3 px-lg-5 w-lg-75 w-100">
                        <div className="border rounded h-100 position-relative">
                            <div className="offer-header bg-warning bg-opacity-10 p-3 p-lg-4">
                                <h3 className='text-center fw-bolder text-warning'>Bulk Orders</h3>
                                <p className='mb-0 text-center'>89 Students Used Today</p>
                            </div>
                            <div className='px-3'>
                            <table className='mt-40'>
                                <tbody>
                                    <tr className='mt-4'>
                                        <td className='pe-2 align-top fs-6'><i class="fa-sharp fa-light fa-shield-check text-success"></i></td>
                                        <td className='pb-4'>Spam us with your work for more than 5000 words and get 50% off..</td>
                                    </tr>
                                    <tr className='mt-4'>
                                        <td className='pe-2 align-top fs-6'><i class="fa-sharp fa-light fa-shield-check text-success"></i></td>
                                        <td className='pb-4'>Spam us with your work for more than 5000 words and get 50% off.</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className='text-center mb-4 position-absolute' style={{bottom:"0",left:"50%",transform:"translate(-50%)"}}>
                                <Link className='btn btn-outline-warning' to={`${process.env.PUBLIC_URL}/order`}>Redeem Now</Link>
                            </div>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-4">
                <div className="row">
                    <div className="col-md-3 ">
                        <div className="border rounded p-2 ">
                            <div className="dotted-border rounded p-3">
                                <h3 className='text-danger'>10% Off</h3>
                                <p>Book Now and Get 10% Off on Next Order Hurry Now!!</p>
                                <Link className='btn btn-warning text-center' to={`${process.env.PUBLIC_URL}/order`}>Grab It Now</Link>
                            </div>
                        </div> 
                    </div>
                    <div className="col-md-3">
                    <div className="border rounded p-2 ">
                            <div className="dotted-border rounded p-3">
                                <h3 className='text-danger'>15% Off</h3>
                                <p>Order Your First Assignment & Get 500 Words Free</p>
                                <Link className='btn btn-warning text-center' to={`${process.env.PUBLIC_URL}/order`}>Grab It Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="border rounded p-2 ">
                            <div className="dotted-border rounded p-3">
                                <h3 className='text-danger'>100% Off</h3>
                                <p>Book 5 Copies of an Assignment and Get 1 Absolutely Free</p>
                                <Link className='btn btn-warning text-center' to={`${process.env.PUBLIC_URL}/order`}>Grab It Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                    <div className="border rounded p-2 ">
                            <div className="dotted-border rounded p-3">
                                <h3 className='text-danger'>50% Off</h3>
                                <p>Book 5 Copies of an Assignment and Get 1 Absolutely Free</p>
                                <Link className='btn btn-warning text-center' to={`${process.env.PUBLIC_URL}/order`}>Grab It Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="px-3 pt-3 ps-lg-5">
                        <h3>Why Choose</h3>
                        <h4 className='text-danger'>Our Services ?</h4>
                        <p>We provide you with a premium experience in not so premium range. Along with affordable rates, zero plagiarism and originality of content are assured. Be it research, drafting, structuring, design, or proofreading, our experts are holding the badge for years and excel at all of them. Never letting down our customers and gifting them with the best solutions is our only axiom.</p>
                        <p>Delivering excellence with the best quality and timely service to you, up to your expectation is our priority. Approaching our customers with a customer-centric approach, we prioritize your priority. Be it any discipline, our experts are proficient.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex justify-content-end">
                        <img src={`${process.env.PUBLIC_URL}/assets/img/Online report-pana.png`} width={320} alt="" />
                    </div>
                </div>
            </div>
        </main>
    )
}
