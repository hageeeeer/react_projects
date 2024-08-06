import axios from "axios";
import { useQuery } from "react-query";


export function getGeners() {
    return axios.get('https://api.themoviedb.org/3/genre/movie/list?language=en', {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGM2ZGQ3YjFiYWMzMDMwMWI2ODg5NDc3OGM1ZGY1NSIsInN1YiI6IjY1YmExNWVhZjkwYjE5MDE3YzA2YWI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H7DyzOLHmwyr_v5k1FRrCwv6uDmlstvmvFTqZO9rpXg'
        }
    })
}

export function getGenerList(id,page=1) {
    return axios.get(`https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=${page}&with_genres=${id}`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGM2ZGQ3YjFiYWMzMDMwMWI2ODg5NDc3OGM1ZGY1NSIsInN1YiI6IjY1YmExNWVhZjkwYjE5MDE3YzA2YWI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H7DyzOLHmwyr_v5k1FRrCwv6uDmlstvmvFTqZO9rpXg'
        }
   })
}

export function getMovieDetails(id) {  
    return axios.get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGM2ZGQ3YjFiYWMzMDMwMWI2ODg5NDc3OGM1ZGY1NSIsInN1YiI6IjY1YmExNWVhZjkwYjE5MDE3YzA2YWI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H7DyzOLHmwyr_v5k1FRrCwv6uDmlstvmvFTqZO9rpXg'
        }
   })
}
export function getWatchProviders(id) {  
    return axios.get(`https://api.themoviedb.org/3/movie/${id}/watch/providers`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGM2ZGQ3YjFiYWMzMDMwMWI2ODg5NDc3OGM1ZGY1NSIsInN1YiI6IjY1YmExNWVhZjkwYjE5MDE3YzA2YWI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H7DyzOLHmwyr_v5k1FRrCwv6uDmlstvmvFTqZO9rpXg'
        }
   })
}
export function getTrends() {  
    return axios.get(`https://api.themoviedb.org/3/trending/movie/day?language=en-US`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGM2ZGQ3YjFiYWMzMDMwMWI2ODg5NDc3OGM1ZGY1NSIsInN1YiI6IjY1YmExNWVhZjkwYjE5MDE3YzA2YWI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H7DyzOLHmwyr_v5k1FRrCwv6uDmlstvmvFTqZO9rpXg'
        }
   })
}
export function getUpcoming() {  
    return axios.get(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGM2ZGQ3YjFiYWMzMDMwMWI2ODg5NDc3OGM1ZGY1NSIsInN1YiI6IjY1YmExNWVhZjkwYjE5MDE3YzA2YWI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H7DyzOLHmwyr_v5k1FRrCwv6uDmlstvmvFTqZO9rpXg'
        }
   })
}
export function getFavourite() {  
    return axios.get('https://api.themoviedb.org/3/account/20957861/favorite/movies?language=en-US&page=1&sort_by=created_at.asc', {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGM2ZGQ3YjFiYWMzMDMwMWI2ODg5NDc3OGM1ZGY1NSIsInN1YiI6IjY1YmExNWVhZjkwYjE5MDE3YzA2YWI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H7DyzOLHmwyr_v5k1FRrCwv6uDmlstvmvFTqZO9rpXg'
        }
   })
}
export function searchMovies(movTitle) {  
    return axios.get(`https://api.themoviedb.org/3/search/movie?query=${movTitle}&include_adult=false&language=en-US&page=1`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiZGM2ZGQ3YjFiYWMzMDMwMWI2ODg5NDc3OGM1ZGY1NSIsInN1YiI6IjY1YmExNWVhZjkwYjE5MDE3YzA2YWI3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.H7DyzOLHmwyr_v5k1FRrCwv6uDmlstvmvFTqZO9rpXg'
        }
   })
}


export function useGeners(key,fn)
{
    return useQuery(key,fn,{
        refetchOnWindowFocus:false
    })
}

