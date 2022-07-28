import { createContext, useState } from "react";

export const ShoppingCartContext = createContext({
  productsInShoppingCart: [],
  addToShoppingCart: () => null,
  removeFromShoppingCart: () => null,
  shoppingCartIsOpen: false,
  setShoppingCartIsOpen: () => null,
  quantity: 0,
});

export const ShoppingCartContextProvider = ({ children }) => {
  const [productsInShoppingCart, setProductsInShoppingCart] = useState([]);
  const [shoppingCartIsOpen, setShoppingCartIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(0);

  const addToShoppingCart = (product) => {
    const productExists = productsInShoppingCart.some(item => item.id === product.id);
    if (productExists) {
      const newList = productsInShoppingCart.map(item => item.id === product.id ? {...item, quantity: item.quantity + 1} : item);
      setProductsInShoppingCart(newList);
    } else {
      setProductsInShoppingCart([...productsInShoppingCart, {...product, quantity: 1}]);
    }
    setQuantity(prev => prev + 1);
  };

  const removeFromShoppingCart = () => {
    console.log("remove item from Shopping cart");
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        productsInShoppingCart,
        addToShoppingCart,
        removeFromShoppingCart,
        shoppingCartIsOpen,
        setShoppingCartIsOpen,
        quantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
