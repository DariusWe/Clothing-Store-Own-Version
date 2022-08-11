import "./button.scss";

const Button = ({value, classNames, ...otherProps}) => {
    return (
        <button {...otherProps} className={`${classNames} btn`}>{value}</button>
    );
}

export default Button;
