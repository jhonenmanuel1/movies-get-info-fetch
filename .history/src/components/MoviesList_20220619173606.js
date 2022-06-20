import React from "react";



export default function MovieList (){
    return(
        <>
            {PaymentResponse.movies.map((movie, index)=><div>
                <img src={movie.Poster}></img>
            </div>)}
        </>
    )
}