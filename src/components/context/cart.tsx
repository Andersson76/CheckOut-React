import { createContext, CSSProperties, FC, useContext } from 'react'
import { colors } from "../../data/colors"
import { CartContext } from '../context/provider'
/* import DeleteIcon from '@mui/icons-material/Delete'; */

interface Props {}

/* Logiken för add to cart - importera i App.. */

const Cart: FC<Props> = (props) => {

    const items = useContext(CartContext)

    return (
        <div>
         Cart
        </div>
    )
}

export default Cart

