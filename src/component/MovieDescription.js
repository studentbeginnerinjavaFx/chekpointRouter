import React from 'react'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'

const MovieDescription = ({movies}) => {
    const [MovieDescription,setMovieDescription] = useState({})
    const {id} = useParams()
    useEffect(()=>{
        setMovieDescription(movies.find(movie=>movie.id == id))
    },[])

  return (
    <div  style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        width: "50%",
        margin: "20px auto",
      }}>
        <h5>{MovieDescription.description}</h5>
        <ReactPlayer url={MovieDescription.trailer} />
    </div>
  )
}

export default MovieDescription