import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { onAuthStateChangedListener } from "./utils/firebase";
import { fetchAndSetProducts } from "./store/products/products-helpers";
import Navigation from "./routes/navigation";
import ProductsPage from "./routes/products-page";
import SignInPage from "./routes/sign-in-page";
import CheckoutPage from "./routes/checkout-page";
import WomenPage from "./routes/women-page";
import MenPage from "./routes/men-page";
import ScrollToTop from "./utils/scrollToTop";

// dispatch(): replace Action type string (not best practice)

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      dispatch(await fetchAndSetProducts());
    };
    fetchData();
    // dispatch below only included to get rid of warning
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      dispatch({ type: "SET_CURRENT_USER", payload: user });
    });
    return unsubscribe;
    // dispatch below only included to get rid of warning
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<WomenPage />} />
            <Route path="women" element={<WomenPage />} />
            <Route path="men" element={<MenPage />} />
            <Route path=":gender/:category" element={<ProductsPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
