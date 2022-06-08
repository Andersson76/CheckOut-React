import { CSSProperties, FC } from 'react'
import { useState } from "react"
import { productList, Product } from "../../data/productlist"
import {Button, ButtonGroup} from '@mui/material'
import { textStyle, fontFamily, styleBtn } from "../../css/common"
import CheckoutCard from "../products/checkoutCard"

interface Props {}

const CheckOut: FC<Props> = (props) => {

  

    return (
        <div>
            <p style={{...textStyle, ...fontFamily}}>Kundvagn ska lista tillagda produkter. bild, title, antal, pris och kundvagnens totalpris</p>

        </div>
       
    )
}

export default CheckOut


