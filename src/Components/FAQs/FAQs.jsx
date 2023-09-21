import React from 'react'
import { Link } from 'react-router-dom'

export default function FAQs() {
    const numbers = ['One', "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten"]
    const accr1 = [{
        title: "How Will I Receive My Assignment Work?",
        content: "All work will be delivered to your E-mail, WhatsApp, or any other way you prefer."
    },
    {
        title: "What Other Information Do You Require?",
        content: "Word count for the topic, deadline, reference type, and grading standards"
    },
    {
        title: "Tell Me About Your Services?",
        content: "Yes, of course! Our programs revolve around delivering comprehensive written assignments to students. This is accomplished by our team of professionals, who create original, plagiarism-free, and high-quality content."
    },
    {
        title: "What Method Do You Use To Match My Requirements?",
        content: "We collaborate with some of the profession's greatest writers. We review your content specifications and requirements and pair you with the right writer who can meet your needs."
    }, {
        title: "What Are The Subjects That The Experts Are Involved In?",
        content: "Our experts will help you with whatever you want to learn at college, school, university, or any other educational institution."
    }]
    const accr2 = [{
        title: "How Does The 100% Money-Back Promise Work?",
        content: "If you find plagiarism exceeding the acceptable percentage, you will receive a refund as well as a rework."
    },
    {
        title: "Is My Privacy Secured?",
        content: "We collect and maintain all of your information in absolute confidence. We never share client information with others because we value customer privacy and are dedicated to protecting your sensitive information when you visit our website or seek our services."
    },
    {
        title: "How Can I Put My Faith In You When It Comes To Money?",
        content: "When you make a purchase, you will be given an order confirmation code. With a firewall and various authentication solutions, we ensure that the most reliable and secure payment gateway is used."
    },
    {
        title: "How Are The Rates Decided?",
        content: "After carefully reviewing your topic, deadline, and specifications, our writers will provide you with the most appropriate price."
    }, {
        title: "How Safe Is My Account And Credit Card Information When I Use Your Website To Make An Online Payment?",
        content: "For all payments, we use a protected payment gateway. As a result, there is no need to be concerned about the protection of your credit card or bank account information."
    }]
    const accr3 = [{
        title: "When Will My Work Be Delivered?",
        content: "In most cases, we aim to finish the job a day ahead of schedule, but in the event of a tight deadline, all work will be delivered on the same day."
    },
    {
        title: "How Can I Get A Hold Of My Material Orders?",
        content: "For each content request, we will give you doc/pdf files via email/The Student Helpline Student Dashboard. To access the files, all you have to do is click on them."
    },
    {
        title: "Is It Possible For You To Promise Plagiarism-Free Scholarly Work?",
        content: "Yes. We attach a plagiarism-check report along with the assignment."
    },
    {
        title: "Who Are Your Writers?",
        content: "Our subject specialists cum writers are selected from different countries and have earned Master's or Ph.D. qualifications from reputable institutions."
    },
    {
        title: "Who Are Your Writers?",
        content: "Yes. Just send your assignment code and our sales team will forward it to the writer and he/she will contact you asap."
    },
    {
        title: "What Happens If We Do Not Complete The Job By The Deadline?",
        content: "You will get the material for free if we fail to deliver it on schedule. Even so, we haven't ever breached a target and have never been known to submit work late."
    }]
    const accr4 = [{
        title: "Can I Avail Of Installment Payments For My Purchase At The Student Helpline?",
        content: "Yes. After completing the assignment order form, you may select the partial payment method on the checkout page."
    },
    {
        title: "What Should I Do If I Am Failing To Access The Student Helpline Services Student Dashboard?",
        content: "The password you provided may be wrong. You may get it back by clicking the forgot password button."
    },
    {
        title: "Is It Possible To Seek Your Services At Late Night?",
        content: "We have the finest client service employees available to aid you at any time of day or night. You can either use our live chat option, email or, WhatsApp to contact us 24/7."
    },
    {
        title: "If My Topic Is Not Mentioned On Your Homepage, Can Your Specialists Still Complete My Assignment?",
        content: "Yes, the compilation is focused on some of Australia's most common fields of study. So, even if you cannot locate it on our site, do not fret our group of specialists covers every topic, including this one."
    },
    {
        title: "How Can I Keep Track Of My Order Status At The Student Helpline Student Dashboard?",
        content: "Log in to your account and select the Track Your Order option."
    }]
    return (
        <main>
            <div className="breadcrumb__area include-bg pt-200 pb-150 breadcrumb__overlay"
                data-background="assets/img/breadcrumb/breadcrumb-bg.jpg" style={{ backgroundImage: "url(./assets/img/breadcrumb/breadcrumb-bg.jpg)" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__content p-relative z-index-1">
                                <h3 className="breadcrumb__title">FAQs</h3>
                                <div className="breadcrumb__list">
                                    <span><Link to="/">Home</Link></span>
                                    <span className="dvdr"><i className="fa-regular fa-angle-right"></i></span>
                                    <span>FAQs</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Stat Here */}
            <div className="sd-accordio-area  pt-80 pb-130">
                <div className="container">
                    <ul className="nav nav-tabs mb-40" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active fs-5 fw-bold text-info" id="faqs-tab" data-bs-toggle="tab" data-bs-target="#faqs" type="button" role="tab" aria-controls="faqs" aria-selected="true">Frequently Asked Questions</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link fs-5 fw-bold text-info" id="Payment-tab" data-bs-toggle="tab" data-bs-target="#Payment" type="button" role="tab" aria-controls="Payment" aria-selected="false">Payment Queries</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link fs-5 fw-bold text-info" id="assignment-tab" data-bs-toggle="tab" data-bs-target="#assignment" type="button" role="tab" aria-controls="assignment" aria-selected="false">Assignment Queries</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link fs-5 fw-bold text-info" id="portal-tab" data-bs-toggle="tab" data-bs-target="#portal" type="button" role="tab" aria-controls="portal" aria-selected="false">Portal Queries</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade show active" id="faqs" role="tabpanel" aria-labelledby="faqs-tab">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="tp-custom-accordio">
                                        <div className="accordion" id="accordionExample">
                                            {
                                                accr1.map((data, index) => (
                                                    <div className="accordion-items faq-accordio-border">
                                                        <h2 className="accordion-header" id="headingOne">
                                                            <button className="accordion-buttons" type="button" data-bs-toggle="collapse"
                                                                data-bs-target={"#collapse" + numbers[index]} aria-expanded="true" aria-controls={"collapse" + numbers[index]}>
                                                                {data.title}
                                                            </button>
                                                        </h2>
                                                        <div id={"collapse" + numbers[index]} className="accordion-collapse collapse show" aria-labelledby={"heading" + numbers[index]}
                                                            data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                {data.content}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="Payment" role="tabpanel" aria-labelledby="Payment-tab">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="tp-custom-accordio">
                                        <div className="accordion" id="accordionExample">
                                            {
                                                accr2.map((data, index) => (
                                                    <div className="accordion-items faq-accordio-border">
                                                        <h2 className="accordion-header" id="headingOne">
                                                            <button className="accordion-buttons" type="button" data-bs-toggle="collapse"
                                                                data-bs-target={"#collapse" + numbers[index]} aria-expanded="true" aria-controls={"collapse" + numbers[index]}>
                                                                {data.title}
                                                            </button>
                                                        </h2>
                                                        <div id={"collapse" + numbers[index]} className="accordion-collapse collapse show" aria-labelledby={"heading" + numbers[index]}
                                                            data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                {data.content}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="assignment" role="tabpanel" aria-labelledby="assignment-tab">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="tp-custom-accordio">
                                        <div className="accordion" id="accordionExample">
                                            {
                                                accr3.map((data, index) => (
                                                    <div className="accordion-items faq-accordio-border">
                                                        <h2 className="accordion-header" id="headingOne">
                                                            <button className="accordion-buttons" type="button" data-bs-toggle="collapse"
                                                                data-bs-target={"#collapse" + numbers[index]} aria-expanded="true" aria-controls={"collapse" + numbers[index]}>
                                                                {data.title}
                                                            </button>
                                                        </h2>
                                                        <div id={"collapse" + numbers[index]} className="accordion-collapse collapse show" aria-labelledby={"heading" + numbers[index]}
                                                            data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                {data.content}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="portal" role="tabpanel" aria-labelledby="portal-tab">
                            <div className="row">
                                <div className="col-xl-12">
                                    <div className="tp-custom-accordio">
                                        <div className="accordion" id="accordionExample">
                                            {
                                                accr4.map((data, index) => (
                                                    <div className="accordion-items faq-accordio-border">
                                                        <h2 className="accordion-header" id="headingOne">
                                                            <button className="accordion-buttons" type="button" data-bs-toggle="collapse"
                                                                data-bs-target={"#collapse" + numbers[index]} aria-expanded="true" aria-controls={"collapse" + numbers[index]}>
                                                                {data.title}
                                                            </button>
                                                        </h2>
                                                        <div id={"collapse" + numbers[index]} className="accordion-collapse collapse show" aria-labelledby={"heading" + numbers[index]}
                                                            data-bs-parent="#accordionExample">
                                                            <div className="accordion-body">
                                                                {data.content}
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))
                                            }
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
