export const addItemToCart = (cartItems, newItem) => {
  let newCartItems = []; // wie löse ich das ohne "let"?
  const productAlreadyExists = cartItems.some((item) => item.id === newItem.id);
  if (productAlreadyExists) {
    newCartItems = cartItems.map((item) => (item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item));
  } else {
    newCartItems = [...cartItems, { ...newItem, quantity: 1 }];
  }
  const newTotalQuantity = newCartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
  const newTotal = newCartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  // newTotalQuantity und newTotal auslagern? Best practise?
  return {
    type: "SET_CART_ITEMS",
    payload: {
      cartItems: newCartItems,
      totalQuantity: newTotalQuantity,
      total: newTotal,
    },
  };
};

/*
// addItemToCart importieren?

const cartItems = useSelector("cartItems")
useDispatch(addItemToCart(cartItems, newItem));

*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////

  export const decreaseQuantity = (cartItems, product) => {
    let newCartItems = []; // wie löse ich das ohne "let"?
    const itemQuantity = cartItems.filter((item) => item.id === product.id)[0].quantity;
    if (itemQuantity > 1) {
      newCartItems = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item
      );
    } else {
      newCartItems = cartItems.filter((item) => item.id !== product.id);
    }
    const newTotalQuantity = newCartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
    const newTotal = newCartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    // newTotalQuantity und newTotal auslagern? Best practise?
    return {
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        totalQuantity: newTotalQuantity,
        total: newTotal,
      },
    };
  };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const removeFromCart = (cartItems, product) => {
    const newCartItems = cartItems.filter((item) => item.id !== product.id);
    const newTotalQuantity = newCartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
    const newTotal = newCartItems.reduce((total, item) => total + item.quantity * item.price, 0);
    // newTotalQuantity und newTotal auslagern? Best practise?
    return {
      type: "SET_CART_ITEMS",
      payload: {
        cartItems: newCartItems,
        totalQuantity: newTotalQuantity,
        total: newTotal,
      },
    };
  };

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  export const toggleIsCartOpen = () => {
    return {
        type: "TOGGLE_IS_CART_OPEN",
      };
  };