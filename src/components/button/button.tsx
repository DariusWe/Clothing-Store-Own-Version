import { Btn } from "./button.styles";

// Type for ButtonProps extends to ButtonHTMLAttributes to infer the types of the HTML button attributes

type ButtonProps = {
  label: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ label, ...otherProps }) => {
  return <Btn {...otherProps}>{label}</Btn>;
};

export default Button;
