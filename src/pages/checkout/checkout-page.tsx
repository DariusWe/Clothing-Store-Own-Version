import { Container, ContentWrapper } from "./checkout-page.styles";
import { PaymentForm } from "../../components";

const CheckoutPage = () => {
  return (
    <Container>
      <ContentWrapper>
        <h1>Checkout</h1>
        <p>
          The checkout process isn't finished yet. You can, however, already use the stripe API payment element down
          below to make credit card payments. Use stripe's test card number 4242 4242 4242 4242 together with a valid
          future date to test this feature (CVC and ZIP can be any number).
        </p>
        <PaymentForm />
      </ContentWrapper>
    </Container>
  );
};

export default CheckoutPage;
