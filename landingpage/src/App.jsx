import React, { useRef } from 'react'
import Header from './Components/Header'
import Home from './Components/Home'

import Product from './Components/Product'
import Featured from './Components/Featured'
import Pricing from './Components/Pricing'

export default function App() {
  const featuredRef = useRef(null)
  const productRef = useRef(null)
  const homeRef = useRef(null)
  const priceRef = useRef(null)
  // handle funs click
  function handleFeaturedClick() { featuredRef.current?.scrollIntoView({ behavior: 'smooth' }) }
  function handlepriceClick() { priceRef.current?.scrollIntoView({ behavior: 'smooth' }) }
  function handleproductClick() { productRef.current?.scrollIntoView({ behavior: 'smooth' }) }
  function handlehomeClick() { homeRef.current?.scrollIntoView({ behavior: 'smooth' }) }
  return (
    <>
      <Header   />
      <Home ref={homeRef} text='' handlepriceClick={handlepriceClick} handleproductClick={handleproductClick} handleFeaturedClick={handleFeaturedClick} handlehomeClick={handlehomeClick} />
      <Product text='' ref={productRef} />
      <Featured text='' ref={featuredRef} />
      <Pricing text='' ref={priceRef} />
    </>
  )
}
