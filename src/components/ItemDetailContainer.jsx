import { useState , useEffect } from "react";
import React from 'react'
import ItemDetail from './ItemDetail'

function getItemDetail(){
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      fetch('data.json')
        .then((resp) => resp.json())
        .then((data) => resolve(data))   
    }, 2000);
  })
}

function ItemDetailContainer() {
    const [info, setinfo] = useState([])
    useEffect(() => {
        getItemDetail().then((resp) =>{
          setinfo(resp[1]);
        })
    },[])
  return (
    <div>
        <ItemDetail name={info.nombre} stock={info.stock} precio={info.precio} initial={info.initial} description={info.description} />
    </div>
  )
}

export default ItemDetailContainer