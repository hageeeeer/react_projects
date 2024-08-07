import React, { useContext } from 'react'
import { counter } from '../Context/CounterContext'

export default function Brand() {
  let {count,increase} = useContext(counter)
  return (
    <>
    <h1>Brand</h1>
    <h1 onClick={increase}>counter:{count}</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa harum ullam cumque suscipit inventore quaerat nesciunt, et excepturi, neque reprehenderit labore doloremque explicabo magni, facere voluptate! Rerum sed sequi vitae.</p>
    </>
  )
}
