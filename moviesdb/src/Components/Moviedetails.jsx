import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getMovieDetails, getWatchProviders, useGeners } from '../useApi'

export default function Moviedetails() {
 
  let { id } = useParams()
  let { data } = useGeners(['moviedetails', id], () => getMovieDetails(id))
  let { data:dataWatch } = useGeners(['watch', id], () => getWatchProviders(id))

  
  return (
    <div className='text-center text-white' >
     <header className='bk-img position-relative'
      style={{backgroundImage:`url(https://image.tmdb.org/t/p/w500/${data?.data?.poster_path
    })` ,}}>
    <Link to='/'><i className='fas fa-arrow-left position-absolute start-0 bg-white p-3 m-5 text-secondary shadow rounded-circle'></i></Link>  
    <h2 className=' position-absolute start-50 translate-middle-x bottom-0'>{data?.data.title}</h2>
    </header> 
     <div className="container">
     <p className='my-2'>{data?.data?.overview}</p>
     <span className='my-2 badge release-date  p-3 rounded-pill'>Release Date : {data?.data?.release_date}</span>
     <ul className='my-4 list-unstyled d-flex justify-content-center'>
      {data?.data?.genres.map(ele=><li className='mx-2 fs-6 p-2 rounded-pill' style={{backgroundColor:'#1F2937'}} key={ele.id}>{ele.name}</li>)}
     </ul>
     <a target='_blank' className='btn btn-info my-3 text-white rounded-pill' href={dataWatch?.data?.results?.JP?.link}>
      watch a movie
     </a>
     </div>

    </div>
  )
}
