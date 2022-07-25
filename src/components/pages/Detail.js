import { useContext } from "react";
import "./Detail.css"
import MovieDetail from "../organisms/MovieDetail/MovieDetail";
import Nav from "../molecules/Nav/Nav";
import Logo from "../atoms/Logo/Logo";
import { Navigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

const Detail = () => {
    const {
        token
    } = useContext(AppContext);

    let query = new URLSearchParams(window.location.search);
    let movieID = query.get("movieID");

    return (
        <>
            {!token && <Navigate to="/" />}
            <div className="detail">
                <Nav />
                <MovieDetail info={movieID}/>
            </div>
        </>
        
    );
}

export default Detail;