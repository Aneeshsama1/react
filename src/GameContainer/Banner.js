import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'
import image1 from '../images/1.jpg'
import image2 from '../images/3.jpg'
import image3 from '../images/4.jpg'
import './Banner.css'



const Banner = () => {
    return (
        <div className='wrapper'>
            <div className='inner'>
                <div className='deeper'>

            <AliceCarousel autoPlay autoPlayInterval='3000' disableButtonsControls
            keyboardNavigation>

                <img src={image1} className='imageB' />
                <img src={image3} className='imageB' />
                <img src={image2} className='imageB' />


            </AliceCarousel>
            </div>
            </div>

        </div>
    )
}

export default Banner;