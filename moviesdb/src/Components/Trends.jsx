import React, { useState } from 'react'
import { getTrends, useGeners } from '../useApi'
import { Link } from 'react-router-dom'

export default function Trends() {

 let {data,isLoading}  = useGeners('trends',getTrends)    
  return (
  <div className="container">
    <h2 className='text-center my-4 text-white fw-bolder'>Trending</h2>
    <div className='row g-5'>
    {data?.data?.results.map((list) => <div key={list.id} className='col-md-3'>
      <div className="list position-relative" >

        <Link to={`/moviedetails/${list.id}`}>
          <img className='cursor-pointer  w-100 movie-poster rounded-2 shadow' src={`https://image.tmdb.org/t/p/w500/` + list.backdrop_path} alt="" />
        </Link>

        <div className='position-absolute p-3 d-flex justify-content-between bottom-0  align-items-center start-0 end-0'>
          <p className='text-white my-2   fw-bold'>{list.title}</p>

          <span style={list.vote_average.toFixed('1') < 5 ? { color: 'red' } : list.vote_average.toFixed('1') > 5 && list.vote_average.toFixed('1') <= 6 ? { color: 'green' } : { color: 'white' }} className='badge bg-dark p-2  rounded-circle'>{list.vote_average.toFixed('1')}</span>
        </div>
      </div>
    </div>)}
  </div>
  </div>
  )
}
