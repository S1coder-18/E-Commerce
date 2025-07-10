import new_collections from "../../assets/newcollections";
import Item from "../Item/Item";
import "./NewCollections.css";
function NewCollections() {
  return (
    <>
      <div className="newcollections">
        <h1>New Collections</h1>
        <hr />
        <div className="collections">
          {new_collections.map((item, index) => {
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
export default NewCollections;
