import { useLocation, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useTypedDispatch } from "./store/hooks";
import { onAuthStateChangedListener } from "./utils/firebase";
import { fetchProductsAsync } from "./store/products.slice";
import { setCurrentUser } from "./store/user.slice";
import { setUserLocation } from "./store/user-location.slice";
// prettier-ignore
import { Navigation, CategoryPage, SignInPage, SignUpPage, CheckoutPage, LandingPage, ProductPage } from "./pages/index";

const App = () => {
  console.log("App");
  const dispatch = useTypedDispatch();
  const location = useLocation();

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

  useEffect(() => {
    dispatch(setUserLocation(location.pathname));
    window.scrollTo(0, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<LandingPage />} />
        <Route path=":gender" element={<LandingPage />} />
        <Route path=":gender/:category" element={<CategoryPage />} />
        <Route path=":gender/:category/:product" element={<ProductPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-in/:destination" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
        <Route path="sign-up/:destination" element={<SignUpPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default App;
