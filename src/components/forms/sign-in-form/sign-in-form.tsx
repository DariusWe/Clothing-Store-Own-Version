import { Container, ResetPasswordSection } from "./sign-in-form.styles";
import { useNavigate, Link, useParams } from "react-router-dom";
import { firebaseSignInWithEmailAndPassword } from "../../../utils/firebase";
import { InputField, Button } from "../../index";

// Course is leveraging another typescript solution. This one here is just 20% of lines of code, but is it best practice?

const SignInForm = () => {
  console.log("SigninForm");
  const navigate = useNavigate();
  const { destination } = useParams();

  const signInUser: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // e.target is of type EventTarget. But EventTarget has not the properties of an HTMLFormElement (like value or elements)
    // Have to cast it as HTMLFormElement
    const target = e.target as HTMLFormElement;
    const email: string = target.email.value;
    const password: string = target.password.value;
    firebaseSignInWithEmailAndPassword(email, password)
      .then(() => {
        destination === "to-checkout" ? navigate("/checkout") : navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container>
      <h2>{destination === "to-checkout" ? "Sign in to continue" : "Sign in"}</h2>
      <form onSubmit={signInUser}>
        <InputField type="email" label="E-mail" id="email" />
        <InputField type="password" label="Password" id="password" />
        <ResetPasswordSection>
          <span>Forgot your password?</span>
          <Link to="/sign-in">Reset</Link>
        </ResetPasswordSection>
        <Button type="submit" label="Sign in" theme="dark" />
        <Button
          type="button"
          label="Register"
          theme="dark"
          onClick={() => {
            destination === "to-checkout" ? navigate("/sign-up/to-checkout") : navigate("/sign-up");
          }}
        />
      </form>
    </Container>
  );
};

export default SignInForm;
