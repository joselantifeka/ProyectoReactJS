import ItemDetailContainer from "./ItemDetailContainer";
import ItemList from "./ItemList";

function ItemListContainer({ greeting }) {
  return (
    <div className="container mx-auto px-5 py-6 text-center">
        <h1 className="font-bold tittle-font mb">
          Bienvenido a gavishop! {greeting}
        </h1>
        <div className="container mx-auto px-5 py-6">
          <ItemList />
          <ItemDetailContainer />
        </div>
    </div>
    
  );
}

export default ItemListContainer;
