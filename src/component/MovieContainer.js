import React from 'react'
import Movie from './Movie'
import {useState,useEffect} from 'react'

const MovieContainer = ({movies,input,rating}) => {

    const [filred,setFiltred] = useState(movies)
    useEffect(() => {

         setFiltred(movies.filter(movie =>
         movie.name.toLowerCase().includes(input.toLowerCase()) 
         && rating===0 ?movies: movie.rating===rating ) )
               
    },[input,rating,movies])

  return (
    <div>
        <Movie movies={filred} />

    </div>
  )
}

export default MovieContainer