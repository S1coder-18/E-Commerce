import "./Populer.css";
import Item from "../Item/Item";
import data_product from "../../assets/data";
function Populer() {
  return (
    <>
      <div className="populer">
        <h1>POPULER IN WOMEN</h1>
        <hr/>
        <div className="populer-item">
          {data_product.map((item, index) => {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
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

export default Populer;
