import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
  productsInShoppingCart: [],
  addToShoppingCart: () => null,
  removeFromShoppingCart: () => null,
  decreaseQuantity: () => null,
  shoppingCartIsOpen: false,
  setShoppingCartIsOpen: () => null,
  totalQuantity: 0,
  total: 0,
});

export const ShoppingCartContextProvider = ({ children }) => {
  const [productsInShoppingCart, setProductsInShoppingCart] = useState([]);
  const [shoppingCartIsOpen, setShoppingCartIsOpen] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const addToShoppingCart = (product) => {
    const productAlreadyExists = productsInShoppingCart.some((item) => item.id === product.id);
    if (productAlreadyExists) {
      const newList = productsInShoppingCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setProductsInShoppingCart(newList);
    } else {
      setProductsInShoppingCart([...productsInShoppingCart, { ...product, quantity: 1 }]);
    }
    setTotalQuantity((prev) => prev + 1);
    setTotal((prev) => prev + product.price);
  };

  const decreaseQuantity = (product) => {
    const itemQuantity = productsInShoppingCart.filter((item) => item.id === product.id)[0].quantity;
    if (itemQuantity > 1) {
      const newList = productsInShoppingCart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
      setProductsInShoppingCart(newList);
      setTotalQuantity((prev) => prev - 1);
      setTotal((prev) => prev - product.price);
    } else {
      removeFromShoppingCart(product);
    }
  };

  const removeFromShoppingCart = (product) => {
    const productPrice = productsInShoppingCart.filter((item) => item.id === product.id)[0].price;
    const productQuantity = productsInShoppingCart.filter((item) => item.id === product.id)[0].quantity;
    const newList = productsInShoppingCart.filter((item) => item.id !== product.id);
    setProductsInShoppingCart(newList);
    setTotalQuantity((prev) => prev - productQuantity);
    setTotal((prev) => prev - productPrice * productQuantity);
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        productsInShoppingCart,
        addToShoppingCart,
        removeFromShoppingCart,
        decreaseQuantity,
        shoppingCartIsOpen,
        setShoppingCartIsOpen,
        totalQuantity,
        total,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
