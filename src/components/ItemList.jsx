import { useState , useEffect } from "react";
import React from 'react'
import Item from './Item'

function ItemList() {
    const [info, setinfo] = useState([])

    useEffect(() => {
        fetch('data.json')
        .then((resp) => resp.json())
        .then((data) => setinfo(data))
    },[])
  return (
    <div>
        {info && info.map(i => <Item name={i.nombre} stock={i.stock} precio={i.precio} initial={i.initial} />)}
    </div>
  )
}

export default ItemList