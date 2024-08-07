import React, { useEffect, useState } from 'react'
import FeaturedProduct from './FeaturedProduct'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Products() {
  let [cat, setCat] = useState([])
  let [filterProducts, setfilterProducts] = useState([])
  function getCategories() {
    axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      .then(({ data }) => {
        setCat(data?.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function getProductsByCat(id) {
    axios.get(`https://ecommerce.routemisr.com/api/v1/products?category[in]=${id}`)
      .then(({ data }) => {
        setfilterProducts(data?.data);
      })
      .catch((err) => {
        console.log(err);

      })
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (<div className='flex py-5'>
    <ul className='my-5 p-4'>
      {cat.map(ele => <li onClick={() => { getProductsByCat(ele._id) }} className='hover:underline cursor-pointer' key={ele.key}>{ele.name}</li>)}
    </ul>
    {filterProducts.length ? 
    
    <div className="row-tw">
                    {
                        filterProducts.map((prod) => <SingleProduct key={prod.id} prod={prod}></SingleProduct>)}
                </div>
    :
      <FeaturedProduct></FeaturedProduct>
    }
  </div>
  )
}

/////////////// single product

function SingleProduct({ prod }) {
  return <div className='w-1/6 p-4'>
      <div className="product">
          <Link to={`/productdetails/${prod.id}/${prod.category.name}`} >
              <img src={prod?.imageCover} className='w-100' alt="product" />
              <p className='text-green-700'>{prod?.category?.name}</p>
              <p className='line-clamp-1'>{prod.title}</p>
              <div className='flex justify-between py-4'>
                  <span>{prod.price} EGP</span>
                  <span><i className='fas fa-star text-yellow-500'></i> {prod.ratingsAverage} </span>
              </div>
          </Link>
          <button className='btn'>Add to product</button>
      </div>
  </div>
}

