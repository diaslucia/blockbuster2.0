import { useEffect, useContext } from 'react';
import axios from 'axios';
import MovieCard from '../../molecules/MovieCard/MovieCard';
import AppContext from "../../../context/AppContext";
import { apiKey } from "../../../passwords";

const MovieList = () => {
    const {
        setMovieList,
        movieList
    } = useContext(AppContext);

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${apiKey}`)
            .then(response => {
                setMovieList(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [setMovieList]);

    return (
        <>
            <MovieCard />
        </>
    );
}

export default MovieList;