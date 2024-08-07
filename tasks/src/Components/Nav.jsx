import React from 'react'

export default function Nav({handleClick,handleClick2}) {
  return (
    <div>Nav
         <p onClick={handleClick}>home</p>
         <p onClick={handleClick2}>about</p>
    </div>
  )
}
