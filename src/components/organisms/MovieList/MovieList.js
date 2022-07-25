import { useEffect, useContext } from 'react';
import "./MovieList.css";   
import axios from 'axios';
import MovieCard from '../../molecules/MovieCard/MovieCard';
import AppContext from "../../../context/AppContext";
import { API_KEY } from "../../../secrets"; 

const MovieList = () => {

    const {
        setMovieList,
        movieList,
        handleNavigation
    } = useContext(AppContext);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + API_KEY)
            .then(response => {
                setMovieList(response.data.results);
            })
            .catch(error => {
                console.log(error);
            });
    }, [setMovieList]);

    return (
        <div className="MovieList">
            {movieList.map(movie => {
                return(
                    <MovieCard key={movie.id} movie={movie} click={() => handleNavigation(`/detail?movieID=${movie.id}`)}/>
                )
            })}
        </div>
    );
}

export default MovieList;