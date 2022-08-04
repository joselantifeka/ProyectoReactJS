import React from 'react'
import useCartContext from "../../store/CartContext";

function OrderWidget() {
  const { orderId } = useCartContext();
  return (
    <div className="bg-orange-400 flex justify-around py-[12px] text-[white] font-medium hover:bg-orange-500 cursor-pointer">
      <p>Tus ordenes en curso</p>
      <p>id: <span className="font-semibold">{orderId}</span></p>
    </div>
  )
}

export default OrderWidget