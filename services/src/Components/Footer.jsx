import React from 'react'
import fb from '../assets/images/icons image/fb.png'
import insta from '../assets/images/icons image/insta.png'
import twitter from '../assets/images/icons image/twitter.png'
import whatsapp from '../assets/images/icons image/whatsapp.png'
import youtube from '../assets/images/icons image/youtube.png'

function Footer() {
    return (
        <section>
            <div className='bg-primary'>
                <div className='row'>
                    <div className='col-md-4'>
                        <h1>Home Services</h1>
                    </div>
                    <div className='col-md-4'>
                        <div>
                            <h4>All Types Of Home Services Avaliable </h4>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className=' text-center'>

                            <img src={fb} alt="" className='img-fluid footer-icon' />

                            <img src={insta} alt="" className='img-fluid footer-icon' />

                            <img src={twitter} alt="" className='img-fluid footer-icon' />

                            <img src={whatsapp} alt="" className='img-fluid footer-icon' />

                            <img src={youtube} alt="" className='img-fluid footer-icon' />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer