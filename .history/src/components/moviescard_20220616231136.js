
export default function MoviesCard(props){
    return (
        <>
            {
                props.movies.map( (movie, index) =><div className="item-moviecard">
                    <img key={index} src={movie.Poster}></img>
                </div>)
            }
        </>
    )

}