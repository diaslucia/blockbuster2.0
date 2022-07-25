import "./MovieImg.css";

const MovieImg = ({ movie, click }) => {
    return (
        <img onClick={click} className="movieImg" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={`${movie.title} poster`}/>
    );
}

export default MovieImg;