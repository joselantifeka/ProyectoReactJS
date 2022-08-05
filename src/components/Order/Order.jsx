import React from "react";
import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import { Link } from "react-router-dom";
import useCartContext from "../../store/CartContext";

function Order({ item, total, id }) {
  const { setOrderId, width } = useCartContext();
  function cancelHanlder() {
    const db = getFirestore();
    deleteDoc(doc(db, "orders", id));
    localStorage.clear();
    setOrderId(false);
  }
  if (width > 900) {
    return (
      <div className="container mx-auto w-[768px]">
        <h2 className="text-center my-[30px] font-semibold">
          Orden:<span className="ml-[50px]">{id}</span>
        </h2>
        <div className="flex flex-col m-auto justify-center mt-[25px] items-center">
          {item.map((itemCart) => {
            return (
              <div
                key={itemCart.id}
                className="mb-[50px] w-[100%] h-[10rem] flex"
              >
                <picture className="basis-2/5 flex justify-center">
                  <img
                    src={itemCart.img}
                    alt="imagen del producto"
                    className="h-full"
                  ></img>
                </picture>
                <div className="basis-3/5 flex flex-col justify-evenly bg-[#F8F8F8]">
                  <h2 className="font-semibold">{itemCart.nombre}</h2>
                  <h3>X{itemCart.cant}</h3>
                  <p>${itemCart.cant * itemCart.precio}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mx-[20px] my-[20px] flex justify-between font-medium">
          <p>
            Total: <span className="font-normal">${total}</span>
          </p>
          <Link to="/catalogo" className="" onClick={cancelHanlder}>
            Cancelar Orden
          </Link>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container mx-auto min-w-min max-w-[768px]">
        <h2 className="text-center my-[30px] font-semibold">
          Orden:<span className="ml-[50px]">{id}</span>
        </h2>
        <div className="flex flex-col m-auto justify-center mt-[25px] items-center">
          {item.map((itemCart) =>{
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
                  </div>
                </div>
              );
            })}
        </div>
        <div className="mx-[20px] my-[20px] flex justify-between font-medium">
          <p>
            Total: <span className="font-normal">${total}</span>
          </p>
          <Link to="/catalogo" className="" onClick={cancelHanlder}>
            Cancelar Orden
          </Link>
        </div>
      </div>
    )
  }
}

export default Order;
