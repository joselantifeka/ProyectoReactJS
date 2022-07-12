// import ItemDetailContainer from "./ItemDetailContainer";
import { useState, useEffect} from "react";
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom'
import data from '../data.json'

function getItem(itemcategory){
  return new Promise((resolve,reject) =>{
    setTimeout(() => {
      if(itemcategory){
        const itemsFiltes = data.filter( (item) =>{
          return item.categoria === itemcategory
        });
        resolve(itemsFiltes)
      }
      else{
        resolve(data)
      }
    }, 1000);
  })
}

function ItemListContainer({ greeting }) {
  const [info, setinfo] = useState([]);
  const { itemcategory } = useParams();
  const [loading, setLoading] = useState(true); 
  useEffect(() => {
      getItem(itemcategory).then((resp) =>{
        setinfo(resp)
        setLoading(false)
      })
  },[itemcategory]);
  return (
    <div className="container mx-auto px-5 py-6 text-center">
        <h1 className="font-bold mb">
          Catalogo
        </h1>
        <div className="mx-auto px-5 py-6 flex flex-wrap gap-[2rem] justify-center">
          {loading && <p>Loading...</p>}
          {(info.length > 0 || info) && <ItemList item={info}/>}
        </div>
    </div>
    
  );
}

export default ItemListContainer;
