import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation";
import ProductsPage from "./routes/products-page";
import SignInPage from "./routes/sign-in-page";
import CheckoutPage from "./routes/checkout-page";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import { ShopProductsContextProvider } from "./contexts/shopProductsContext";
import { ShoppingCartContextProvider } from "./contexts/shoppingCartContext";
import { ProfilePopupContextProvider } from "./contexts/profilePopupContext";
import { GenderInUrlContextProvider } from "./contexts/genderInUrlContext";
import ScrollToTop from "./utils/scrollToTop";
import WomenPage from "./routes/women-page";
import MenPage from "./routes/men-page";

const App = () => {
  return (
    <UserAuthContextProvider>
      <ProfilePopupContextProvider>
        <ShopProductsContextProvider>
          <ShoppingCartContextProvider>
            <BrowserRouter>
              <GenderInUrlContextProvider>
                <ScrollToTop>
                  <Routes>
                    <Route path="/" element={<Navigation />}>
                      <Route index element={<WomenPage />} />
                      <Route path="women" element={<WomenPage />} />
                      <Route path="men" element={<MenPage />} />
                      <Route path=":sex/:category" element={<ProductsPage />} />
                      <Route path="sign-in" element={<SignInPage />} />
                      <Route path="checkout" element={<CheckoutPage />} />
                    </Route>
                  </Routes>
                </ScrollToTop>
              </GenderInUrlContextProvider>
            </BrowserRouter>
          </ShoppingCartContextProvider>
        </ShopProductsContextProvider>
      </ProfilePopupContextProvider>
    </UserAuthContextProvider>
  );
};

export default App;
