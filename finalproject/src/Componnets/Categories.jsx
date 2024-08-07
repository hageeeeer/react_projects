import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import MainSlider from './MainSlider';

export default function Categories() {
  let [loading, setLoading] = useState(false)
  let [msg, setMsg] = useState('')
  let [cat, setCat] = useState([])
  function getCategories() {
    setLoading(true)
    axios.get('https://ecommerce.routemisr.com/api/v1/categories')
      .then(({ data }) => {
        setCat(data?.data);
        setMsg('')
        setLoading(false)
      })
      .catch((err) => {
        setMsg(err?.message);
        setLoading(false)
      })
  }


  useEffect(() => {
    getCategories()
  }, [])

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplay: true
  };

  return (
    <>
      <MainSlider></MainSlider>
      <h2 className='my-5 font-bold text-xl'>Shop Popular Categories</h2>
      <Slider {...settings}>
        {cat.map(ele => <div key={ele._id}>
          <img className='cat-img cursor-pointer' src={ele?.image} alt={ele.name} />
          <h3>{ele.name}</h3>
        </div>)}
      </Slider>
    </>
  )
}
