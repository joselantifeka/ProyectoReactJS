import { BrowserRouter, Route, Routes } from "react-router-dom";
// import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";
// import Body from "./components/Body";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />}></Route>
        <Route path="/catalogo" element={<ItemListContainer />}></Route>
        <Route path="/catalogo/:itemcategory" element={<ItemListContainer />}></Route>
        <Route path="/producto/:itemid" element={<ItemDetailContainer />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
