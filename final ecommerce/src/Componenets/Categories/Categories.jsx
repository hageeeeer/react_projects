import React, { useEffect } from 'react'
import { useFetch } from '../../useFetch'

export default  function Categories() {

 
 
    let x =  useFetch('https://ecommerce.routemisr.com/api/v1/categories')
    

  
  useEffect(()=>{
    console.log(x);
  },[])
  return (
    <div>Categories</div>
  )
}
