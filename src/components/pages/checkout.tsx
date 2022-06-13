import { CSSProperties, FC } from 'react'
import { useContext } from "react"
import { productList, Product } from "../../data/productlist"
import {Button, ButtonGroup} from '@mui/material'
import { textStyle, fontFamily, styleBtn } from "../../css/common"
import {CartContext} from "../context/cart-context" 
import CheckoutCard from "../pages-cards/checkoutCard"
import { NavLink } from "react-router-dom"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
/* import CartBox from "../pages-cards/cartBoxCard" */

interface Props {}

/* Sidan som renderar ut kassasidan  */


const CheckOut: FC<Props> = (props) => {

    const { itemInCart, getTotalPrice } = useContext(CartContext)

    return (
        
        <div> {/* height: "100vh", */}

            <NavLink style={{...navigationBack, ...fontFamily}} to={"/"}><ArrowBackIosIcon style={{fontSize: "1em"}}/>
                Fortsätt  handla
            </NavLink>

            <div>
                {itemInCart.length == 0 ? null : 
                    <h2 style={{fontSize:"16px",  marginLeft: "160px", marginTop: "40px", ...fontFamily}}>
                        Produkter</h2> 
                }

            <div style={{display: "flex", justifyContent: "center", ...fontFamily}}>
                {itemInCart.length === 0 ? <h2>Varukorgen är tom</h2> : null}
            </div>

            </div>
                <div  style={{borderBottom: "1px solid #D0D0D0", borderTop: "1px solid #D0D0D0"}} > {/* Bara runt produkterna?? */}
                    {
                    itemInCart.map((cartItem) => 
                        <CheckoutCard cartItem={cartItem} />
                        )
                    }
                    <div>
                        <h2>Grand Total: {getTotalPrice()}</h2>
                    </div>
                </div>

            </div>
       
    )
}

export default CheckOut



const navigationBack: CSSProperties = {
    color: "black", 
    textDecoration: "none",
    margin: "160px",
    fontSize: "12px"
}