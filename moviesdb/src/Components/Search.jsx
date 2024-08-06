import React, { useState } from 'react'
import { searchMovies, useGeners } from '../useApi'
import { useNavigate } from 'react-router-dom'

export default function Search() {
    let navigate = useNavigate()
    // let { data, isLoading, refetch } = useGeners([title, 'searchmoviee'], () => searchMovies(title), { enabled: false })
    function handleSearch(e) {
        navigate(`/search/${e.target.value}`)
    }
    return (
        <div>Search
            <input type="search" className='form-control mx-auto my-5 w-75'
             onChange={handleSearch} />
        </div>
    )
}
