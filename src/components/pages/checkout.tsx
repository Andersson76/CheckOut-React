import { CSSProperties, FC } from 'react'
import { useState } from "react"
import { productList, Product } from "../../data/productlist"
import {Button, ButtonGroup} from '@mui/material'
import { textStyle, fontFamily, styleBtn } from "../../css/common"
import CheckoutCard from "../pages-cards/checkoutCard"

interface Props {}

const CheckOut: FC<Props> = (props) => {


      /*  {cartList.map(item => <li key={item}>{item} */

    return (
        
        <div>
            <CheckoutCard/>
                <div>
                
                </div>
           
        </div>
       
    )
}

export default CheckOut


