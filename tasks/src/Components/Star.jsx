import React, { useState } from 'react'
import { motion } from "framer-motion";
export default function Star({ numOfStar }) {
  let stars = []
  for (let i = 0; i < numOfStar; i++) {
    stars.push(i)
  }

  let [selected, setSelected] = useState(-1)
  let [click, setclick] = useState(-1)

  function handleMouseEnter(e) {
    setSelected(e.target.id)
  }

  function handleMouseLeave() {
    setSelected(click)
  }

  function handleClick(e) {
    setclick(e.target.id)
  }



  return (
    <div>
      <h2 className='text-center my-3'>Star</h2>
      <ul className='text-center'>

        {stars.map(ele =>
          <motion.i whileHover={{ scale: [null, 1.5, 1.4] }}
            transition={{ duration: 0.3 }} key={ele} id={ele} onMouseEnter={handleMouseEnter} className={`fas fa-star fa-2x mx-2 cursor-pointer  ${(ele <= click || ele <= selected) ? "text-yellow-400" : ''}  `} onClick={handleClick} onMouseLeave={handleMouseLeave}></motion.i>)}
      </ul>
    </div>
  )
}


