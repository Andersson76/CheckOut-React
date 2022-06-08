import React from "react"
import { FC, PropsWithChildren, useState, useEffect } from "react"
import { Product, productList } from "../../data/productlist"
import CartItems from "./test"
import Products from "../pages/product"


interface Props {}

export interface ContextData { 
    itemInCart: CartItem[],
    addProductToCart: (product: Product) => void,
    removeProductFromCart: () => void /* typa up med id... */
}

const DefaultContextData: ContextData = { 
    itemInCart: [],
    addProductToCart: () => {},
    removeProductFromCart: () => {}
    
}
export interface CartItem {
    product: Product,
    qty: number
}


export const CartContext = React.createContext<ContextData>(DefaultContextData)  


const CartProvider: FC<PropsWithChildren<Props>> = (props) => {

    const [itemInCart, setCart] = useState<CartItem[]>([])
    

    const addProductToCart = (product: Product) => {

           let cartList = [...itemInCart]

            const foundProduct = productList.find((item) => product.id == item.id)
    
             if(foundProduct) {
                cartList.push({
                    product: product,
                    qty: 1
                })
        
  /*       } else {
            cartList[].qty++ 
        }
 */
        setCart(cartList)

    }

}

                const removeProductFromCart = () => {
      
                }


            return(
                <CartContext.Provider value={{itemInCart, addProductToCart, removeProductFromCart }}> 
                    {props.children} 
                </CartContext.Provider>
    )

}

export default CartProvider


   /* I useEffect om vi vill göra en funktion inom useEffecten gör vi det i useEffekt */
   /* useEffect(() => { /* Körs en gång (2 ggr med StrickMode i main) 

    }, [])
*/