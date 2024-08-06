import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { searchMovies, useGeners } from '../useApi'

export default function SearchCom() {
    let { title } = useParams()
    let navigate = useNavigate()
    let inputRef  = useRef(null)
    let [val, setVal] = useState(title)
    let { data, isLoading, refetch } = useGeners([title, 'searchmoviee'], () => searchMovies(title), { enabled: false })
   
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    function handleSearch(e) {
       
        if (!e.target.value)
            navigate(`/search/${title}`)
        else
       { 
        navigate(`/search/${e.target.value}`)
        }
        setVal(e.target.value)
        refetch(val)
        
        
    }
    return (
        <div className='container'>Search
            <input ref={inputRef } type="search" name='searchInput' className='form-control mx-auto my-5 w-75'
                onChange={(e) => handleSearch(e)}
                value={val}
            />

            <hr />


            <div className='row g-5'>
                <h2 className='text-center my-4 text-white fw-bolder'>results for {val}</h2>
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
