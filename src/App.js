import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartView from "./components/CartView";
// import ItemDetail from "./components/ItemDetail";
import ItemDetailContainer from "./components/ItemDetailContainer";
// import Body from "./components/Body";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import { CartContextProvider } from "./store/CartContext";


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import OrderContainer from "./components/OrderContainer";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
