import { createContext, CSSProperties, FC, useContext } from 'react'
import { colors } from "../../data/colors"
import CartProvide from "../context/provider" 
import { Product, productList } from "../../data/productlist"
import {Button, ButtonGroup} from '@mui/material'


 interface Props {
     item: Product
 }

 /* item in cart & total price - props?? */

const Cart: FC<Props> = (props) => {

 /*    const items = useContext(CartProvide); */

    const addItem = () => {
        console.log(props.item)
    }


    const cartItems = productList.map((item) =>
  
    
            <div>
            <Button onClick={addItem}>Lägg i varukorgen</Button>
            </div>

            )

    return (
        <div>
             <h2>Cart</h2>
             {cartItems}
        </div>
    )
}

export default Cart

