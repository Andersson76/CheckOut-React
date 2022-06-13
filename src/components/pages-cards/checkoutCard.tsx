import React from "react"
import { FC, CSSProperties, useContext, useState } from "react"
import { Button, ButtonGroup } from '@mui/material'
import { fontFamily, styleBtn, textStyle } from "../../css/common"
import { CartItem, CartContext } from "../context/cart-context"
import ClearIcon from '@mui/icons-material/Clear'

interface Props{
    cartItem: CartItem
}

/* Komponent/logik för det som visas på kassasidan */

const CheckoutCard: FC<Props> = (props) => {

    const { removeProductFromCart, addProductToCart, reduceProductInCart, getTotalPrice } = useContext(CartContext)

      function changeBackground(e) { // Typa upp e?
            e.target.style.background = "#044778";
            /* onMouseLeave */
  }
  
        return (
            <>
            <div style={{...floatcontainer, ...fontFamily}}>
                
                <div style={textBoxItems}>
                    <div>
                        <img style={imgStyle} src={props.cartItem.product.image} alt="" />
                    </div> 
                   <div style={{...textStyle, ...fontFamily, paddingLeft: "25px"}}>
                        <h3>{props.cartItem.product.title} </h3>
                        <p>Färg: {props.cartItem.product.color} </p>
                        <p>Pris: {props.cartItem.product.price} kr</p>

                    <div style={{display: "flex", justifyContent: "space-between", marginTop: "40px"}}>
                        <ButtonGroup>
                            <Button style={{color: "black", border: "1px solid black"}} onClick={() => 
                                addProductToCart(props.cartItem.product)}>
                                +
                            </Button>

                            <p style={{paddingLeft: "10px", paddingRight: "10px"}}> {props.cartItem.qty} </p>
                        
                            <Button style={{color: "black", border: "1px solid black"}} onClick={() => 
                                reduceProductInCart(props.cartItem.product.id)}>
                                -
                            </Button>
                        </ButtonGroup> 

                        <ClearIcon style={{cursor: "pointer", paddingLeft: "100px", paddingTop: "10px"}} onClick={() => 
                            removeProductFromCart(props.cartItem.product.id)}>
                        </ClearIcon>
                    </div>
                    </div>
                </div>

{/* Detta skall ligga någon annan stans och inte påverkas/visas i varje produktkomponent (pga map-funktionen så renderas den ut varje gång... */}
                <div style={textBox}>
                    <h2 style={{fontSize:"16px"}}>Totalsumma Order</h2>
                    <div style={{...textStyle, ...fontFamily}}>
                       <p>Produkter: {props.cartItem.qty}</p>
                       <h4>Totalt: {props.cartItem.product.price*props.cartItem.qty}</h4>
                    </div>


                    <Button style={{...styleBtn, marginTop: "40px"}} onMouseOver={changeBackground} variant="contained" 
                        onClick={() => console.log("clicked")}>Slutför köp
                    </Button>
                </div>
            </div>



           {/*  <div style={textBox}>
                <p style={{...textStyle, ...fontFamily}}>
                        Inputformulär</p>
            </div> */}
            </>
            ) 
        }  


export default CheckoutCard


const floatcontainer: CSSProperties = {
    display: "flex",
    marginBottom: "30px"
}

const textBoxItems: CSSProperties = {
    display: "flex",
    flex: "1",
    marginLeft: "160px",
}  

const textBox: CSSProperties = {
    flex: "1",
    marginRight: "50px", 
    marginLeft: "50px",
}  

const imgStyle: CSSProperties = {
    width: "150px",
    height: "200px",
    objectFit: "cover",
}


/* Tillhör cartbox */

const imgCartBox: CSSProperties = {
    width: "80px",
    height: "120px",
    objectFit: "cover",
}

const cartCardStyle: CSSProperties = {
    width: "30%",
    boxSizing: "border-box", 
    borderBottom: "1px solid #D0D0D0", 
    borderTop: "1px solid #D0D0D0",
    paddingLeft: "50px",
    backgroundColor: "white"
}

const textBoxCart: CSSProperties = {
    display: "flex",
    flex: "1",
    marginBottom: "10px"
}