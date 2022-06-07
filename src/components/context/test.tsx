import { CSSProperties, FC } from 'react'
import { useState } from "react"
import { productList, Product } from "../../data/productlist"
import {Button, ButtonGroup} from '@mui/material'

interface Props {}

const CartItems: FC<Props> = (props) => {

    const [cartItems, setCartItems] = useState([]) // State, funktion, Hook = empty array // Contex? 

    const[itemCount, setItemCount] = useState(1)



    return (
        <>
<div>
    <h2>Cart Items</h2>
    {cartItems.length === 0 && "Cart is empty"} 
</div>
<div>
   <ButtonGroup> {/* Remove */}
        <Button onClick={() => { setItemCount(Math.max(itemCount - 1, 0))
        }}>
        </Button>

   {/* Add */}
   <Button onClick={() => {
       setItemCount(itemCount + 1)
   }}>

   </Button>
   </ButtonGroup>
   </div>
   </>
       
    )
}

export default CartItems

