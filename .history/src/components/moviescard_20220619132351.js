import "../styles/moviescard.css"
export default function MoviesCard(props){
    const FavouritesComponent = props.favouritesComponent;
    return (
        <section className="moviecard-wraper">
            {
                props.movies.map( (movie, index) =><div className="item-moviecard">
                    <img key={index} src={movie.Poster}></img>
                    
                </div>)
            }
        </section>
    )

}