import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "./routes/navigation";
import ProductsPage from "./routes/products-page";
import SignInPage from "./routes/sign-in-page";
import CheckoutPage from "./routes/checkout-page";
import { ShopProductsContextProvider } from "./contexts/shopProductsContext";
import { ProfilePopupContextProvider } from "./contexts/profilePopupContext";
import { CurrentGenderContextProvider } from "./contexts/currentGenderContext";
import ScrollToTop from "./utils/scrollToTop";
import WomenPage from "./routes/women-page";
import MenPage from "./routes/men-page";
import { onAuthStateChangedListener } from "./utils/firebase";
import { store } from "./store/store";

// USE useDispatch() HERE INSTEAD. IT'S RECOMMENDED BY REDUX AS WELL AS REACT-REDUX (PERFORMANCE REASONS AND YOU SHOULDN'T IMPORT STORE OBJECT INTO COMPONENTS)

const App = () => {
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      store.dispatch({ type: "SET_CURRENT_USER", payload: user });
    });
    return unsubscribe;
  }, []);

  return (
    <ProfilePopupContextProvider>
      <ShopProductsContextProvider>
          <BrowserRouter>
            <CurrentGenderContextProvider>
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
            </CurrentGenderContextProvider>
          </BrowserRouter>
      </ShopProductsContextProvider>
    </ProfilePopupContextProvider>
  );
};

export default App;
