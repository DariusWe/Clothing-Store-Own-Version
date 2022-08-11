import "./checkout-page.scss";
import Button from "../components/button";
import SignInForm from "../components/sign-in-form";

const CheckoutPage = () => {

  return (
    <div className="checkout-container">
      <div className="checkout-sign-in-section">
        <SignInForm />
      </div>
      <div className="checkout-or">
        <span>OR</span>
      </div>
      <div className="checkout-guest-section">
        <h2>Purchase as a guest</h2>
        <p>If you don't want to create an account, you can purchase as a guest. Shipping and payment details won't be saved for future purchases.</p>
        <Button value="Continue as a guest" />
      </div>
    </div>
  );
};

export default CheckoutPage;
