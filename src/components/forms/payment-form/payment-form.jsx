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

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/.netlify/functions/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: Math.round(cartTotal * 100) }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, [cartTotal]);

  const paymentHandler = async (e) => {
    e.preventDefault();
    setProcessing(true);
    console.log(clientSecret);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser.displayName,
        },
      },
    });

    if (payload.error) {
      alert(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      alert("Payment Success");
      setProcessing(false);
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
