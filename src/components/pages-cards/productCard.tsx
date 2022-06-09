import { CSSProperties, FC, useContext } from "react"
import React from "react"
import { useState } from "react"
import { NavLink } from 'react-router-dom'
import { Button, ListItemSecondaryAction } from '@mui/material'
import { colors } from '../../data/colors'
import { Product, productList } from '../../data/productlist' 
import { fontFamily, styleBtn } from "../../css/common"
import { fontSize } from "@mui/system"
import { CartContext } from "../context/cart-context"

interface Props {
  product: Product
}

const ProductCard: FC<Props> = (props) => {

  const { itemInCart, addProductToCart, removeProductFromCart } = useContext(CartContext)

  

    return (
        <div style={{...fontFamily}}>
            <NavLink to={`/${props.product.id}`}>
                <img style={imgStyle} src={props.product.image}/>
            </NavLink>
                <div style={textBox}>
                  <h2 style={{...titleStyle, fontSize: "14px"}}>{props.product.title}</h2>
                  <p style={{...priceStyle, fontSize: "12px"}}>{props.product.price + " " + "kr"}</p>
                </div>
                <div style={textBox}>
                  <p style={{marginTop: "0px", color: colors.secondary, fontSize: "12px"}}>{props.product.shortDesc}</p>
                  <p style={{marginTop: "0px", color: colors.secondary, fontSize: "12px"}}>Färg: {props.product.color}</p>
                </div>
            
          <div style={{display: "flex", justifyContent: "center"}}>
            <Button style={{...styleBtn, marginTop: "20px"}} variant="contained" 
                onClick={() => addProductToCart(props.product)}>Lägg i varukorgen
            </Button>
            </div>
        </div>
    ) 
}

export default ProductCard 


const imgStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
    width: "280px",
    height: "380px",
    objectFit: "cover",
  }

  const textBox: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    paddingLeft: "10px",
    paddingRight: "10px"
  }


  const titleStyle: CSSProperties = {
    display: "inline-block", 
    fontSize: "18px"
  }

  const priceStyle: CSSProperties = {
    display: "flex",
    justifyContent: "flex-end"
 }


