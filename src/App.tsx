import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useTypedDispatch } from "./hooks";
import { onAuthStateChangedListener } from "./utils/firebase";
import { fetchProductsAsync } from "./store/products.slice";
import { setCurrentUser } from "./store/user.slice";
import { setUserLocation } from "./store/user-location.slice";
import Navigation from "./pages/navigation/navigation";
import CategoryPage from "./pages/category/category-page";
import SignInPage from "./pages/sign-in/sign-in-page";
import SignUpPage from "./pages/sign-up/sign-up-page";
import CheckoutPage from "./pages/checkout/checkout-page";
import LandingPage from "./pages/landing/landing-page";

const App = () => {
  const dispatch = useTypedDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

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
  }, [dispatch]);

  useEffect(() => {
    dispatch(setUserLocation(location.pathname));
    window.scrollTo(0, 0);
  }, [location, dispatch]);

  return (
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
  );
};

export default App;
