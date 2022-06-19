import "../styles/moviescard.css"
export default function MoviesCard(props){
    const FavouritesComponent = props.favouritesComponents;
    return (
        <section className="moviecard-wraper">
            {
                props.movies.map( (movie, index) =><div className="item-moviecard">
                    <img key={index} src={movie.Poster}></img>
                    <div> <FavouritesComponent/></div>
                </div>)
            }
        </section>
    )

}