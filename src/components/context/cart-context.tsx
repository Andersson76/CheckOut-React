import React from "react"
import { FC, PropsWithChildren, useState, useEffect } from "react"
import { Product, productList } from "../../data/productlist"


interface Props { }

export interface ContextData {
    itemInCart: CartItem[],
    addProductToCart: (product: Product) => void,
    removeProductFromCart: (id: number) => void,
    reduceProductInCart: (id: number) => void,
    getTotalItems: ( item: CartItem[]) => void
}

const DefaultContextData: ContextData = {
    itemInCart: [],
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    reduceProductInCart: () => {},
    getTotalItems: () => {}
}

export interface CartItem {
    product: Product,
    qty: number,
}


interface TotalItems {
    /* Interface för totalPrice */
}


export const CartContext = React.createContext<ContextData>(DefaultContextData)


const CartProvider: FC<PropsWithChildren<Props>> = (props) => {

    const [itemInCart, setCart] = useState<CartItem[]>([])

    const addProductToCart = (product: Product) => {

        let cartList = [...itemInCart]

        const isItemInCart = itemInCart.findIndex((item) => product.id == item.product.id)

        if (isItemInCart == -1) {
            cartList.push({
                product: product,
                qty: 1
            })
        } else {
            cartList[isItemInCart].qty++
        }

        setCart(cartList)
    }



    const removeProductFromCart = (id: Number) => {

        setCart((itemInCart) => itemInCart.filter((item) => id !== item.product.id))
         
    }

    const reduceProductInCart = (id: Number) => {
      
         setCart(prev => // Prev reprecenterar CartItem[]
         prev.reduce((itemInCart, item) => { // itemInCart representerar CartItem[], och item CartItem
           if (item.product.id === id) {
             if (item.qty === 1) return itemInCart;
             return [...itemInCart, { ...item, qty: item.qty-1}];
           } else {
             return [...itemInCart, item];
           }
         }, [] as CartItem[])
       );
    }



    const getTotalItems = (items: CartItem[]) => {
        
        items.reduce((ack: number, item) => ack + item.qty, 0);


    /*     let cart = localStorage.getItem("cart")

        if(cart) {
            cart = JSON.parse(cart)
        } else { 
            cart = []
        }
    
        let totalSum = cart.reduce((sum,item) => sum + item.quantity, 0); */
        

    
    }

    

    return (
        <CartContext.Provider value={{ itemInCart, addProductToCart, removeProductFromCart, getTotalItems, reduceProductInCart }}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider


/* I useEffect om vi vill göra en funktion inom useEffecten gör vi det i useEffekt */
/* useEffect(() => { /* Körs en gång (2 ggr med StrickMode i main)

 }, [])
*/