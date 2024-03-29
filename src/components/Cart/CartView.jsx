import React from "react";
import useCartContext from "../../store/CartContext";
import { TrashIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import PaymodalContainer from "../PayModal/PaymodalContainer";

function CartView() {
  const { cart, removeFromeCart, clear, calcPriceCart, width } =
    useCartContext();

  if (width > 900) {
    if (cart.length > 0) {
      return (
        <div className="container mx-auto w-[768px]">
          <div className="flex flex-col m-auto justify-center mt-[25px] items-center">
            {cart.map((itemCart) => {
              return (
                <div
                  key={itemCart.id}
                  className="mb-[50px] w-[100%] h-[10rem]  flex"
                >
                  <picture className="basis-2/5 flex justify-center">
                    <img
                      src={itemCart.img}
                      alt="imagen del producto"
                      className="max-w-full max-h-full"
                    ></img>
                  </picture>
                  <div className="basis-3/5 flex flex-col m-[10px] gap-[10px] bg-[#F8F8F8]">
                    <h2 className="font-semibold">{itemCart.nombre}</h2>
                    <h3>X{itemCart.cant}</h3>
                    <p>${itemCart.cant * itemCart.precio}</p>
                    <TrashIcon
                      onClick={() => removeFromeCart(itemCart.id)}
                      className="h-[25px] w-[25px]  hover:text-[red] hover:cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mx-[20px] my-[20px] flex justify-between font-medium">
            <p>
              Total: <span className="font-normal">${calcPriceCart()}</span>
            </p>
            <PaymodalContainer>Ir a pagar</PaymodalContainer>
            <button className="" onClick={clear}>
              Vaciar carrito{" "}
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center gap-[10px] mt-[50px]">
          <p>Agrega articulos al carrito!</p>
          <Link className="font-semibold" to="/">
            Ir al inico
          </Link>
        </div>
      );
    }
  } else{
    if (cart.length > 0) {
      return (
        <div className="container mx-auto min-w-min max-w-[768px]">
          <div className="flex flex-col m-auto justify-center mt-[25px] items-center">
            {cart.map((itemCart) => {
              return (
                <div
                  key={itemCart.id}
                  className="mb-[50px] w-[100%] h-[10rem]  flex flex-row"
                >
                  <picture className="basis-4/5 flex justify-center">
                    <img
                      src={itemCart.img}
                      alt="imagen del producto"
                      className="max-w-full max-h-full"
                    ></img>
                  </picture>
                  <div className="basis-2/5 flex flex-col m-[10px] gap-[10px] bg-[#F8F8F8]">
                    <h2 className="font-semibold">{itemCart.nombre}</h2>
                    <h3>X{itemCart.cant}</h3>
                    <p>${itemCart.cant * itemCart.precio}</p>
                    <TrashIcon
                      onClick={() => removeFromeCart(itemCart.id)}
                      className="h-[25px] w-[25px]  hover:text-[red] hover:cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mx-[20px] my-[20px] flex flex-col items-center gap-[20px] justify-between font-medium">
            <p>
              Total: <span className="font-normal">${calcPriceCart()}</span>
            </p>
            <PaymodalContainer>Ir a pagar</PaymodalContainer>
            <button className="" onClick={clear}>
              Vaciar carrito{" "}
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center gap-[10px] mt-[50px]">
          <p>Agrega articulos al carrito!</p>
          <Link className="font-semibold" to="/">
            Ir al inico
          </Link>
        </div>
      );
    }
  }
}

export default CartView;
