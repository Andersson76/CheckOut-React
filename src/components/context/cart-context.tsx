import React from "react"
import { FC, PropsWithChildren, useState, useContext } from "react"
import { Product } from "../../data/productlist"
import { FormData } from '../../data/contactForm'
import { PaymentContext } from "../context/checkout-context/optionPayments"
import { ShippingContext } from "../context/checkout-context/shipping-context"
import { Shipping, shippingList } from "../../data/shippingList"

interface Props {}

export interface ContextData {
    itemInCart: CartItem[], 
    infoOfCustomer: FormData | undefined,
    addProductToCart: (product: Product) => void,
    removeProductFromCart: (id: number) => void,
    updateProductInCart: (id: number) => void,
    getTotalPrice: () => number,
    getTotalQty: () => number,
    setInfoOfCustomer: React.Dispatch<React.SetStateAction<FormData | undefined>>,
    getTotalOrder: () => number,

    shippingState: Shipping | undefined
    setShippingState: React.Dispatch<React.SetStateAction<Shipping | undefined>> 
}

const DefaultContextData: ContextData = {
    itemInCart: [],
    shippingState: undefined,
    setShippingState: () => {},
    infoOfCustomer: undefined,
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    updateProductInCart: () => {},
    getTotalPrice: () => 0,
    getTotalQty: () => 0,
    setInfoOfCustomer: () => {},
    getTotalOrder: () => 0
}

export interface CartItem {
    product: Product,
    qty: number
}


export const CartContext = React.createContext<ContextData>(DefaultContextData)


const CartProvider: FC<PropsWithChildren<Props>> = (props) => {

    const [itemInCart, setCart] = useState<CartItem[]>([])
    const [infoOfCustomer, setInfoOfCustomer] = useState<FormData | undefined>()
    const [shippingState, setShippingState] = useState<Shipping | undefined>()/* ([]) */

/*     const { shippingState } = useContext(ShippingContext) 
    const { paymentOptionState } = useContext(PaymentContext) */
    
    
    const addProductToCart = (product: Product) => {

        let cartList = [...itemInCart]

        const isItemInCart = itemInCart.findIndex((item) => 
            product.id == item.product.id)

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


    const removeProductFromCart = (id: number) => {

        setCart((itemInCart) => itemInCart.filter((item) => 
            id !== item.product.id))
    }

    const updateProductInCart = (id: number) => {
      
         setCart(prev => 
            prev.reduce((itemInCart, item) => { 
             if (item.product.id === id) {
                if (item.qty === 1) 
                    return itemInCart
                    return [...itemInCart, { ...item, qty: item.qty - 1}]
            } else {
                     return [...itemInCart, item]
            }
                
        }, [] as CartItem[])
    )
    }
   

    const getTotalPrice = () => { 

        let totalPrice = 0;

        itemInCart.forEach(item  => {
          totalPrice += item.product.price*item.qty
        })

        return totalPrice
    }


    const getTotalQty = () => { 
        
        let totalQty= 0;

        itemInCart.forEach(item => {
          totalQty += item.qty
        })

        return totalQty

    }


    /* Fortsätt här - räknar dock bara ut getTotalPrice.. */
  const getTotalOrder = () => { 

        let totalSum = getTotalPrice()
 
            if(infoOfCustomer) {
            console.log(infoOfCustomer)
            

                if(shippingState) {
                    console.log(shippingState)
 
                    totalSum += shippingState.price
                    console.log(totalSum)

                    /* if(paymentOptionState) 
                    totalOrder += paymentOptionState.id */

                }
            }

        return totalSum
    }   


    const confirmeOrder = () => { 

    }


    return (
        <CartContext.Provider 
            value={{ itemInCart, addProductToCart, removeProductFromCart, getTotalPrice, updateProductInCart, getTotalQty,     infoOfCustomer, setInfoOfCustomer, getTotalOrder, shippingState, setShippingState }}>
            {props.children}
        </CartContext.Provider>
    )

}


export default CartProvider




/* I useEffect om vi vill göra en funktion inom useEffecten gör vi det i useEffekt */
/* useEffect(() => { /* Körs en gång (2 ggr med StrickMode i main)

 }, []*/