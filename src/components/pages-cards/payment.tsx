import { FC, CSSProperties, useContext, useState } from "react"
import { Button } from '@mui/material'
import { Product } from '../../data/productlist' 
import { fontFamily, styleBtn, textStyle, floatcontainer } from "../../css/common"
import { CartContext, CartItem } from "../context/cart-context"
import { Shipping } from "../../data/shipping"

interface Props {}

const PaymentCard: FC<Props> = (props) => {

    const [state, setState] = useState<Shipping[]>([]) // Formuläret

    return (
        <div>
            <form>
                
            </form>
            
        </div>

    )
}

export default PaymentCard


