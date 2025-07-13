import Product from "../../Pages/Product";
import "./ProductDisplay.css";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
function ProductDisplay(props) {
  const { product } = props;
  return (
    <>
      <div className="productdisplay">
        <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" height="200px" />
            <img src={product.image} alt="" height="200px" />
            <img src={product.image} alt="" height="200px" />
            <img src={product.image} alt="" height="200px" />
          </div>

          <div className="productdispaly-img">
            <img
              className="productdisplay-main-img"
              src={product.image}
              alt=""
              height="500px"
            />
          </div>
        </div>
        <div className="productdisplay-right">
          <h1>{product.name}</h1>
          <div className="productdisplay-right-star">
            <img src={star_icon} alt="" height="20px" />
            <img src={star_icon} alt="" height="20px" />
            <img src={star_icon} alt="" height="20px" />
            <img src={star_icon} alt="" height="20px" />
            <img src={star_dull_icon} alt="" height="20px" />
            <p>Views 130</p>
          </div>
          <div className="productdisplay-right-prices">
            <div className="productdisplay-right-price-old">
              ${product.old_price}
            </div>
            <div className="productdisplay-right-price-new">
              ${product.new_price}
            </div>
            <div className="productdisplay-right-description">
              Discover the perfect blend of comfort, quality, and trend with our
              latest clothing collection. Crafted from premium, breathable
              fabrics, each piece is tailored to move with you — whether you're
              heading out for a casual day or dressing up for a night out.
            </div>
            <div className="productdisplay-right-size">
              <h1>Select Size</h1>
              <div className="productdisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>
                <div>XXL</div>
              </div>
            </div>
            <button>ADD TO CART</button>
            <div className="productdisplay-right-display-category">
                <span>Category:<span>Women, T-Shirt, Crop Top</span></span>
            </div>
            <div className="productdisplay-right-display-category">
                <span>Tags:<span>Modern, Latest, Trend</span></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDisplay;
