import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { onAuthStateChangedListener } from "./utils/firebase";
import { fetchProductsAsync } from "./store/products.slice";
import { setCurrentUser } from "./store/user.slice";
import Navigation from "./pages/navigation/navigation";
import CategoryPage from "./pages/category/category-page";
import SignInPage from "./pages/sign-in/sign-in-page";
import SignUpPage from "./pages/sign-up/sign-up-page";
import CheckoutPage from "./pages/checkout/checkout-page";
import LandingPage from "./pages/landing/landing-page";
import ScrollToTop from "./components/scrollToTop";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((userInstance) => {
      if (userInstance) {
        const { uid, email, displayName } = userInstance;
        dispatch(setCurrentUser({ uid, email, displayName }));
      } else {
        dispatch(setCurrentUser(null));
      }
    });
    return unsubscribe;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<LandingPage />} />
            <Route path=":gender" element={<LandingPage />} />
            <Route path=":gender/:category" element={<CategoryPage />} />
            <Route path="sign-in" element={<SignInPage />} />
            <Route path="sign-up" element={<SignUpPage />} />
            <Route path="checkout" element={<CheckoutPage />} />
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
