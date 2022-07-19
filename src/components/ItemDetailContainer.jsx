import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import ItemDetail from "./ItemDetail";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";


function ItemDetailContainer() {

  const [info, setinfo] = useState(false);
  const { itemid } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const db = getFirestore();
    const q = query(collection(db, "items"), where("id", "==", Number(itemid)));
    getDocs(q).then((snapshot) => {
      setinfo(snapshot.docs.map((doc) => doc.data()));
      setLoading(false);
    });
  }, [itemid]);
  return (
    <div>
      {loading && <p className="text-center my-[14%]">Loading...</p>}
      {info.length && <ItemDetail item={info[0]} />}
    </div>
  );
}

export default ItemDetailContainer;
