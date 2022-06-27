import React, {useState} from "react";

function ItemCount({stock, precio, initial}) {
    const [count, setCount] = useState(initial);
    function handleAdd(){
        (count < stock ) && setCount(count + 1);
    }
    function handleSubstract(){
        (count > 1) && setCount(count - 1);
    }
    return (
          <div>
            <p>${precio}</p>
            <button onClick={handleSubstract}>-</button>
            <span className="mx-10">{count}</span>
            <button onClick={handleAdd}>+</button>
          </div>
  );
}

export default ItemCount;
