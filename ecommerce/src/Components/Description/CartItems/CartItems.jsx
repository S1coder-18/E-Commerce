import { useContext } from "react";
import "./cartItems.css";
import remove_icon from "../../../assets/remove.webp";
import { ShopContext } from "../../../Context/ShopContext";

function CartItems() {
  const { all_product, cartItems, removeFromCart } = useContext(ShopContext);
  return (
    <>
      <div className="cartItems">
        <div className="cartitems-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e) => {
          if (cartItems[e.id] > 0) {
            return (
              <div>
                <div className="cartItems-format">
                  <img src={e.image} alt="" className="carticon-product-icon" />
                  <p>{e.name}</p>
                  <p>${e.new_price}</p>
                  <button className="cartitems-quantity">
                    <p>{e.new_price*cartItems[e.id]}</p>
                    <img src={remove_icon} alt="" height="20px" onClick={()=>removeFromCart(e.id)}/>
                  </button>
                </div>
              </div>
            );
          }
        })}

        <hr />
      </div>
    </>
  );
}

export default CartItems;
