import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import BredCrums from "../Components/Bredcrums/BredCrums.jsx";
import ProductDisplay from "../Components/ProductDisplay/ProductDisplay";
import Description from "../Components/Description/Description.jsx";
import RelatedProduct from "../Components/RelatedProduct/RelatedProduct.jsx";
function Product() {
  const { all_product } = useContext(ShopContext);

  const { productId } = useParams();

  const product = all_product.find((item) => item.id == productId);
    if (!product) return <div>Loading product...</div>;
   
  return (
    <>
      <div>
        <BredCrums product={product} />
        <ProductDisplay product={product} />
        <Description product={Description} />
        <RelatedProduct product={RelatedProduct}/>
      </div>
    </>
  );
}

export default Product;
