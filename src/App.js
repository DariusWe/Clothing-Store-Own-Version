import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener } from "./utils/firebase";
import { fetchAndSetProductsAsync } from "./store/products/products.actions";
import { setCurrentUser } from "./store/user/user.actions";
import Navigation from "./routes/navigation";
import ProductsPage from "./routes/products-page";
import SignInPage from "./routes/sign-in-page";
import CheckoutPage from "./routes/checkout-page";
import WomenPage from "./routes/women-page";
import MenPage from "./routes/men-page";
import ScrollToTop from "./utils/scrollToTop";

const App = () => {
  console.log("Render/Rerender of App");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAndSetProductsAsync());
    // dispatch below only included to get rid of warning
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
    // dispatch below only included to get rid of warning
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Navigation />}>
            {/* replace index, women- and menpage with "indexpage" */}
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
