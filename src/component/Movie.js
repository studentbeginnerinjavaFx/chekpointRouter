import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const Movie = ({ movies }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        width: "60%",
        margin: "20px auto",
      }}
    >
      {movies.map((movie) => {
        return (
        
          <div key={movie.id}>
              <Link  to={`MovieDescription/${movie.id}`} >
                 <img src={movie.img} alt={movie.name} height={200} width={150} />
              </Link>
           
            <h4>{movie.name}</h4>
           
            <ReactStars
              count={5}
              edit={false}
              value={movie.rating}
              size={24}
              isHalf={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            ,
          </div>
         
        );
      })}
    </div>
  );
};

export default Movie;
