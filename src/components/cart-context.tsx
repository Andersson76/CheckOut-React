import React from "react"
import { FC, PropsWithChildren, useState, useEffect } from "react"
import { Product, productList } from "../data/productlist"


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

interface ContextData { 
    cart: { /* Representerar statet */
        itemInCart: boolean,
        totalPrice: boolean
    }
}

const DefaultContextData: ContextData = {
    cart: { 
        itemInCart: true,
        totalPrice: true
    }
}


export const CartContext = React.createContext<ContextData>(DefaultContextData)  /* Typen vi tar in är ContexData */ // Logiken ska ligga i egen fil?

const CartProvider: FC<PropsWithChildren<Props>> = (props) => {

    
/* const { värde, värde } = useContext(importerar i Context) = som exporterar från Provider-filen vi skapat  */

    const [cart, setCart] = useState<ContextData>(DefaultContextData) // State, funktion & hook useState med tom array

    /* I useEffect om vi vill göra en funktion inom useEffecten gör vi det i useEffekt */
    useEffect(() => { /* Körs en gång (2 ggr med StrickMode i main) */
 
        const addItem = () => {
            /* Logik för addItem? */
           
         }

    }, [])


    return(
        <CartContext.Provider value={{...cart}}> {/* Allt från cart-objektet... Value kommer vara tillgängligt i alla komponenter*/}
          {props.children} {/* props.children är det vi renderar ut i Layouten */}
        </CartContext.Provider>
    )

}

export default CartProvider

