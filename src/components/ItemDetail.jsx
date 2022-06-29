import React from "react";
import ItemCount from "./ItemCount";

function ItemDetail({name, stock, precio, initial, description}) {
    console.log(stock, precio, initial)
  return (
    <div className="flex flex-col text-center mb-12 w-full">
      <h1 className="font-bold tittle-font mb">{name}</h1>
      <div>
        <p>{description}</p>
        <ItemCount stock={stock} precio={precio} initial={initial} /> {/* AYUDAAA ME NO SALE EL INITIAL AL USAR */}
        <div>
          <button className="border-solid border-2 border-black p-3 mt-2 rounded-full">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
