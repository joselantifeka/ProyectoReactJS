// import { useState , useEffect } from "react";
import React from 'react'
import Item from './Item'


function ItemList({item}) {
  return (
    <>
        {item.map(i => <Item key={i.id} name={i.nombre} stock={i.stock} precio={i.precio} initial={i.initial} categoria={i.categoria} description={i.description} id={i.id} />)}
    </>
  )
}

export default ItemList