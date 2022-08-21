import { Container, Divider, RegisterSection } from "./sign-in-page.styles";
import SignInForm from "../components/sign-in-form";
import Button from "../components/button";

const SignInPage = () => {
  return (
    <Container>
      <SignInForm />
      <Divider>
        <span>OR</span>
      </Divider>
      <RegisterSection>
        <h2>Register</h2>
        <p>
          If you don't have an account yet, you can create one here. With an account, purchasing at our site will be a faster and more enjoyable experience.
        </p>
        <Button value="Create an Account" />
      </RegisterSection>
      {/* <SignUpForm /> */}
    </Container>
  );
};

export default SignInPage;
