import { Container } from "./sign-in-form.styles";
import { useNavigate, useParams, Link } from "react-router-dom";
import { firebaseSignInWithEmailAndPassword } from "../../../utils/firebase.utils";
import { InputField, Button } from "../../index";
import { useState } from "react";
// Course is leveraging another typescript solution. This one here is just 20% of lines of code, but is it best practice?

const SignInForm = () => {
  const navigate = useNavigate();
  const { destination } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const signInUser: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // e.target is of type EventTarget. But EventTarget has not the properties of an HTMLFormElement (like value or elements)
    // Hacky workaround: Cast it as HTMLFormElement
    const target = e.target as HTMLFormElement;
    const email: string = target.email.value;
    const password: string = target.password.value;
    if (!email || !password) {
      alert("Please fill out all required fields");
      return;
    }
    setIsLoading(true);
    firebaseSignInWithEmailAndPassword(email, password)
      .then(() => {
        destination === "to-checkout" ? navigate("/checkout") : navigate("/");
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.message);
      });
  };

  return (
    <Container>
      <h1>{destination === "to-checkout" ? "Sign in to continue" : "Sign in"}</h1>
      <form onSubmit={signInUser}>
        <InputField type="text" label="E-mail" id="email" />
        <InputField type="password" label="Password" id="password" />
        <Button type="submit" label="Sign in" buttonTheme="dark" isLoading={isLoading} />
        <span>
          Or create an account{" "}
          <Link to={destination === "to-checkout" ? "/sign-up/to-checkout" : "/sign-up"}>here</Link>.
        </span>
      </form>
    </Container>
  );
};

export default SignInForm;
