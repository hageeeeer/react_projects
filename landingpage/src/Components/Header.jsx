import React, {  useEffect } from 'react'
import video from '../assets/code.mp4'
import AOS from 'aos';
import 'aos/dist/aos.css'


function Header() {

  useEffect(function () {
    AOS.init();
  }, []
  )
  return (
    <header style={{ overflowX: 'hidden' }} >
      <video autoPlay muted loop className='h-[40vh] w-full object-cover'>
        <source src={video} type="video/mp4" />
      </video>


      <h1 data-aos="fade-right" data-aos-duration="1000" className='text-center my-3 text-4xl font-bold'>Hello <span className='text-red-500'>C</span>oding</h1>

    </header>
  )
}

export default Header