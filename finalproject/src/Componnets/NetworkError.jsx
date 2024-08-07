import React from 'react'
import img from '../assets/finalProject assets/netwrokerror.svg'
export default function NetworkError({msg}) {
  return (
    <div className='py-5 text-red-500 text-center'>
    <h2 className='text-2xl mt-5'>  {msg}</h2>
    <img className='w-1/2 mx-auto' src={img} alt="network error" />
    </div>
  )
}
