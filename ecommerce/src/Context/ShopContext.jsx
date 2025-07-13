import { createContext } from "react";
import all_product from '../assets/all_product.js';
export const ShopContext = createContext(null);

const ShoContextProvider = (props) =>{
    const contextValue = {all_product};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
        
        
    )
}
export default ShoContextProvider;