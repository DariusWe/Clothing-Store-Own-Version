import { Btn } from "./button.styles";

export type ButtonProps = {
  label: string,
  buttonTheme: "dark" | "light" | "lightBorderless",
  // Another (saver) solution is to pass these strings as an enum. This way you won't have a chance
  // to spell the value incorrect. BUT, typescript will do autocompletion and throw good errors anyways.
  // For example, when comparing some value to a possible value of buttonTheme, TS will warn "This 
  // condition will always return false since the types have no overlap". So there is no real advantage
  // of using enum here.
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ label, buttonTheme, ...otherProps }) => {
  return <Btn {...otherProps} $theme={buttonTheme}>{label}</Btn>;
};

export default Button;
