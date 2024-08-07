import React, { forwardRef } from 'react'

 function Home({text},ref) {
  return (
    <div className='bg-cyan-500 h-screen' ref={ref} >Home {text}</div>
  )
}

export default forwardRef(Home)
