import "./LoginPage.css"
import LoginCard from "../molecules/LoginCard/LoginCard";
import Logo from "../atoms/Logo/Logo";

const LoginPage = () => {
    return (
        <div className="LoginPage">
            <Logo />
            <LoginCard /> 
        </div>
    );
}

export default LoginPage;