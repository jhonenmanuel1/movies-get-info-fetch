import React from "react";

export default function MovieList(props) {
    const FavouriteComponent = props.favouriteComponent
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="image-container d-flec justify-content-start m-3">
          <img key={index} src={movie?.Poster} alt="See Movies Poster"></img>
          <div className="overlay d-flex align-items-center justify-content-center align-items-center"></div>
            <FavouriteComponent/>
        </div>
      ))}
    </>
  );
}
