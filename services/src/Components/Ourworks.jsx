import React from 'react'
import appliance from '../assets/images/icons image/appliance.webp'
import cleaning from '../assets/images/icons image/cleaning.png'
import painting from '../assets/images/icons image/painting.png'
import pest from '../assets/images/icons image/pest control.png'
import ac from '../assets/images/icons image/ac services.png'
import plumbing from '../assets/images/icons image/plumbing.webp'
import cctv from '../assets/images/icons image/cctv.webp'
import ele from '../assets/images/icons image/electrical.webp'
import carpenter from '../assets/images/icons image/carpenter.webp'
import saloon from '../assets/images/icons image/saloon.png'

function Ourworks() {
    return (
        <section id='Services'>

            <div className='container '>
                <h5 className='heading-title heading7 text-center mb-2 py-3'>Our Services</h5>
                <h4 className='heading7 text-center ' style={{ color: "#ecd5c5" }}>Fully List of our Services</h4>

                <div className='row pt-3 d-flex justify-content-center'>
                    <div className='col-md-2'>
                        <div className='card text-center pt-3'>
                            <div>
                                <img src={appliance} alt="" className='img-fluid w-50' />
                            </div>
                            <p className='pt-2 heading6'>Appliance</p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='card text-center pt-3'>
                            <div>
                                <img src={cleaning} alt="" className='img-fluid w-50' />
                            </div>
                            <p className='pt-2 heading6'>Cleaning</p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='card text-center pt-3'>
                            <div>
                                <img src={painting} alt="" className='img-fluid w-50' />
                            </div>
                            <p className='pt-2 heading6'>Painting</p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='card text-center pt-3'>
                            <div>
                                <img src={pest} alt="" className='img-fluid w-50' />
                            </div>
                            <p className='pt-2 heading6'>Pest control</p>
                        </div>
                    </div>
                </div>

                <div className='row pt-3 d-flex justify-content-center'>
                    <div className='col-md-2'>
                        <div className='card text-center pt-3'>
                            <div>
                                <img src={cctv} alt="" className='img-fluid w-50' />
                            </div>
                            <p className='pt-2 heading6'>CCTV</p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='card text-center pt-3'>
                            <div>
                                <img src={plumbing} alt="" className='img-fluid w-50' />
                            </div>
                            <p className='pt-2 heading6'>Plumbing</p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='card text-center pt-3'>
                            <div>
                                <img src={ele} alt="" className='img-fluid w-50' />
                            </div>
                            <p className='pt-2 heading6'>Electrical</p>
                        </div>
                    </div>
                </div>

                <div className='row pt-3 d-flex justify-content-center'>
                    <div className='col-md-2'>
                        <div className='card text-center pt-3'>
                            <div>
                                <img src={carpenter} alt="" className='img-fluid w-50' />
                            </div>
                            <p className='pt-2 heading6'>Carpenter</p>
                        </div>
                    </div>
                    <div className='col-md-2'>
                        <div className='card text-center pt-3'>
                            <div>
                                <img src={saloon} alt="" className='img-fluid w-50' />
                            </div>
                            <p className='pt-2 heading6'>Saloon</p>
                        </div>
                    </div>
                </div>

                <div className='row pt-3 d-flex justify-content-center'>
                    <div className='col-md-2'>
                        <div className='card text-center pt-3'>
                            <div>
                                <img src={ac} alt="" className='img-fluid w-50' />
                            </div>
                            <p className='pt-2 heading6'>AC Services</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Ourworks