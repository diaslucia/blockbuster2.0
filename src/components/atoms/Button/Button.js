import "./Button.css"

const Button = ({ title, type }) => {
    return(
        <button className="button" type={type}>
            <span>{title}</span>
        </button>
    );
}

export default Button;