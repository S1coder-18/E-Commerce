import Hero from "../Components/Hero/Hero";
import Offers from "../Components/Offers/Offers";
import Populer from "../Components/Populer/Populer";
import NewCollections from "../Components/NewCollections/NewCollections";
function Shop(){

    return(
        <>
        <div>
          <Hero />
          <Populer />
          <Offers />
          <NewCollections />
        </div>
        </>

    )
}

export default Shop;