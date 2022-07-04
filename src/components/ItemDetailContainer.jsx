import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import ItemDetail from "./ItemDetail";
import data from "../data.json";

function getItemDetail(itemid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const itemsFind = data.find((item) => {
        return item.id == itemid;
      });
      resolve(itemsFind)
    }, 0);
  });
}

function ItemDetailContainer() {
  const [info, setinfo] = useState(false);
  const { itemid } = useParams();
  useEffect(() => {
    getItemDetail(itemid).then((resp) => {
      setinfo(resp);
    });
  }, [itemid]);
  console.log(info)
  return (
    <div>
      {info && (
        <ItemDetail
          name={info.nombre}
          stock={info.stock}
          precio={info.precio}
          initial={info.initial}
          categoria={info.categoria}
          description={info.description}
        />
      )}
    </div>
  );
}

export default ItemDetailContainer;
