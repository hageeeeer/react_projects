import React, { forwardRef } from 'react'
import img from '../assets/happyTeam.jpeg'
import { TypeAnimation } from 'react-type-animation';
import Navbar from './Navbar';
 function Home({handleFeaturedClick,handlepriceClick,text,handleproductClick},ref) {
    return (

        <div ref={ref} className="row  md:gap-0  gap-20" >
            <div className='md:w-1/2'>
               <div className="w-2/3 mx-auto">
               <Navbar handleproductClick={handleproductClick} handlepriceClick={handlepriceClick} handleFeaturedClick={handleFeaturedClick}/>
               </div>
                <div className="md:w-2/3 w-full px-2  text-left mx-auto flex flex-col  justify-center h-full">
                   
                    <TypeAnimation
                        sequence={[
                            'Use me as your landing page',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'React Js',
                            1000,
                          'Software Developing',
                            1000,
                           'Frontend developer',
                            1000
                        ]}
                        wrapper="h2"
                        speed={50}
                        style={{ fontSize: '1.5em', display: 'inline-block' }}
                        repeat={Infinity}
                        className='text-red-500'
                    
                    />
                    
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                    <button className='bg-red-700 text-white p-1 my-4 rounded'>get started</button>
                </div>
            </div>
            <div className='md:w-1/2'>
                <div className='md:block hidden  h-[500px]' style={{ clipPath: "polygon(28% 0, 100% 0, 100% 100%, 0% 100%)" }} >
                    <img src={img} alt="" className='w-full'/>
                </div>
                <div className='md:hidden block'>
                <img src={img} alt=""  className='w-full'/>
                </div>
            </div>
        </div>

    )
}

export default forwardRef(Home)