import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Cart from "./Pages/Cart";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />}/>
            <Route path="mens" element={<ShopCategory  category="mens" />} />
            <Route path="womens" element={<ShopCategory category="womens" />} />
            <Route path="kids" element={<ShopCategory category="kids" />} />
            <Route path="/product" element={<Product />} />
            <Route path=":products" element={<Product />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/login" element={<LoginSignup/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
