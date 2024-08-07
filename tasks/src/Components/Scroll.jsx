import React, { useRef } from 'react'
import Home from './Home'
import About from './About'
import Nav from './Nav'

export default function Scroll() {

    let ref = useRef(null)
    let ref2 = useRef(null)
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };
    const handleClick2 = () => {
        ref2.current?.scrollIntoView({ behavior: 'smooth' });
    };


    function Top()
    {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
    }
    return (
        <div>Scroll
           <Nav handleClick={handleClick} handleClick2={handleClick2}></Nav>
            <Home text='hello world' ref={ref}></Home>
            <About text='' ref={ref2}></About>
            <button onClick={Top}>to top</button>
        </div>
    )
}
