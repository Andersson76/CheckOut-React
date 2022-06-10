import React from "react"
import { FC, PropsWithChildren, useState, useEffect } from "react"
import { Product, productList } from "../../data/productlist"


interface Props { }

export interface ContextData {
    itemInCart: CartItem[],
    addProductToCart: (product: Product) => void,
    removeProductFromCart: (id: number) => void,
    getTotalItems: ( item: CartItem[]) => void
}

const DefaultContextData: ContextData = {
    itemInCart: [],
    addProductToCart: () => { },
    removeProductFromCart: () => { },
    getTotalItems: () => { }
}
export interface CartItem {
    product: Product,
    qty: number,
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
        setCart(prev =>
            prev.reduce((ack, item) => {
              if (item.product.id === id) {
                if (item.qty === 1) return ack;
                return [...ack, { ...item, qty: item.qty - 1 }];
              } else {
                return [...ack, item];
              }
            }, [] as CartItem[])
          );
         
    }

    const getTotalItems = (items: CartItem[]) => {
        
        items.reduce((ack: number, item) => ack + item.qty, 0);
    
    }

    

    return (
        <CartContext.Provider value={{ itemInCart, addProductToCart, removeProductFromCart, getTotalItems }}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartProvider


/* I useEffect om vi vill göra en funktion inom useEffecten gör vi det i useEffekt */
/* useEffect(() => { /* Körs en gång (2 ggr med StrickMode i main)

 }, [])
*/