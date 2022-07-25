import { useContext, useEffect } from "react";
import "./LoginCard.css";
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";
import AppContext from "../../../context/AppContext";

const LoginCard = () => {
    const {
        handleSubmit,
        handleToken
    } = useContext(AppContext);
    
    useEffect(() => {
        handleToken();
    }, [handleToken]);   

    return(
        <div className="loginCard_container">
            <h1 className="loginCard_title">Welcome</h1>
            <form className="loginCard_form" onSubmit={handleSubmit}>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button title="Login" type="submit"/>
            </form>
        </div>
        
    );
}

export default LoginCard;