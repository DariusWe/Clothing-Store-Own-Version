// This feature is work in progress

import { Form } from "./payment-form.styles";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "../../index";

const PaymentForm = () => {

  const paymentHandler: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
  }

  return (
    <Form onSubmit={paymentHandler}>
      <span>Credit Card Payment:</span>
      <CardElement />
      <Button label="Pay now" buttonTheme="dark" />
    </Form>
  );
};

export default PaymentForm;
