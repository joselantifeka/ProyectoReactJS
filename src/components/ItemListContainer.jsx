import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

function ItemListContainer({ greeting }) {

  function imprimirDocs(itemsRef) {
    getDocs(itemsRef).then((snapshot) => {
      setinfo(snapshot.docs.map((doc) => doc.data()));
      setLoading(false);
    });
  }

  const [info, setinfo] = useState([]);
  const { itemcategory } = useParams();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const db = getFirestore();
    if (!itemcategory) {
      const itemsRef = collection(db, "items");
      imprimirDocs(itemsRef);
    } else {
      const q = query(collection(db, "items"), where("categoria", "==", `${itemcategory}`));
      imprimirDocs(q);
    }
  }, [itemcategory]);
  return (
    <div className="container mx-auto px-5 py-6 text-center">
      <h1 className="font-bold mb">Catalogo</h1>
      <div className="mx-auto px-5 py-6 flex flex-wrap gap-[2rem] justify-center">
        {loading && <p>Loading...</p>}
        {(info.length > 0 || info) && <ItemList item={info} />}
      </div>
    </div>
  );
}

export default ItemListContainer;
