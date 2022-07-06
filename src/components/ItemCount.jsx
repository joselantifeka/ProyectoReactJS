import React, { useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";


function ItemCount({ stock, precio, initial, onAdd }) {
  const [count, setCount] = useState(initial);
  function handleAdd() {
    count < stock && setCount(count + 1);
  }
  function handleSubstract() {
    count > 1 && setCount(count - 1);
  }
  return (
    <>
      <div className="flex aling-center my-[20px]">
        <div className=" w-1/2">
          <div>
            <p className="text-[18px] text-[red] font-semibold">
              <span className="text-[80%] font-normal line-through inline-block mr-[5px]">
                ${precio - precio / 4}
              </span>
              ${precio}
            </p>
            <div className="mt-[15px]">
              <button className="" onClick={handleSubstract}>
                -
              </button>
              <span className="mx-10">{count}</span>
              <button onClick={handleAdd}>+</button>
            </div>
          </div>
        </div>
        <div className="w-1/2 m-auto flex aling-center justify-center">
          <button onClick={ () => onAdd(count)} className="">
            <ShoppingCartIcon className="h-[25px] w-[25px] text-center items-center m-auto hover:text-[red]" />
          </button>
        </div>
      </div>
    </>
  );
}

export default ItemCount;
