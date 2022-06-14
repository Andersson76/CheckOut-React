import { FC, CSSProperties, useContext } from "react"
import { Button, ButtonGroup } from '@mui/material'
import { fontFamily, textStyle, floatDiv } from "../../css/common"
import { CartItem, CartContext } from "../context/cart-context"
import ClearIcon from '@mui/icons-material/Clear'

interface Props{
    cartItem: CartItem
}

/* Komponent/logik för det som visas på kassasidan */

const CheckoutCard: FC<Props> = (props) => {

    const { removeProductFromCart,
            addProductToCart, 
            updateProductInCart} = useContext(CartContext)
  
        return (
            <>
            <div style={{...floatDiv, ...fontFamily}}>         
                <div>
                    <img style={imgStyle} 
                        src={props.cartItem.product.image} alt="" />
                </div> 
                <div style={{...textStyle, ...fontFamily, paddingLeft: "40px"}}>
                    <h3>{props.cartItem.product.title} </h3>
                    <p>Färg: {props.cartItem.product.color}</p>

                    <ButtonGroup style={{marginTop: "70px"}}>
                        <Button style={{color: "black", border: "1px solid black"}} 
                            onClick={() => 
                                addProductToCart(props.cartItem.product)}>
                            +
                        </Button>

                        <p style={{paddingLeft: "10px", paddingRight: "10px"}}> 
                            {props.cartItem.qty} </p>
                        
                        <Button style={{color: "black", border: "1px solid black"}} 
                            onClick={() => 
                                updateProductInCart(props.cartItem.product.id)}>
                            -
                          </Button>
                    </ButtonGroup> 
                </div>

                  <div style={{...textStyle, ...fontFamily, paddingLeft: "90px"}}>
                    <h4>
                        {props.cartItem.product.price*props.cartItem.qty} kr
                    </h4>
                    <div style={{marginTop: "120px"}}>
                        <span>Ta bort </span>
                        <ClearIcon style={{cursor: "pointer", fontSize: "20px"}} 
                            onClick={() => 
                                removeProductFromCart(props.cartItem.product.id)}>
                        </ClearIcon>
                    </div>
                </div>
            </div>
            </>
            ) 
        }  


export default CheckoutCard


const imgStyle: CSSProperties = {
    width: "150px",
    height: "200px",
    objectFit: "cover",
}


