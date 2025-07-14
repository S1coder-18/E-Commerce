import data_product from "../../assets/data";
import "./RelatedProduct.css";
import Item from "../Item/Item";
function RelatedProduct() {
  return (
    <>
      <div className="relatedproducts">
        <h1>Related Products</h1>
        <hr />

        <div className="relatedproducts-item">
          {data_product.map((item, index) => {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                category={item.category}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RelatedProduct;
