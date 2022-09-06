import { Container, Divider, GuestSection } from "./checkout-page.styles";
import SignInForm from "../components/sign-in-form";
import Button from "../components/button";

const CheckoutPage = () => {
  console.log("Render/Rerender of CheckoutPage");
  return (
    <Container>
        <SignInForm />
      <Divider>
        <span>OR</span>
      </Divider>
      <GuestSection>
        <h2>Purchase as a guest</h2>
        <p>If you don't want to create an account, you can purchase as a guest. Shipping and payment details won't be saved for future purchases.</p>
        <Button value="Continue as a guest" />
      </GuestSection>
    </Container>
  );
};

export default CheckoutPage;
