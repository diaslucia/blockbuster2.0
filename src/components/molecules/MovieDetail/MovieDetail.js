import { useEffect, useContext } from "react";
import "./MovieDetail.css";
import axios from "axios";
import { API_KEY } from "../../../secrets"; 
import AppContext from "../../../context/AppContext";

const MovieDetail = ({ info }) => {

    const {
        movieDetail,
        setMovieDetail
    } = useContext(AppContext);
    

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${info}?api_key=` + API_KEY)
            .then(res => {
                setMovieDetail(res.data);
                console.log(movieDetail)
            })  
            .catch(err => { 
                console.log(err);
            });
    }, [])

    return(
        <>
            { movieDetail && 
                <section className="movieDetail">
                    <img src={`https://image.tmdb.org/t/p/w300/${movieDetail.poster_path}`} alt={`${movieDetail.title} poster`} />
                    <div className="movieDetail_info">
                        <div>
                            <h1 className="movieDetail_title">{movieDetail.title}</h1>
                            <span> </span>
                            <h2 className="movieDetail_date">({movieDetail.release_date?.substring(0, 4)})</h2>
                        </div>
                        <div className="movieDetail_genres_container">
                            {movieDetail.genres?.map(genre => {
                                return <p className="movieDetail_genres" key={genre.id}>{genre.name}</p>
                            })}
                        </div>
                        <p className="movieDetail_runtime">{movieDetail.runtime} m</p>
                        <span className="movieDetail_line"></span>
                        <p className="movieDetail_overview_title">Overview</p>
                        <p className="movieDetail_overview">{movieDetail.overview}</p>
                    </div>
                </section>
            }
        </>
        
    );
}

export default MovieDetail;