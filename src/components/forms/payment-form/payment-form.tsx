// WORK IN PROGESS
import { useState, useEffect } from "react";
import { useTypedSelector } from "../../../store/typed-hooks";
import { selectCartTotal } from "../../../store/slices/cart.slice";
import { Form } from "./payment-form.styles";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "../../index";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const cartTotal = useTypedSelector(selectCartTotal);
  const currentUser = useTypedSelector((state) => state.user.currentUser);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => {
      setIsMounted(false);
    };
  }, []);

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: Math.round(Number(cartTotal) * 100) }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
        console.log("client secret received: ", data.clientSecret);
      });
  }, [cartTotal]);

  if (!isMounted) {
    return null;
  }

  const paymentHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    setProcessing(true);
    const cardElement = elements.getElement(CardElement);
    if (cardElement && currentUser) {
      const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          billing_details: {
            name: currentUser.displayName,
          },
        },
      });
      if (payload.error) {
        alert(`Payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        alert("Payment was successful!");
        setProcessing(false);
      }
    }
  };

  return (
    <Form onSubmit={paymentHandler}>
      <span>Credit Card Payment:</span>
      <CardElement />
      <Button isLoading={processing} label="Pay now" buttonTheme="dark" />
    </Form>
  );
};

export default PaymentForm;
