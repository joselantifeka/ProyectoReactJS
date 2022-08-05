import { createContext } from "react";
import { useContext, useState, useEffect } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

const { Provider } = CartContext;

export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [orderId, setOrderId] = useState(() => {
    if (localStorage.length == 0) {
      return false;
    } else {
      return localStorage.getItem("ID");
    }
  });

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
      return item.id !== id;
    });
    setCart(CartFilter);
  };

  const isInCart = (id) => {
    if (cart) {
      const comprobation = cart.some((cartItem) => {
        return cartItem.id === id;
      });
      return comprobation;
    } else return false;
  };
  const clear = () => {
    setCart([]);
  };

  const calcPriceCart = () => {
    let total = 0;
    cart.forEach((itemCart) => (total += itemCart.cant * itemCart.precio));
    return total;
  };

  const [width, setWidth] = useState(window.innerWidth);
  const handleResize = () => {
    setWidth(window.innerWidth);
  };
  
  useEffect(() => {
    window.addEventListener("resize", handleResize);
  
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Provider
      value={{
        cart,
        calcPriceCart,
        addToCart,
        clear,
        removeFromeCart,
        isInCart,
        orderId,
        setOrderId,
        width,
        setWidth,

      }}
    >
      {children}
    </Provider>
  );
}

export default useCartContext;
