import React, {useState} from "react";
import { PlusIcon } from '@heroicons/react/outline'

function ItemCount({name, stock, initial}) {
    const [count, setCount] = useState(initial);
    function handleAdd(){
        (count < stock ) && setCount(count + 1);
    }
    function handleSubstract(){
        (count > 1) && setCount(count - 1);
    }
    return (
    <div className="container mx-auto px-5 py-6">
      <div className="flex flex-col text-center mb-12 w-full">
        <h1 className="font-bold tittle-font mb">{name}</h1>
        <div>
          <div>
            <button onClick={handleSubstract}>-</button>
            <span className="mx-10">{count}</span>
            <button onClick={handleAdd}>+</button>
          </div>
          <div>
            <button className="border-solid border-2 border-black p-3 mt-2 rounded-full">Agregar al carrito</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemCount;
