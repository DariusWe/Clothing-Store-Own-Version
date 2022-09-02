// This component is probably using the same styles as sign-in-form. How to solve?

import {} from "./sign-up-form.styles";
import InputField from "./input-field";
import Button from "./button";
import { firebaseCreateUserWithEmailAndPassword } from "../utils/firebase";
import { UserAuthContext } from "../contexts/UserAuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  console.log("Render/Rerender of SignUpForm");
  const { setCurrentUser } = useContext(UserAuthContext);
  const navigate = useNavigate();

  const signUp = (e) => {
    e.preventDefault();
    const name = e.target["name"].value;
    const email = e.target["email"].value;
    const password = e.target["password"].value;
    const confirmPassword = e.target["confirm-password"].value;
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    firebaseCreateUserWithEmailAndPassword(email, password, name)
      .then((cred) => {
        setCurrentUser({ ...cred.user }); // spread operator needed here, otherwise setCurrentUser will not lead to updates in UI, because it seems to be the same object as already is in the context variable.
        navigate("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={signUp}>
        <InputField type="text" label="Name:" id="name" />
        <InputField type="email" label="Email:" id="email" />
        <InputField type="password" label="Password:" id="password" />
        <InputField type="password" label="Confirm password:" id="confirm-password" />
        <Button type="submit" value="Register" />
      </form>
    </div>
  );
};

export default SignUpForm;
