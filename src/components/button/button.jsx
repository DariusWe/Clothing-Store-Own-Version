import { Btn } from "./button.styles";

const Button = ({value, ...otherProps}) => {
    return (
        <Btn {...otherProps}>{value}</Btn>
    );
}

export default Button;
