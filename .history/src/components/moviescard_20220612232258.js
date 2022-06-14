
export default function MoviesCard(props){
    return (
        <>
            {
                props.movies.map( (movie, index) =><div>
                    <img key={index}src={movie.Poster}></img>
                </div>)
            }
        </>
    )

}