import { Btn } from "./button.styles";

// Type for ButtonProps extends to ButtonHTMLAttributes to infer the types of the HTML button attributes

// Why is theme type not passed to landingPage (is of type "any" here), but passed correctly to signInForm?! Seems to be a
// a problem with referencing components via styled...

// enum BUTTON_TYPES {
//   DARK = "dark",
//   LIGHT = "light",
//   LIGHTBORDERLESS = "lightBorderless",
// }

type ButtonProps = {
  label: string,
  buttonTheme: "dark" | "light" | "lightBorderless",
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ label, buttonTheme, ...otherProps }) => {
  console.log("Button");
  return <Btn {...otherProps} theme={buttonTheme}>{label}</Btn>;
};

export default Button;
