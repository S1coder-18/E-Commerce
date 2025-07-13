import Hero from "../Components/Hero/Hero";
import Offers from "../Components/Offers/Offers";
import Populer from "../Components/Populer/Populer";
import NewCollections from "../Components/NewCollections/NewCollections";
import Newsletter from "../Components/NewsLetter/Newsletter";
import Footer from "../Components/Footer/Footer";
function Shop(){

    return(
        <>
        <div>
          <Hero />
          <Populer />
          <Offers />
          <NewCollections />
          <Newsletter />
        </div>
        </>

    )
}

export default Shop;