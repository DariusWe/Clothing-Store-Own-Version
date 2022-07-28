import "./button.scss";

const Button = ({value, ...otherProps}) => {
    return (
        <button {...otherProps} className="btn">{value}</button>
    );
}

export default Button;
