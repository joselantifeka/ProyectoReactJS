import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartView from "./components/Cart/CartView";
import ItemDetailContainer from "./components/Item/ItemDetailContainer";
import ItemListContainer from "./components/Item/ItemListContainer";
import NavBar from "./components/NavBar";
import { CartContextProvider } from "./store/CartContext";
import { initializeApp } from "firebase/app";
import OrderContainer from "./components/Order/OrderContainer";
const firebaseConfig = {
  apiKey: "AIzaSyBGEdK9mfkBySU2yQfZnVXfLkibU1Njl0c",
  authDomain: "gavishop-1b325.firebaseapp.com",
  projectId: "gavishop-1b325",
  storageBucket: "gavishop-1b325.appspot.com",
  messagingSenderId: "457540296680",
  appId: "1:457540296680:web:b1eabe7ea7312f87cd4e5d",
  measurementId: "G-J0P7G3KSGE"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

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
          <Route path="/ordern/:orderId" element={<OrderContainer />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
