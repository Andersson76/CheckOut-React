import React from "react"
import { FC, PropsWithChildren, useState, useEffect } from "react"
import { Product, productList } from "../../data/productlist"


interface Props {}

export interface ContextData { 
    itemInCart: CartItem[],
    addProductToCart: (product: Product) => void,
    removeProductFromCart: (/* id: number */) => void 
    getTotalPrice: (/* id: number */) => void
}

const DefaultContextData: ContextData = { 
    itemInCart: [],
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    getTotalPrice: () => {}
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
    
         const isItemInCart = productList.find((item) => product.id == item.id)
    
          if(isItemInCart/* isItemInCart == -1 */) {
             cartList.push({
                 product: product,
                 qty: 1,
             })
     /* 
            } else {
             cartList[isItemInCart].qty++ 
            }
         */
            setCart(cartList)
        }
    }
    


            const removeProductFromCart = () => {

                
                /*setCart
                 Reducer function (ack, item) => {??  */

                /* if(item.id === id) {
                    if(item.amount === 1) return ack
                    return [...ack, {}...item, amount: item -1}]

                }

            }), [] as Product[]
                    */
        }

            const getTotalPrice = () => {

            
            }

            return(
                <CartContext.Provider value={{itemInCart, addProductToCart, removeProductFromCart, getTotalPrice}}> 
                    {props.children} 
                </CartContext.Provider>
    )

}

export default CartProvider


   /* I useEffect om vi vill göra en funktion inom useEffecten gör vi det i useEffekt */
   /* useEffect(() => { /* Körs en gång (2 ggr med StrickMode i main) 

    }, [])
*/