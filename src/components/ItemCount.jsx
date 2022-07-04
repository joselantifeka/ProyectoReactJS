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
            <p className="text-[18px] text-[red] font-semibold"><span className="text-[80%] font-normal line-through inline-block mr-[5px]">${precio - (precio/4)}</span>${precio}</p>
            <div className="mt-[15px]">
              <button className="" onClick={handleSubstract}>-</button>
              <span className="mx-10">{count}</span>
              <button onClick={handleAdd}>+</button>
            </div> 
          </div>
  );
}

export default ItemCount;
