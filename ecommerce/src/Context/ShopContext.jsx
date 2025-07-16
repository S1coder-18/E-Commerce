import { createContext, useState } from "react";
import all_product from '../assets/all_product.js';
export const ShopContext = createContext(null);
import { useEffect } from "react";
import { formToJSON } from "axios";

const getDefaultCart=()=>{
    let cart = {};
    for(let index=0; index < all_product.length+1; index++){
        cart[index] = 0;
    }
    return cart;
}
const ShoContextProvider = (props) =>{
    const [cartItems, setCartItmes] = useState(getDefaultCart());

    const [user, setUser] = useState(()=>{
        const savedUser = localStorage.getItem("user");
        return savedUser ? JSON.parse(savedUser) : null;
    });

    

    const signUp = (newUser) =>{
        localStorage.setItem("user", JSON.stringify(newUser));
    };

    const logout = () =>{
        setUser(null);
        localStorage.removeItem("user");
    };


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

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = all_product.find((product)=>
                product.id === Number(item))

                totalAmount += itemInfo.new_price*cartItems[item];
            }
            
        }
        return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItems = 0;

        for(const item in cartItems){
            if(cartItems[item] > 0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue = {all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems, user, signUp, logout};


    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
        
        
    )
}
export default ShoContextProvider;