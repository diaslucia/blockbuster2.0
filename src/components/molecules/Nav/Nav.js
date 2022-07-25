import "./Nav.css";
import { Link } from "react-router-dom";
import Logo from "../../atoms/Logo/Logo";

const Nav = () => {
    return (
        <div className="nav">
            <Logo />
            <ul className="nav_ulist">
                <li className="nav_list"><Link className="nav_link" to="/">Home</Link></li>
                <li className="nav_list_line"><span/></li>
                <li className="nav_list"><Link className="nav_link" to="/"/>Movies</li>
                <li className="nav_list_line"><span/></li>
                <li className="nav_list"><Link className="nav_link" to="/"/>Series</li>
                <li className="nav_list_line"><span/></li>
                <li className="nav_list"><Link className="nav_link" to="/"/>FAQ</li>
            </ul>
        </div>
    );
}

export default Nav;