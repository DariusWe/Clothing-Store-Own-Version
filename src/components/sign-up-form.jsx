// This component is probably using the same styles as sign-in-form. How to solve?

import { Container } from "./sign-up-form.styles";
import { useNavigate } from "react-router-dom";
import { firebaseCreateUserWithEmailAndPassword } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { setDisplayName } from "../store/user.slice";
import InputField from "./input-field";
import Button from "./button";

const SignUpForm = () => {
  console.log("Render/Rerender of SignUpForm");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signUp = (e) => {
    e.preventDefault();
    const displayName = e.target["display-name"].value;
    const email = e.target["email"].value;
    const password = e.target["password"].value;
    const confirmPassword = e.target["confirm-password"].value;
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
        <InputField type="text" label="Full name" id="display-name" />
        <InputField type="email" label="Email" id="email" />
        <InputField type="password" label="Password" id="password" />
        <InputField type="password" label="Confirm password" id="confirm-password" />
        <Button type="submit" value="Register" />
      </form>
    </Container>
  );
};

export default SignUpForm;
