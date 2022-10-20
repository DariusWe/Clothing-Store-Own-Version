// This component is probably using the same styles as sign-in-form. How to solve?

import { Container } from "./sign-up-form.styles";
import { useNavigate } from "react-router-dom";
import { firebaseCreateUserWithEmailAndPassword } from "../../utils/firebase";
import { useTypedDispatch } from "../../hooks";
import { setDisplayName } from "../../store/user.slice";
import InputField from "../input-field/input-field";
import Button from "../button/button";

// Course is leveraging another typescript solution. This one here is just 20% of lines of code, but is it best practice?

const SignUpForm = () => {
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();

  const signUp: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    // e.target is by default of type EventTarget. But EventTarget has not the properties of an HTMLFormElement (like value or elements)
    // We have to cast it as HTMLFormElement
    const target = e.target as HTMLFormElement;
    const displayName: string = target["displayName"].value;
    const email: string = target["email"].value;
    const password: string = target["password"].value;
    const confirmPassword: string = target["confirmPassword"].value;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    firebaseCreateUserWithEmailAndPassword(email, password, displayName)
      .then(() => {
        dispatch(setDisplayName(displayName));
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <Container>
      <h2>Register</h2>
      <form onSubmit={signUp}>
        <InputField type="text" label="Full name" id="displayName" />
        <InputField type="email" label="Email" id="email" />
        <InputField type="password" label="Password" id="password" />
        <InputField type="password" label="Confirm password" id="confirmPassword" />
        <Button type="submit" label="Register" />
      </form>
    </Container>
  );
};

export default SignUpForm;
