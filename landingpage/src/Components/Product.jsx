import React, { forwardRef } from 'react'
import img from '../assets/product1.jpg'
import productimg2 from '../assets/product2.jpg'
 function Product({text},ref) {

    return (
        <div className='py-4 px-4 md:px-0 md:w-[80%] mx-auto overflow-x-hidden' ref={ref}>
            <h1 className='text-2xl my-4 text-center'>React <span className='underline text-red-700'>landing page</span> 2024</h1>
            <div className='row items-center  gap-5 md:gap-0'>
                <div className="md:w-1/2"  data-aos="fade-right"    data-aos-duration="1000">
                    <h2 className='text-lg my-3'>A plug n play template</h2>
                    <p className='text-sm text-gray-500'>Just edit the config.json file with details about your company and voila your beautiful state of the art landing page is ready to go live! Remember to also update your assets, add any images you want to show to /assets/images and link them in the config.json</p>
                </div>
                <div className="md:w-1/2">
                    <img src={img} alt="team" className='w-[80%]' />
                </div>
            </div>
            <div className='row items-center gap-5 md:gap-0'>
                <div className="md:w-1/2 md:order-1    order-2">
                    <img src={productimg2} alt="team" className='w-[80%]' />
                </div>
                <div className="md:w-1/2   order-1"  data-aos="fade-left"    data-aos-duration="1000">
                    <h2 className='text-lg my-3'>Make it your own!</h2>
                    <p className='text-sm text-gray-500'>Play around with the theme.ts file and configure the color palette to match the branding of your company! If you're feeling wild, maybe change some tailwind css as well!</p>

                </div>
            </div>
        </div>
    )
}

export default forwardRef(Product)