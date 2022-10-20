import { Container } from "./sign-in-form.styles";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { firebaseSignInWithEmailAndPassword } from "../../utils/firebase";
import InputField from "../input-field/input-field";
import Button from "../button/button";

// Course is leveraging another typescript solution. This one here is just 20% of lines of code, but is it best practice?

const SignInForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const signInUser: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // e.target is by default of type EventTarget. But EventTarget has not the properties of an HTMLFormElement (like value or elements)
    // We have to cast it as HTMLFormElement
    const target = e.target as HTMLFormElement;
    const email: string = target.email.value;
    const password: string = target.password.value;
    firebaseSignInWithEmailAndPassword(email, password)
      .then(() => {
        if (location.pathname.includes("sign-in")) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container>
      <h2>Sign in</h2>
      <form onSubmit={signInUser}>
        <InputField type="email" label="E-mail" id="email" />
        <InputField type="password" label="Password" id="password" />
        <Button type="submit" label="Sign In" />
        {location.pathname.includes("checkout") ? (
          <>
            <span>Don't have an account?</span>
            <Link to="/sign-up">Register</Link>
          </>
        ) : (
          <>
            <span>Forgot your password?</span>
            <Link to="/sign-in">Reset</Link>
          </>
        )}
      </form>
    </Container>
  );
};

export default SignInForm;
