import { Btn } from "./button.styles";

// Type for ButtonProps extends to ButtonHTMLAttributes to infer the types of the HTML button attributes

type ButtonProps = {
  label: string,
  theme: "dark" | "light",
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ label, theme, ...otherProps }) => {
  console.log("Button");
  return <Btn {...otherProps} theme={theme}>{label}</Btn>;
};

export default Button;
