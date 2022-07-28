import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation";
import LandingPage from "./routes/landing-page";
import ProductsPage from "./routes/products-page";
import ShopPage from "./routes/shop-page";
import SignInPage from "./routes/sign-in-page";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import { ProductContextProvider } from "./contexts/productsContext";
import { ShopProductsContextProvider } from "./contexts/shopProductsContext";
import { ShoppingCartContextProvider } from "./contexts/shoppingCartContext";
import { ProfilePopupContextProvider } from "./contexts/profilePopupContext";
import ScrollToTop from "./utils/scrollToTop";
import CategoryPage from "./routes/category-page";

const App = () => {
  return (
    <UserAuthContextProvider>
      <ProfilePopupContextProvider>
        <ProductContextProvider>
          <ShopProductsContextProvider>
            <ShoppingCartContextProvider>
              <BrowserRouter>
                <ScrollToTop>
                  <Routes>
                    <Route path="/" element={<Navigation />}>
                      <Route index element={<LandingPage />} />
                      <Route path=":sex" element={<LandingPage />} />
                      <Route path=":sex/:category" element={<ProductsPage />} />
                      <Route path="shop" element={<ShopPage />} />
                      <Route path="shop/:label" element={<CategoryPage />} />
                      <Route path="auth" element={<SignInPage />} />
                    </Route>
                  </Routes>
                </ScrollToTop>
              </BrowserRouter>
            </ShoppingCartContextProvider>
          </ShopProductsContextProvider>
        </ProductContextProvider>
      </ProfilePopupContextProvider>
    </UserAuthContextProvider>
  );
};

export default App;
