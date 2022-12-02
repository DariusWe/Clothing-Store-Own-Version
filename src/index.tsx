import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe.utils";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);

root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Elements stripe={stripePromise} >
            <App />
          </Elements>
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </>
);
