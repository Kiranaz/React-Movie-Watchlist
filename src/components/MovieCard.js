import React from "react";
import MovieControls from "./MovieControls";

const MovieCard = ({ movie, key, type }) => {
  return (
    <div>
      <div className='movie-card'>
        <div className='overlay'></div>

        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`${movie.title} Poster`}
        />

        <MovieControls type={type} movie={movie} />
      </div>
    </div>
  );
};

export default MovieCard;
