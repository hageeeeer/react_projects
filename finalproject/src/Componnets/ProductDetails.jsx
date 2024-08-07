import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from './Loading'
import NetworkError from './NetworkError'
import { motion } from "framer-motion";
export default function ProductDetails() {

    let { id, category } = useParams()
    let [loading, setLoading] = useState(false)
    let [msg, setMsg] = useState('')
    let [product, setProduct] = useState(null)
    let [src, setSrc] = useState('')
    let [relatedProductsList, setrelatedProductsList] = useState([])


    function changeSrc(e) {
        setSrc(e.target.src)
    }


    function getProductDetail() {
        setLoading(true)
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
            .then(({ data }) => {
                setProduct(data?.data);
                setMsg('')
                setLoading(false)
            })
            .catch((err) => {
                setMsg(err?.message);
                setLoading(false)
            })
    }

    function getRelatedProduct() {
        setLoading(true)
        axios.get('https://ecommerce.routemisr.com/api/v1/products')
            .then(({ data }) => {
                let arr = data?.data?.filter(ele => ele.category.name == category)
                setrelatedProductsList(arr);
                setMsg('')
                setLoading(false)

            })
            .catch((err) => {
                setMsg(err?.message);
                setLoading(false)
            })
    }

    useEffect(() => {
        getProductDetail()
        getRelatedProduct()
    }, [])


    useEffect(()=>{
        getProductDetail()
    },[id,category])


    if (loading)
        <Loading></Loading>

    if (msg)
        <NetworkError></NetworkError>

    if (product)
        return (
            <div className='container '>
                <div className="row-tw items-center">
                    <div className="w-1/3">
                        <ul className='flex justify-center relative top-7'>
                            {product?.images?.map(img => <motion.li whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} key={img} ><img onClick={changeSrc} className='cursor-pointer' width={50} src={img} alt="" /></motion.li>)}
                        </ul>
                        <img src={src ? src : product?.imageCover} className='w-100' alt={product?.title} />
                    </div>
                    <div className="w-2/3">
                        <h2 className='text-2xl font-bold'>
                            {product?.title}
                        </h2>
                        <p className='font-light'>{product?.description}</p>
                        <b className='text-green-700'>{product?.category?.name}</b>
                        <div className='flex justify-between py-4'>
                            <span>{product?.price} EGP</span>
                            <span><i className='fas fa-star text-yellow-500'></i> {product?.ratingsAverage} </span>
                        </div>
                        <button className='btn block w-full'>Add to cart</button>
                    </div>
                </div>
              
                 <div className="row-tw">
                    {relatedProductsList?.length?relatedProductsList.map((prod) => <SingleProduct key={prod.id} prod={prod}></SingleProduct>):''}
                 </div>
            </div>
        )

   
}



/////////////// single product

function SingleProduct({ prod }) {
    console.log(prod);
    
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
