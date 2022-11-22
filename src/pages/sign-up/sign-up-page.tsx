import { Container } from "./sign-up-page.styles";
import { SignUpForm } from "../../components";

const SignUpPage = () => {
  console.log("SignUpPage");
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
};

export default SignUpPage;
