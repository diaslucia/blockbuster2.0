import "./MovieCard.css";

const MovieCard = ({ movie, click }) => {
    return (
        <img onClick={click} className="MovieCard" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={`${movie.title} poster`}/>
    );
}

export default MovieCard;