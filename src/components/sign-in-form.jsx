import "./sign-in-form.scss";
import InputField from "./input-field";
import Button from "./button";
import { firebaseSignInWithEmailAndPassword } from "../utils/firebase";
import { UserAuthContext } from "../contexts/UserAuthContext";
import { useContext } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const SignInForm = () => {
  const { setCurrentUser } = useContext(UserAuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const signInUser = (e) => {
    e.preventDefault();
    const email = e.target["email"].value;
    const password = e.target["password"].value;
    firebaseSignInWithEmailAndPassword(email, password)
      .then((cred) => {
        setCurrentUser(cred.user);
        if (location.pathname.includes("sign-in")) {
          navigate("/");
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="form-container">
      <h2>Sign in</h2>
      <form className="form" onSubmit={signInUser}>
        <InputField type="email" label="E-mail" id="email" />
        <InputField type="password" label="Password" id="password" />
        <Button type="submit" value="Sign In" />
        {location.pathname.includes("checkout") ? (
          <>
            <span>Don't have an account?</span>
            <Link to="/sign-in">Register</Link>
          </>
        ) : (
          <>
            <span>Forgot your password?</span>
            <Link to="/sign-in">Reset</Link>
          </>
        )}
      </form>
    </div>
  );
};

export default SignInForm;
