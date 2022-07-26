import { useContext } from "react";
import "./Home.css"
import MovieList from "../organisms/MovieList/MovieList";
import Nav from "../molecules/Nav/Nav";
import { Navigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
import OptionsHome from "../organisms/OptionsHome/OptionsHome";


const Home = () => {
    const {
        token
    } = useContext(AppContext);
    
    return (
        <>
            {!token && <Navigate to="/" />}
            <div className="home">
                <Nav />
                <section className="home_list">
                    <OptionsHome />
                    <MovieList />
                </section>
            </div>
        </>
        
    );
}

export default Home;