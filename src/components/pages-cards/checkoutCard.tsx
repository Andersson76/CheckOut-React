import React, { } from "react"
import { FC, CSSProperties } from "react"
import { Product, productList } from "../../data/productlist"
import { useParams, Navigate, NavLink } from "react-router-dom"
import { Button } from '@mui/material'
import { colors } from '../../data/colors'
import { fontFamily, styleBtn, textStyle } from "../../css/common"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CartItem } from "../context/cart-context"
/* Delet och reducerknapp */

interface Props{
    cartItem: CartItem
}


const CheckoutCard: FC<Props> = (props) => {

    
        return (
            <>
            <NavLink style={{...navigationBack, ...fontFamily}} to={"/"}><ArrowBackIosIcon style={{fontSize: "1em"}}/>
                Fortsätt  handla
            </NavLink>
            
            <div style={{...floatcontainer, ...fontFamily}}>
                
                <div style={textBox1}>
                    <div>
                    <h2 style={{fontSize:"18px"}}>Produkter</h2>
                    <img style={imgStyle} src={props.cartItem.product.image} alt="" />
                    </div>
                   <div style={{...textStyle, ...fontFamily}}>
                        <h3>{props.cartItem.product.title} </h3>
                        <p>Färg: {props.cartItem.product.color} </p>
                        <p>Pris: {props.cartItem.product.price} kr</p>
                        <p>Antal: {props.cartItem.qty} </p>
                    </div>
                </div>

                <div style={textBox}>
                    <h2 style={{fontSize:"18px"}}>Totalsumma Order</h2>
                    <div style={{...textStyle, ...fontFamily}}>
                       <p>Produkter:</p>
                       <p>Leverans:</p>
                       <h4>Totalt: </h4>
                    </div>

                    <Button style={{...styleBtn, marginTop: "50px"}} variant="contained" 
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


const navigationBack: CSSProperties = {
    color: "black", 
    textDecoration: "none",
    margin: "160px",
    fontSize: "12px"
}

const floatcontainer: CSSProperties = {
    display: "flex",
    marginTop: "30px",
    marginBottom: "30px"
}

const textBox1: CSSProperties = {
    display: "flex",
    flex: "1",
    marginLeft: "160px",
    borderBottom: "1px solid #D0D0D0",
    borderTop: "1px solid #D0D0D0",
}  

const textBox: CSSProperties = {
    flex: "1",
    marginRight: "50px", 
    marginLeft: "50px",
    borderBottom: "1px solid #D0D0D0",
    borderTop: "1px solid #D0D0D0",
}  

const imgStyle: CSSProperties = {
    width: "150px",
    height: "200px",
    objectFit: "cover",

}

const imgContainer: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "3em",
    paddingTop: "3em",
    paddingBottom: "3em"
}
