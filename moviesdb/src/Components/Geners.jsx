import React, { useCallback, useMemo, useState ,useRef} from 'react'
import { getGenerList, getGeners, useGeners } from '../useApi'
import { Link } from 'react-router-dom'
import Search from './Search'
import { useInfiniteQuery } from 'react-query'

export default function Geners() {
  const [page, setPage] = useState(1);
  let [id, setId] = useState(28)
  let [movieId, setMovieIde] = useState()
  let { data } = useGeners('getgeners', getGeners)
  // let { data: dataGenerList, refetch } =
  //   useGeners(['getgenerList', id], () => getGenerList(id), { enabled: false })
  let { data: dataGenerList, refetch , fetchNextPage,
    hasNextPage,isLoading,isFetching} = useInfiniteQuery(['getgenerList', id,page], () => getGenerList(id,page), {
    getNextPageParam: (lastPage, pages) => lastPage.offset,
  }
)

//pagination
const flattenedData = useMemo(
  () => (dataGenerList? dataGenerList?.pages[0]?.data?.results.flatMap(item => item) : []),
  [dataGenerList]
);

const observer = useRef();
  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage]
  );
console.log('flattenedData',flattenedData);
//pagination
// console.log(dataGenerList?.pages[0]?.data?.results);

  function GenersList() {
    return <ul className='my-5 list-unstyled geners d-flex justify-content-center flex-wrap'>
      {data?.data?.genres.map(gener => <li key={gener.id} onClick={() => { setId(gener.id); refetch() }} className='cursor-pointer rounded-5 m-2 d-inline-block px-3 py-1 text-white' >{gener.name}</li>)}
    </ul>
  }



  function MoviesList() {
    return <div className='my-5'>
      <h2 className='text-center my-4 text-white fw-bolder'>Geners</h2>
      <div className="row g-4">
        {flattenedData?.map((list,i) => <div  key={list.id}   ref={flattenedData.length === i + 1 ? lastElementRef : null} className='col-xl-3 col-lg-4  col-md-6 col-sm-12' >
          <div className={`${'flex-wrap'}   list position-relative`} onClick={() => { setMovieIde(list.id) }}>
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
  }

  return (
    <div className='container'>
      <Search />
      <GenersList></GenersList>
      <MoviesList></MoviesList>
    </div>
  )
}
