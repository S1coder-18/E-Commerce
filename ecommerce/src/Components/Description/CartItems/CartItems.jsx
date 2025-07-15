import { useContext } from "react";
import "./cartItems.css";
import remove_icon from "../../../assets/remove.webp";
import { ShopContext } from "../../../Context/ShopContext";

function CartItems() {
  const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);
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
                    {cartItems[e.id]}
                  </button>
                  <p>{e.new_price * cartItems[e.id]}</p>
                  <img
                    src={remove_icon}
                    alt=""
                    height="20px"
                    onClick={() => removeFromCart(e.id)}
                  />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="cartitems-down">
          <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping Fee</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Total</p>
                <p>${getTotalCartAmount()}</p>
              </div>
            </div>
            <button>PROCESS TO CHECKOUT</button>
            <div className="cartitems-promocde">
              <p>If you have a promo code , Enter here</p>
              <div className="cartitems-promobox">
                <input type="text" placeholder="Enter Promo Code" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
        <div className="cart-summary-card">
  <p className="thankyou-message">
    🎉 Thank you for shopping with us!
  </p>
</div>

      </div>
    </>
  );
}

export default CartItems;
