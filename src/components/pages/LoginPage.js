import { useContext } from "react";
import "./LoginPage.css"
import LoginCard from "../molecules/LoginCard/LoginCard";
import Logo from "../atoms/Logo/Logo";
import { Navigate } from "react-router-dom";
import AppContext from "../../context/AppContext";

const LoginPage = () => {
    const {
        token
    } = useContext(AppContext);
    
    return (
        <>
            {token && <Navigate to="/home" />}
            <div className="LoginPage">
                <Logo />
                <LoginCard /> 
            </div>
        </>
        
    );
}

export default LoginPage;