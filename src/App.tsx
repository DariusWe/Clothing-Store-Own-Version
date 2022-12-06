import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useTypedDispatch } from "./store/typed-hooks";
import { onAuthStateChangedListener } from "./utils/firebase.utils";
import { fetchProductsAsync } from "./store/slices/products.slice";
import { setCurrentUser } from "./store/slices/user.slice";
import type { CurrentUser } from "./store/slices/user.slice";
import { VIEWPORT_TYPES, setViewportType } from "./store/slices/current-viewport.slice";
import {
  Navigation,
  CategoryPage,
  SignInPage,
  SignUpPage,
  CheckoutPage,
  LandingPage,
  ProductPage,
} from "./pages/index";

const App = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((userInstance) => {
      if (userInstance) {
        const { uid, email, displayName } = userInstance;
        dispatch(setCurrentUser({ uid, email, displayName } as CurrentUser));
      } else {
        dispatch(setCurrentUser(null));
      }
    });
    return unsubscribe;
  }, [dispatch]);

  useEffect(() => {
    const calcViewport = () => {
      window.innerWidth < 650
        ? dispatch(setViewportType(VIEWPORT_TYPES.MOBILE))
        : window.innerWidth < 1020
        ? dispatch(setViewportType(VIEWPORT_TYPES.TABLET))
        : dispatch(setViewportType(VIEWPORT_TYPES.DESKTOP));
    };
    calcViewport(); // Execute on first render
    window.addEventListener("resize", calcViewport);
    return () => {
      window.removeEventListener("resize", calcViewport);
    };
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Navigate replace to="/women" />} />
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
