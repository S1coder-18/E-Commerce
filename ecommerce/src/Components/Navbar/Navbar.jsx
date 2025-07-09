import "./Navbar.css";
import logo from "../../assets/logo.webp";
import cart from "../../assets/Cart.webp";
import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar() {
  const [menu, setMenu] = useState("home");
  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <img src={logo} alt="" height="40px" />
          <p className="logo-text">Shopify</p>
        </div>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("home");
            }}
          >
            <Link to="/" style={{textDecoration: "none", color:"#626262"}}>Home</Link>
            {menu === "home" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("mens");
            }}
          >
            <Link to="/mens" style={{textDecoration: "none", color:"#626262"}}>Mens</Link>
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("womens");
            }}
          >
            <Link to="/womens" style={{textDecoration:"none", color:"#626262"}}>Womens</Link>
            {menu === "womens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link to="/kids" style={{textDecoration:"none", color:"#626262"}}>Kids</Link>

            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
        <div className="nav-login-cart">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/cart">
            <img src={cart} alt="" height="40px" />
          </Link>
          <div className="nav-cart-count">0</div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
