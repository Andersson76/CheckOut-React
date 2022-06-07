import React from "react"
import { FC, PropsWithChildren, useState } from "react"
import { Product, productList } from "../data/productlist"


interface Props {}

export const CartContext = React.createContext([]); // Logiken ska ligga i egen fil?

const CartProvider: FC<PropsWithChildren<Props>> = (props) => {

    const [cart, setCart] = useState([]) // State, funktion & hook useState med tom array

    return(
        <CartContext.Provider value={cart}> {/* Value kommer vara tillgängligt i alla komponenter */}
          {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider

