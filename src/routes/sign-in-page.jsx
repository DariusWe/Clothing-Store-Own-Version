import "./sign-in-page.scss";
import SignInForm from "../components/sign-in-form";
import Button from "../components/button";

const SignInPage = () => {
  return (
    <div className="sign-in-page-container">
      <SignInForm />
      <div className="checkout-or">
        <span>OR</span>
      </div>
      <div className="register-section">
        <h2>Register</h2>
        <p>
          If you don't have an account yet, you can create one here. With an account, purchasing at our site will be a faster and more enjoyable experience.
        </p>
        <Button value="Create an Account" />
      </div>
      {/* <SignUpForm /> */}
    </div>
  );
};

export default SignInPage;
