import "./sign-in-page.scss";
import SignInForm from "../components/sign-in-form";
import SignUpForm from "../components/sign-up-form";

const SignInPage = () => {
    return (
        <div className="sign-in-page-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );
}

export default SignInPage;