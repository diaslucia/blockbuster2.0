import "./Searchbar.css"
import Input from "../../atoms/Input/Input";
import Button from "../../atoms/Button/Button";

const Searchbar = () => {
    return (
        <div className="searchbar">
            <Input type={"text"} placeholder={"Search"}/>
            <Button title={"🔎"}/>
        </div>
    )
}

export default Searchbar;