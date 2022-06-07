import React from 'react'
import  { useState, useEffect, FC, PropsWithChildren, createContext } from 'react'
import { Product } from '../../data/productlist'
import Products from '../pages/product'
import CartItems from './test'


interface ContextData {
    productList: Product[],
    cartItems: Product,
    quantity: number,
}

const CartContext = React.createContext<ContextData>({}) 


interface Props {
    product: Product
}
/*
const defaultContext: ContextData = {
    productList: [],
    addProductToCart: () => {},
    removeProductFromCart: () => {}
  }
*/

export const addToCart = createContext(()=> {})
export const removeCart = createContext(() => {})


const CartProvide: FC<PropsWithChildren<Props>> = (props) => {
    
    const [cartItems, setCartItems] = useState([]) // State, funktion, Hook = empty array // Contex? 

    return (
        <div>
            

        </div>
    )
}

export default CartProvide


    