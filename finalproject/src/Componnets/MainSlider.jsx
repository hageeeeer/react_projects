import React from 'react'
import mainImg from '../assets/finalProject assets/images/slider-image-3.jpeg'
import slide1 from '../assets/finalProject assets/images/slider-image-1.jpeg'
import slide2 from '../assets/finalProject assets/images/slider-image-2.jpeg'
import Slider from 'react-slick'
export default function MainSlider() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        arrows:false
      };
    return (
        <>
            <div className="row-tw">
                <div className="w-3/4">
                    <Slider {...settings}>
                        <img src={mainImg} className='w-full h-[400px]' alt="" />
                        <img src={mainImg} className='w-full h-[400px]' alt="" />
                        <img src={mainImg} className='w-full h-[400px]' alt="" />
                    </Slider>
                </div>
                <div className="w-1/4">
                    <img src={slide1} className='w-full h-[200px]' alt="" />
                    <img src={slide2} className='w-full h-[200px]' alt="" />
                </div>
            </div>
        </>
    )
}
