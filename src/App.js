import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartView from "./components/CartView";
// import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";
// import Body from "./components/Body";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/catalogo" element={<ItemListContainer />} />
          <Route path="/catalogo/:itemcategory" element={<ItemListContainer />} />
          <Route path="/producto/:itemid" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
