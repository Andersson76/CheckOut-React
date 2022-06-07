import React from 'react'
import  { useState, useEffect, useCallback, useRef, FC, PropsWithChildren, createContext } from 'react'
import { Product, productList } from '../../data/productlist'

// Hur ska vi tänka här!!
interface ContextData {
    item: Product[]
}

interface Props {}

// Fråga Victor vad DefaultContect är!! 

/* const DefaultContext: ContextData = {
} */


/* const CartContext = React.createContext<ContextData>({
    item: productList 
})  */


export const CartContext = createContext([]);
/* export const AddCartContext = createContext(item => {});
export const RemoveCartContent = createContext((item) => {}) */


const CartProvide: FC<PropsWithChildren<Props>> = (props) => {


  /*   const [cartItems, setCartItems] = useState()  */ //  State, funktion, Hook = empty array // Contex? 

    const [items, setItems] = useState([]);

    return (
        <div>
            <CartContext.Provider value={items} > {/* tar in värderna från interfacen*/}
              {props.children}
            </CartContext.Provider>    
        </div>
    )
}

export default CartProvide


    