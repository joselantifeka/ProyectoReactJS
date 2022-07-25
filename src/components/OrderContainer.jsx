import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Order from './Order'
import {
  doc,
  getDoc,
  getFirestore,
} from "firebase/firestore";

function OrderContainer() {
    const [info, setInfo] = useState(false);
  const { orderId } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const db = getFirestore();
    const item = doc(db, "orders", `${orderId}`);
    getDoc(item).then((snapshot) => { return { id:snapshot.id , ...snapshot.data()};}).then((res) =>{
        setInfo(res)
        setLoading(false)
    })
  }, [orderId]);
  return (
    <>
    {loading && <p className="text-center my-[14%]">Loading...</p>}
    {info && <Order item={info.items} total={info.total} id={info.id}/>}
    </>
  )
}

export default OrderContainer