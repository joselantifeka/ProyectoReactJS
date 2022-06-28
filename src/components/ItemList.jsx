import { useState , useEffect } from "react";
import React from 'react'
import Item from './Item'

function getItem(){
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      let item = [];
      fetch('data.json')
        .then((resp) => resp.json())
        .then((data) => resolve(data))   
    }, 500);
  })
}

function ItemList() {
    const [info, setinfo] = useState([])

    useEffect(() => {
        getItem().then((resp) =>{
          setinfo(resp)
        })
    },[])
  return (
    <div>
        {info && info.map(i => <Item name={i.nombre} stock={i.stock} precio={i.precio} initial={i.initial} />)}
    </div>
  )
}

export default ItemList