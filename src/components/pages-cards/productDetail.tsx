import React, { } from "react"
import { FC, CSSProperties, useContext } from "react"
import { Product, productList } from "../../data/productlist"
import { useParams, Navigate, NavLink } from "react-router-dom"
import { Button } from '@mui/material'
import { colors } from '../../data/colors'
import { fontFamily, styleBtn, textStyle } from "../../css/common"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { CartContext/* , addProductToCart */ } from "../context/cart-context"

interface Props{
}

const ProductDetail: FC<Props> = (props) => {

        const { productId } = useParams()
        const { addProductToCart } = useContext(CartContext)


        const foundProduct = productList.find((product) => Number(productId) == product.id)
    
        if(!foundProduct) {
            return <Navigate to ="/" />
        }
    
        return (
            <>
            <NavLink style={{...navigationBack, ...fontFamily}} to={"/"}><ArrowBackIosIcon style={{fontSize: "1em"}}/>
                Fortsätt  handla
            </NavLink>
            
            <div style={{...floatcontainer, ...fontFamily}}>
                
                <div style={imgBox}>
                    <img style={imgStyle} src={foundProduct!.image} alt="" />
                </div>

                <div style={textBox}>
                    <h3 style={{fontSize: "14px"}}>{foundProduct!.title}</h3>
                    <p style={{...textStyle, paddingRight: "100px"}}>{foundProduct!.desctiption}</p>
                    <p style={{fontSize: "12px"}}>Färg: {foundProduct!.color}</p>
                    <p style={{fontSize: "12px"}}>{foundProduct!.price + " " + "kr"}</p> 

                    <Button style={{...styleBtn, marginTop: "50px"}} variant="contained" 
                        onClick={() => addProductToCart(foundProduct)}>Lägg i varukorgen
                    </Button>   


                    {/* Här tänker jag att slutför köp kommer upp när man lagt till i varukorgen - remove doc som i js */}
                   
                   <Button style={{...styleBtn, marginTop: "10px"}} variant="contained" 
                        onClick={() => console.log("clicked")}>Slutför köp
                    </Button>
                   
                </div>
                </div>
                </>
            ) 
        }  


export default ProductDetail


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

const imgBox: CSSProperties = {
    flex: "1",
    marginLeft: "160px" 
}  

const textBox: CSSProperties = {
    flex: "1",
    marginRight: "50px", 
    marginTop: "30px" 
}  

const imgStyle: CSSProperties = {
    width: "300px",
    height: "400px",
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