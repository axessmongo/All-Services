import { useState } from 'react'
import carousel1 from '../assets/images/bike-carousel.jpg'
import carousel2 from '../assets/images/services-carousel2.jpeg'
import carousel3 from '../assets/images/services-carousel3.jpg'
import carousel4 from '../assets/images/services-carousel4.jpg'
import carousel5 from '../assets/images/car-carousel.jpg'
import carousel6 from '../assets/images/home-carousel.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

function Banner() {
    const [active, setActive] = useState(false)
    AOS.init({
        // Add your AOS options here
    });

    const [isZoomed, setIsZoomed] = useState(false);
    let gotoTop = (secID) => {
        const element = document.getElementById(secID);
        const navbarElement = document.querySelector('.navbar>.container-fluid');

        if (navbarElement) {
            var navHeight = navbarElement.clientHeight;
            // Use navHeight as needed
        }
        console.log(element)
        if (element) {
            const topPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top: topPosition - navHeight, behavior: 'smooth' });

        }

    }
    const handleZoom = () => {
        setIsZoomed(!isZoomed);
    };

    gotoTop();
    return (
        <section>
            <section className='' id='home'>
                <nav class="navbar navbar-expand-lg nav-banner" id=''>
                    <div class="container-fluid">
                        <a class="navbar-brand heading5" href="#" style={{color:"white"}}>Home<span style={{ color: "#f81f1f ", }}>Services</span></a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto text-center ">

                                <li class="nav-item heading5">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('home')} >Home</a>
                                </li>

                                <li class="nav-item heading5 ">
                                    <a class="nav-link active px-3 " aria-current="page" id='name-nav' onClick={() => gotoTop('about')}>About</a>
                                </li>

                                <li class="nav-item heading5">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('ourworks')} >Our Works</a>
                                </li>

                                <li class="nav-item heading5">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('Services')}>Services</a>
                                </li>

                                <li class="nav-item heading5 border-end">
                                    <a class="nav-link active px-3" aria-current="page" id='name-nav' onClick={() => gotoTop('contact')}>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </section>

            <div className='buy-now d-flex justify-content-center align-items-center rounded-2'>
                <a href="https://axesstechnology.in/contact" target='_blank'>
                <button className='buy-now-bt'>BuyNow</button></a>
            </div>

            <section className='' >
                <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={carousel1} class="d-block w-100 carousel-img" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={carousel5} class="d-block w-100 carousel-img" alt="..." />
                        </div>
                        <div class="carousel-item">
                            <img src={carousel6} class="d-block w-100 carousel-img" alt="..." />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </section>
    )
}

export default Banner