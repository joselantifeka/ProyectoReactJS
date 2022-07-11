import { createContext } from "react";
import { useContext, useState } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const { Provider } = CartContext;

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item, cant) => {
    if (isInCart(item.id)) {
      const newItem = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          const copyItem = { ...cartItem };
          copyItem.cant += cant;
          return copyItem;
        } else return cartItem;
      });
      setCart(newItem);
    } else {
      const newItem = { ...item, cant };
      setCart([...cart, newItem]);
    }
  };

  const removeFromeCart = (id) => {
    const newCart = [...cart];
    const CartFilter = newCart.filter((item) => {
      return newCart.id !== id;
    });
  };

  const isInCart = (id) => {
    if (cart) {
      const comprobation = cart.some((cartItem) => {
        return cartItem.id === id;
      });
      return comprobation;
    } else return false;
  };
  const clear = () =>{
    cart = [];
  }

  return (
    <Provider value={{cart, addToCart, clear, removeFromeCart }}>{children}</Provider>
  );
}

export default useCartContext;
