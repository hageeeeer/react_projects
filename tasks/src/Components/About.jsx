import React, { forwardRef } from 'react'

function About(text,ref2) {
  return (
    <div className='bg-red-600 h-screen' ref={ref2}>About</div>
  )
}

export default forwardRef(About)
