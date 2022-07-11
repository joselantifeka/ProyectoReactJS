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
      resolve(itemsFind);
    }, 1000);
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
  return (
    <div>
      {info && (
        <ItemDetail
          item={info}
        />
      )}
    </div>
  );
}

export default ItemDetailContainer;
