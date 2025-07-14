import { createContext, useState } from "react";
import all_product from '../assets/all_product.js';
export const ShopContext = createContext(null);

const getDefaultCart=()=>{
    let cart = {};
    for(let index=0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}
const ShoContextProvider = (props) =>{
    const [cartItems, setCartItmes] = useState(getDefaultCart());

    const addToCart = (itemId) =>{
        setCartItmes((prev) =>(
            {...prev, [itemId]: prev[itemId]+1}
        ))
    }

    const removeFromCart = (itemId) =>{
        setCartItmes((prev) =>(
            {...prev, [itemId]: prev[itemId]-1}
        ))
    }

    const contextValue = {all_product, cartItems,addToCart, removeFromCart};


    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
        
        
    )
}
export default ShoContextProvider;