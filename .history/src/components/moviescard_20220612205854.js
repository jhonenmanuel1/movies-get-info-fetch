
export default function MoviesCard(props){
    return (
        <>
            {
                props.movies.map( (movie, index) =><div>
                    <img src={movie.Poster}></img>
                </div>)
            }
        </>
    )

}