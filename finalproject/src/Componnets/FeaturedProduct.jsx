import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loading from './Loading'
import NetworkError from './NetworkError'
export default function FeaturedProduct() {


    let [loading, setLoading] = useState(false)
    let [msg, setMsg] = useState('')
    let [products, setProducts] = useState([])
    function getProducts() {
        setLoading(true)
        axios.get('https://ecommerce.routemisr.com/api/v1/products')
            .then(({ data }) => {
                setProducts(data?.data);
                setMsg('')
                setLoading(false)
            })
            .catch((err) => {
                setMsg(err?.message);
                setLoading(false)
            })
    }

    useEffect(() => {
        getProducts()
    }, [])

    if (loading)
        return <Loading></Loading>

    if (msg)
        return <NetworkError msg={msg}></NetworkError>

    if (products.length)
        return <>
            <div className="container">
                <div className="row-tw">
                    {
                        products.map((prod) => <SingleProduct key={prod.id} prod={prod}></SingleProduct>)}
                </div>
            </div>
        </>
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

