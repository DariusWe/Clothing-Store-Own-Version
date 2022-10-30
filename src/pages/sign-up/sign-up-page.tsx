import { Container } from "./sign-up-page.styles";
import SignUpForm from "../../components/sign-up-form/sign-up-form";

const SignUpPage = () => {
  console.log("SignUpPage");
  return (
    <Container>
      <SignUpForm />
    </Container>
  );
};

export default SignUpPage;
