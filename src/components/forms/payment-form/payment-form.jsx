// This feature is work in progress
import { useState } from "react";
import { useTypedSelector } from "../../../store/typed-hooks";
import { selectCartTotal } from "../../../store/slices/cart.slice";
import { Form } from "./payment-form.styles";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "../../index";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const amount = useTypedSelector(selectCartTotal);
  const currentUser = useTypedSelector(state => state.user.currentUser)

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessingPayment(true);

    const response = await fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    console.log("getting till here.");

    const clientSecret = response.paymentIntent.client_secret;

    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser.displayName,
        },
      },
    });

    setIsProcessingPayment(false);

    if (paymentResult.error) {
      alert(`Payment not successful. Error message: ${paymentResult.error.message}`);
    } else {
      if (paymentResult.paymentIntent.status === "succeeded") {
        alert("Payment successful");
      }
    }
  };

  return (
    <Form onSubmit={paymentHandler}>
      <span>Credit Card Payment:</span>
      <CardElement />
      <Button isLoading={isProcessingPayment} label="Pay now" buttonTheme="dark" />
    </Form>
  );
};

export default PaymentForm;
