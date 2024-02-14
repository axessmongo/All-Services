import React from 'react'
import about from '../assets/images/about.jpg'
import sider from '../assets/images/sider.jpg'
import carpenter from '../assets/images/carpenter.jpg'
import cleaning from '../assets/images/cleaning.jpg'
import image1 from '../assets/images/image2.png'
import fb from '../assets/images/fb.png'
import insta from '../assets/images/insta.png'
import whatsapp from '../assets/images/whatsapp.png'
export default function About() {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col-md-6 mt-4 ">
                        <h5 className='heading-title heading7 '>About Us</h5>
                        <h4 className='heading7 text-center ' style={{ color: "#ecd5c5" }}>Repairs And Maintenance You Call It</h4>
                        <p className='heading5 mt-4'>Morbi tempus purus vel tellus hendrerit porttitor. Cras blandit odio urna, ac hendrerit turpis dignissim et. In at eros porttitor, blandit ligula id, ornare nibh. Phasellus ut lectus ligula. Fusce pharetra erat lorem, at suscipit leo luctus a. Vivamus ut velit quis arcu eleifend dapibus et et lacus. Sed ac felis et magna vehicula sagittis. Integer efficitur, nibh eu congue bibendum, libero libero mollis leo, ac ornare nisl purus sed orci.</p>
                        <div className='text-center heading5'>
                            <button className='' >
                                <a className=' px-4 py-2 btn1' href='tel:9092570489' target="_blank" style={{ textDecoration: "none", color: "black" }}>Contact Us
                                    <i class="bi bi-arrow-right "></i></a>
                            </button>
                        </div>
                    </div>
                    <div className="col-md-6  py-5 ">
                        <div class="about-warp-image">
                            <img src={carpenter} alt="image" className='img2' />
                            <img src={cleaning} alt="image" className='img3' />

                            <div class="about-years">
                                <h5>35</h5>
                                <span>Years</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* about us */}
            <section>
                <div className='mt-4 text-center'>
                    <h5 className='heading-title heading7'>Quality Work Every Time</h5>
                    <p className='heading4 mt-3'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 mt-5">
                                <div className="element-with-mask img4">
                                    <img src={sider} alt="" className='img-fluid img4 border border-secondary mask-effect' />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className='icon mt-3'>
                                    <h3 className='heading7' style={{ color: "#ecd5c5" }}>Why Choose Us</h3>
                                    <div className='mt-4 text-center icon1 heading4'>
                                        <p><i class="bi bi-check2-square"></i> Connects you Verified Trained Technicians.</p>
                                        <p><i class="bi bi-person-vcard"></i> Provides Exceptional Customer Assistance.</p>
                                        <p><i class="bi bi-shield-shaded"></i> Ensure Guarante Safe Secure Transactions.</p>
                                        <p><i class="bi bi-hand-thumbs-up"></i> Provides High-quality, Reliability and Safety.</p>
                                        <p><i class="bi bi-wallet-fill"></i> Ensures a Guarantees Economic Efficiency.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>


            {/* Services */}
            <div className="container">
                <h3 className='heading-title heading7 text-center mt-4'>Our Works</h3>
                <p className='heading4 mt-3 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <div className='background-overlay mt-4'>
                    <div className="row">

                        <div class="col-lg-4 col-md-6">

                            <div class="single-services-item ">
                                <div class="icon">
                                    <i class="bi bi-building"></i>

                                </div>

                                <h3>
                                    <a href="/ " className='heading6'>Apartment Design</a>
                                </h3>
                                <p className='primary-title heading4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolo.</p>
                                <a href="services-details.html" class="learn-btn">
                                    Learn More
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <div class="single-services-item">
                                <div class="icon">
                                    <i class="bi bi-lightbulb"></i>
                                </div>

                                <h3>
                                    <a href="/" className='heading6'>Electrical Services</a>
                                </h3>
                                <p className='primary-title heading4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolo.</p>
                                <a href="services-details.html" class="learn-btn">
                                    Learn More
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div> <div class="col-lg-4 col-md-6">
                            <div class="single-services-item">
                                <div class="icon">
                                    <i class="bi bi-people"></i> </div>
                                <h3>
                                    <a href="/" className='heading6'>Plumbing Services</a>
                                </h3>
                                <p className='primary-title heading4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolo.</p>
                                <a href="services-details.html" class="learn-btn">
                                    Learn More
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div> <div class="col-lg-4 col-md-6">
                            <div class="single-services-item">
                                <div class="icon">
                                    <i class="bi bi-paint-bucket"></i>
                                </div>

                                <h3>
                                    <a href="/" className='heading6'>Painting Services</a>
                                </h3>
                                <p className='primary-title heading4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolo.</p>
                                <a href="services-details.html" class="learn-btn">
                                    Learn More
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div> <div class="col-lg-4 col-md-6">
                            <div class="single-services-item">
                                <div class="icon">

                                    <i class="bi bi-house"></i>

                                </div>

                                <h3>
                                    <a href="/" className='heading6' style={{ textDecoration: "none" }}>carpentary Services</a>
                                </h3>
                                <p className='primary-title heading4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolo.</p>
                                <a href="services-details.html" class="learn-btn">
                                    Learn More
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div> <div class="col-lg-4 col-md-6">
                            <div class="single-services-item">
                                <div class="icon">
                                    <i class="bi bi-wrench"></i>
                                </div>
                                <h3>
                                    <a href="/" className='heading6' >Repairing Services</a>
                                </h3>
                                <p className='primary-title heading4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor dolo.</p>
                                <a href="services-details.html" class="learn-btn">
                                    Learn More
                                    <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            {/* Help with you */}
            <section className='container boxing'>
                {/* <h3> what can help with you?</h3> */}
                <div className="primary-mb">
                    <section className="whatwedo overflow-hidden" id="whatwedo">
                        <div className="container overflow-hidden overflow-lg-visible">
                            <div className="position-relative">
                                <h5 className='heading-title heading7 text-center mt-5'>What Can Help with you? </h5>

                                <div className="row align-items-center justify-content-center">
                                    <div className="col-lg-4 left-sec">
                                        <div data-aos="fade-right" data-aos-duration="400" className='card3 float-end animated-box'>
                                            <div
                                                className="card2  border-0 mb-5 d-flex"
                                                // to="#smokemodelling"
                                                data-bs-toggle="offcanvas"
                                            >
                                                <div className="d-flex mt-4 align-items-center justify-content-center">
                                                    <div>
                                                        <div class="icon21 mt-4">
                                                            <i class="bi bi-fire"></i>

                                                        </div>
                                                        <div className="card-body pt-2 mt-2">
                                                            <h5 className="card-title text-capitalize mb-0 heading6">
                                                                Energy
                                                            </h5>
                                                            <p className='primary-title heading4'>See our energy products and services available to you.</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div data-aos="fade-right" data-aos-duration="400" className='card3 float-end animated-box'>
                                            <div
                                                className="card2  border-0 mb-5 d-flex  "
                                                // to="#smokemodelling"
                                                data-bs-toggle="offcanvas"
                                            >
                                                <div className="d-flex mt-4 align-items-center justify-content-center">
                                                    <div>
                                                        <div class="icon21 mt-4">
                                                            <i class="bi bi-house-door-fill"></i>

                                                        </div>
                                                        <div className="card-body pt-2 mt-2">
                                                            <h5 className="card-title text-capitalize mb-0 heading6">
                                                                Home Services
                                                            </h5>
                                                            <p className='primary-title heading4'>See our energy products and services available to you.</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>


                                    </div>

                                    <div
                                        className="col-lg-4 d-none d-lg-flex d-flex justify-content-center align-items-center"
                                    >
                                        <div className="bgimage-holder">

                                            <img src={image1} alt="" className='img-fluid text-center img5 w-100 h-100' />

                                        </div>
                                    </div>

                                    <div className="col-lg-4 mt-3 right-sec">
                                        <div data-aos="fade-right" data-aos-duration="400" className='card3 animated-box'>
                                            <div
                                                className="card2  border-0 mb-5 d-flex  "
                                                // to="#smokemodelling"
                                                data-bs-toggle="offcanvas"
                                            >
                                                <div className="d-flex mt-4 align-items-center justify-content-center">
                                                    <div>
                                                        <div class="icon21 mt-4">
                                                            <i class="bi bi-house-door-fill"></i>

                                                        </div>
                                                        <div className="card-body pt-2 mt-2">
                                                            <h5 className="card-title text-capitalize mb-0 heading6">
                                                                Renovation
                                                            </h5>
                                                            <p className='primary-title heading4'>Enjoy the benefits of smart meters </p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                        <div data-aos="fade-right" data-aos-duration="400" className='card3 animated-box'>
                                            <div
                                                className="card2  border-0 mb-5 d-flex  "
                                                // to="#smokemodelling"
                                                data-bs-toggle="offcanvas"
                                            >
                                                <div className="d-flex mt-4 align-items-center justify-content-center">
                                                    <div>
                                                        <div class="icon21 mt-4">
                                                            <i class="bi bi-ev-station"></i>

                                                        </div>
                                                        <div className="card-body mt-2 pt-2">
                                                            <h5 className="card-title text-capitalize mb-0 heading6">
                                                                Roofing
                                                            </h5>
                                                            <p className='primary-title heading4'>Choose a category to find the best.</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className='d-lg-flex d-flex justify-content-center align-items-center position-relative'>
                                            <div data-aos="fade-right" data-aos-duration="400" className='card3 animated-box'>
                                                <div
                                                    className="card2 border-0 mb-5 d-flex  "
                                                    data-bs-toggle="offcanvas"
                                                >
                                                    <div className="d-flex mt-4 align-items-center justify-content-center">
                                                        <div>
                                                            <div className="icon21 mt-4">
                                                                <i class="bi bi-person-raised-hand"></i>
                                                            </div>
                                                            <div className="card-body mt-2 pt-3">
                                                                <h5 className="card-title text-capitalize mb-0 heading6">
                                                                    Help & Support
                                                                </h5>
                                                                <p className='primary-title heading4'>Choose a category to find the best way to contact us.</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="animated-dots"></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </section>
            {/* connect */}
            <footer>
                <section className=''>
                    <div className="connect mt-5">
                        <div className="text-center text-light docdiv ">
                            <div className="docpara mb-4">

                                <h5 className='heading-titl heading7 text-center mb-3' style={{ color: "black" }}>All Services Availble at very Low costs!!</h5>
                                <h4 className='heading-titl heading7 text-center mb-3 ' style={{ color: "black" }}>Be creative, Be effective</h4>
                                <div className='text-center heading5 mt-3'>
                                    <button className='' >
                                        <a className=' px-4 py-2 btn1' href='tel:9092570489' target="_blank" style={{ textDecoration: "none", color: "black" }}>Contact Us
                                            <i class="bi bi-arrow-right "></i></a>
                                    </button>
                                </div>
                                <div className='text-center mt-2 '>
                                    <a className='#' href='#'>
                                        <img src={insta} alt="" className='img-fluid footer-icons' />
                                        <img src={whatsapp} alt="" className='img-fluid footer-icons' />
                                        {/* <img src={twitter} alt="" className='img-fluid footer-icons' /> */}
                                        <img src={fb} alt="" className='img-fluid footer-icons' />
                                        {/* <img src={youtube} alt="" className='img-fluid footer-icons' /> */}
                                    </a>
                                    <h5 className='text-center heading3 mt-2' style={{ color: "black " }}>Copyrights timezone ©  All rights reserved.</h5>

                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}
