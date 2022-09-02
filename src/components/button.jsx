import { Btn } from "./button.styles";

const Button = ({value, ...otherProps}) => {
    console.log("Render/Rerender of Button");
    return (
        <Btn {...otherProps}>{value}</Btn>
    );
}

export default Button;
