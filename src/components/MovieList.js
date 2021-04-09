import React from "react";
import AddFavourites from "./AddFavourites";

const MovieList = (props) => {
  const FavouriteComponent = props.FavouriteComponent;

  console.log(props.movies);
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flex justify-content-start">
          <img src={movie.Poster} alt="" />
          <div
            onClick={() => props.handleFavouritesClick(movie)}
            className="overlay d-flex align-items-center justify-content-center"
          >
            <AddFavourites />
          </div>
        </div>
      ))}
    </>
  );
};

export default MovieList;
