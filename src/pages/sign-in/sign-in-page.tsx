import { Container } from "./sign-in-page.styles";
import { SignInForm } from "../../components";

const SignInPage = () => {
  console.log("SignInPage");
  return (
    <Container>
      <SignInForm />
    </Container>
  );
};

export default SignInPage;
