import React from "react"
import { FC, PropsWithChildren, useState, useEffect } from "react"
import { Product, productList } from "../../data/productlist"
import CartItems from "./test"
import Products from "../pages/product"


interface Props {}

/* Props/Funktioner vi vill ha:
productList
Items in Cart/Quantty
Total Price
Empty Cart

Add Product
Remove Product
Reduce Product
 */

export interface ContextData { 
    itemInCart: CartItem[],
    addProductToCart: (product: Product) => void,
    removeProductFromCart: () => void
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


export const CartContext = React.createContext<ContextData>(DefaultContextData)  /* Typen vi tar in är ContexData */ // Logiken ska ligga i egen fil?

const CartProvider: FC<PropsWithChildren<Props>> = (props) => {

/* const { värde, värde } = useContext(importerar i Context) = som exporterar från Provider-filen vi skapat  */

    const [itemInCart, setCart] = useState<CartItem[]>([]) // State, funktion & hook useState med tom array
    
    const addProductToCart = (product: Product) => {

           let cartListCopy = [...itemInCart]

            const foundProduct = productList.find((item) => product.id == item.id)
    
            if(foundProduct) {
            return
        }



           cartListCopy.push()
           setCart

         
       //  setCart(cartItem)
    }
    const removeProductFromCart = () => {
      
    }

    /* I useEffect om vi vill göra en funktion inom useEffecten gör vi det i useEffekt */
   /* useEffect(() => { /* Körs en gång (2 ggr med StrickMode i main) 

    }, [])
*/

    return(
        <CartContext.Provider value={{itemInCart, addProductToCart, removeProductFromCart }}> {/* Allt från cart-objektet... Value kommer vara tillgängligt i alla komponenter*/}
          {props.children} {/* props.children är det vi renderar ut i Layouten */}
        </CartContext.Provider>
    )

}

export default CartProvider

