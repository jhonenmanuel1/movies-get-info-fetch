import React from "react";



export default function MovieList (props){
    return(
        <>
            {props.movies.map((movie, index)=><div>
                <img key={index}src={movie?.Poster} alt="See Movies Poster"></img>
            </div>)}
        </>
    )
}