import { Container, LoginSection } from "./sign-up-form.styles";
import { useNavigate, Link, useParams } from "react-router-dom";
import { firebaseCreateUserWithEmailAndPassword } from "../../../utils/firebase.utils";
import { useTypedDispatch } from "../../../store/typed-hooks";
import { setDisplayName } from "../../../store/slices/user.slice";
import { InputField, Button } from "../../index";
import { useState } from "react";

// Course is leveraging another typescript solution. This one here is just 20% of lines of code.

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const { destination } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const signUp: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const displayName: string = target["displayName"].value;
    const email: string = target["email"].value;
    const password: string = target["password"].value;
    const confirmPassword: string = target["confirmPassword"].value;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    setIsLoading(true);
    firebaseCreateUserWithEmailAndPassword(email, password, displayName)
      .then(() => {
        dispatch(setDisplayName(displayName));
        destination === "to-checkout" ? navigate("/checkout") : navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.message);
      });
  };

  return (
    <Container>
      <h1>Register</h1>
      <form onSubmit={signUp}>
        <InputField type="text" label="Full name" id="displayName" required />
        <InputField type="email" label="Email" id="email" required />
        <InputField type="password" label="Password" id="password" required />
        <InputField type="password" label="Confirm password" id="confirmPassword" required />
        <Button type="submit" label="Create Account" buttonTheme="dark" isLoading={isLoading} />
        <LoginSection>
          <span>Already have an account?</span>
          <Link to="/sign-in">Login</Link>
        </LoginSection>
      </form>
    </Container>
  );
};

export default SignUpForm;
