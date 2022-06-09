import React, { } from "react"
import { FC, CSSProperties } from "react"
import { Product, productList } from '../../data/productlist' 
import CategoryCard from "../pages-cards/categoryCard"
import { imgCategory } from "../../css/common"
import { NavLink } from "react-router-dom"
import { fontFamily, styleHeader } from "../../css/common"
import { colors } from "../../data/colors"

interface Props{}

const Category2: FC<Props> = (props) => { 

    const getCategory = productList.filter(product => {
        return product.categoryId === 3;
      });
    

     return (
         <>
         <div>
             <h2 style={{...fontFamily, ...styleHeader}}>Accessoarer</h2>
        </div>
        <div style={{...imgCategory}}>
        {getCategory.map(product => {
            return (
            <div key={product.id}>  {/* Istället för hela logiken nedan vill vi hämta CategoryCard */}
            <div style={headText}>
                <div style={{...fontFamily, paddingBottom: "2.5em"}}>
                    <NavLink to={`/${product.id}`}>
                        <img style={imgStyle} src={product.image}/>
                    </NavLink>
            
                <div style={{...textBox, ...textImage}}>
                    <h3 style={{...titleStyle, fontSize: "14px"}}>{product.title}</h3><p style={{...priceStyle, fontSize: "12px"}}>{product.price + " " + "kr"}</p>
                </div>
            </div>
        </div>
    </div>
                );
            })}
        </div>
        </>
     )

}


export default Category2

const headText: CSSProperties = {
    position: "relative"
}

const textImage: CSSProperties = {
    position: "absolute",
    bottom: "11.5%",
    backgroundColor: colors.secondary,
    opacity: "0.75",
    width: "90%"
}


const imgStyle: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  
    width: "200px",
    height: "300px",
    objectFit: "cover", 
    /* Zoomeffekt på bilder */
  }

  const textBox: CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    paddingLeft: "10px",
    paddingRight: "10px",

  }


  const titleStyle: CSSProperties = {
    display: "inline-block", 
    fontSize: "18px"
  }

  const priceStyle: CSSProperties = {
    display: "flex",
    justifyContent: "flex-end"
 }
