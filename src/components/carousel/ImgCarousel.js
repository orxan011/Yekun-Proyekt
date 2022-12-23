import React from 'react'
import './ImgCarouselStyles.css'

import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'

function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <Carousel className='carousel' showArrows={true} autoPlay={false} 
            infiniteLoop={true} 
            >
                <div>
                    <img src={BoraBora} alt='/sekil' />
                    <p className="legend">Novxanı Çimerliyi </p>
                </div>
                <div>
                    <img src={BoraBora2} alt='/sekil' />
                    <p className="legend">Sumqayıt Çimerliyi </p>
                </div>
                <div>
                    <img src={Maldives} alt='/sekil' />
                    <p className="legend">Ceyranbatan Gölü </p>
                </div>
            </Carousel>
        </div>


    )
}

export default ImgCarousel
