import React from "react";
import ItemCount from "./ItemCount";
import useCartContext from "../store/CartContext";
import { Link } from "react-router-dom";


function ItemDetail({item}){
  const { addToCart, isInCart } = useCartContext()
  function onAdd(cantidad){
    addToCart(item, cantidad)
  }
  return (
    <div className="flex flex-col text-center m-auto mt-[3.5rem] w-[38rem] relative shadow-[0px/2px/7px/#dfdfdf] m-[50px/auto] bg-[#fafafa]">
      <div className="badge absolute left-0 top-20 uppercase text-[13px] font-bold bg-red-500 text-white px-[10px] py-[3px]">
        <p>New product</p>
      </div>
      <div className="product-img flex items-center justify-center h-[300px] p-[50px] bg-[#f0f0f0]">
        <img
          src={item.img}
          alt="imagen del producto"
          className="max-w-full max-h-full"
        />
      </div>
      <div className="product-Details p-[30px]">
        <span className="product-category block text-[12px] font-bold uppercase text-[#ccc] mb-[18px]">
          {item.categoria}
        </span>
        <h4 className="font-medium block mb-[18px] uppercase text-[#363636] duration-[0.3s] hover:text-[red]">
          {item.nombre}
        </h4>
        <p className="text-[15px] leading-[22px] mb-[18px] text-[#999]">
          {item.description}
        </p>
        <div className="product-button-details overflow-hidden border-t-[1px] border-solid border-[#eee]">
          { isInCart(item.id) ?
          <div>
            <p className="my-[15px]">producto agregado al carrito!</p>
            <div className="flex justify-between mx-[10%] items-center">
              <Link to="/">
                <p className="my-[15px] text-[red] hover:text-[#FF00ce]">Seguir comprando</p>
              </Link>
              <Link to="/cart">
                <p className="my-[15px] text-[red] hover:text-[#FF00ce]">Ir al carrito</p>
              </Link>
            </div>
          </div>  
          :<ItemCount stock={item.stock} precio={item.precio} initial={item.initial} onAdd={onAdd}/>}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
