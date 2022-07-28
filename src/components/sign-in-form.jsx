import "./sign-in-form.scss";
import InputField from "./input-field";
import Button from "./button";
import { firebaseSignInWithEmailAndPassword } from "../utils/firebase";
import { UserAuthContext } from "../contexts/UserAuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const SignInForm = () => {
  const { setCurrentUser } = useContext(UserAuthContext);
  const navigate = useNavigate();

  const signInUser = (e) => {
    e.preventDefault();
    const email = e.target["email"].value;
    const password = e.target["password"].value;
    firebaseSignInWithEmailAndPassword(email, password)
    .then((cred) => {
        setCurrentUser(cred.user);
        navigate("/");
    })
    .catch((err) => {
        alert(err.message);
    });
  };

  return (
    <form className="form" onSubmit={signInUser}>
      <InputField type="email" label="Email:" id="email" />
      <InputField type="password" label="Password:" id="password" />
      <Button type="submit" value="Sign In" />
    </form>
  );
};

export default SignInForm;
