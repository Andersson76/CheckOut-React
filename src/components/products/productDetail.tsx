import React, { } from "react"
import { FC, CSSProperties } from "react"
import { Product, productList } from "../../data/productlist"
import { useParams, Navigate, NavLink } from "react-router-dom"
import {Button} from '@mui/material'
import {colors} from '../../data/colors'
import { fontFamily } from "../../css/common"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

interface Props{
}


const ProductDetail: FC<Props> = (props) => {

        const { productId } = useParams()

        const foundProduct = productList.find((product) => Number(productId) == product.id)
    
        if(!foundProduct) {
            return <Navigate to ="/" />
        }
    
        return (
    <>

           <NavLink style={{...navigationBack, ...fontFamily}} to={"/"}><ArrowBackIosIcon style={{fontSize: "1em"}}/>Fortsätt handla</NavLink>
            <div style={{...floatcontainer, ...fontFamily}}>
                
                <div style={floatchild}>
                    <img style={imgStyle} src={foundProduct!.image} alt="" />
                </div>

                <div style={floatchild2}>
                    <h3>{foundProduct!.title}</h3>
                    <p style={{fontSize: "14px"}}>{foundProduct!.desctiption}</p>
                    <p>Färg: {foundProduct!.color}</p>
                    <p>{foundProduct!.price + " " + "kr"}</p> 

                    <Button style={btn} variant="contained" 
                        onClick={() => console.log("clicked")}>Lägg i varukorgen
                    </Button>
                    {/* Här tänker jag att slutför köp kommer upp när man lagt till i varukorgen  */}
                    <Button style={btn} variant="contained" 
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
    margin: "90px",
    fontSize: "12px"
}

const btn: CSSProperties = {
    backgroundColor: colors.third, 
    color: colors.secondary,
    marginTop: "50px"
}

const floatcontainer: CSSProperties = {
    display: "flex",
    marginTop: "30px",
    marginBottom: "30px"
}

const floatchild: CSSProperties = {
    flex: "1",
    paddingLeft: "80px" 
}  

const floatchild2: CSSProperties = {
    flex: "1",
    paddingRight: "80px", 
    paddingTop: "30px"
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