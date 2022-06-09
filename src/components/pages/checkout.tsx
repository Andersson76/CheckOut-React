import { CSSProperties, FC } from 'react'
import { useState, useContext} from "react"
import { productList, Product } from "../../data/productlist"
import {Button, ButtonGroup} from '@mui/material'
import { textStyle, fontFamily, styleBtn } from "../../css/common"
import CheckoutCard from "../pages-cards/checkoutCard"
import  CartProvider, { CartItem } from "../context/cart-context" 
import {CartContext} from "../context/cart-context" 
//import CartItems from '../context/test'

interface Props {
}

const CheckOut: FC<Props> = (props) => {

    const { itemInCart, removeProductFromCart } = useContext(CartContext)


    return (
        
        <div>
                <div>
                {
                    itemInCart.map((cartItem) => 
                        <CheckoutCard cartItem={cartItem} />

                       )
                    }
                </div>
           
        </div>
       
    )
}

export default CheckOut


