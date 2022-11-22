import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useTypedDispatch } from "./store/typed-hooks";
import { onAuthStateChangedListener } from "./utils/firebase";
import { fetchProductsAsync } from "./store/slices/products.slice";
import { setCurrentUser } from "./store/slices/user.slice";
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
  console.log("App");
  const dispatch = useTypedDispatch();

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
    calcViewport();
    window.addEventListener("resize", calcViewport);
    return () => {
      window.removeEventListener("resize", calcViewport);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const calcViewport = () => {
    window.innerWidth < 650
      ? dispatch(setViewportType(VIEWPORT_TYPES.MOBILE))
      : window.innerWidth < 1020
      ? dispatch(setViewportType(VIEWPORT_TYPES.TABLET))
      : dispatch(setViewportType(VIEWPORT_TYPES.DESKTOP));
  };

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Navigate replace to="/women" />} />
        {/* <Route index element={<LandingPage />} /> */}
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
