import React from "react";
import ItemCount from "./ItemCount";
import { PlusCircleIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

function Item({ name, stock, precio, initial, categoria, description, id }) {
  return (
    <div className="flex flex-col text-center mb-12 w-[38rem] relative shadow-[0px/2px/7px/#dfdfdf] m-[50px/auto] bg-[#fafafa]">
      <div className="badge absolute left-0 top-20 uppercase text-[13px] font-bold bg-red-500 text-white px-[10px] py-[3px]">
        <p>New product</p>
      </div>
      <div className="product-img flex items-center justify-center h-[300px] p-[50px] bg-[#f0f0f0]">
        <img
          src=""
          alt="imagen del producto"
          className="max-w-full max-h-full"
        />
      </div>
      <div className="product-Details p-[30px]">
        <span className="product-category block text-[12px] font-bold uppercase text-[#ccc] mb-[18px]">
          {categoria}
        </span>
        <h4 className="font-medium block mb-[18px] uppercase text-[#363636] duration-[0.3s] hover:text-[red]">
          {name}
        </h4>
        <p className="text-[15px] leading-[22px] mb-[18px] text-[#999]">
          {description}
        </p>
        <div className="product-button-details overflow-hidden border-t-[1px] border-solid border-[#eee]">
          <div className="flex aling-center my-[20px]">
            <div className=" w-1/2">
              <p className="text-[18px] text-[red] font-semibold">
                <span className="text-[80%] font-normal line-through inline-block mr-[5px]">
                  ${precio - precio / 4}
                </span>
                ${precio}
              </p>
            </div>
            <div className="w-1/2 m-auto flex aling-center justify-center">
              <Link to={`/producto/${id}`} className="">
                <PlusCircleIcon className="h-[25px] w-[25px] text-center items-center m-auto hover:text-[red]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
