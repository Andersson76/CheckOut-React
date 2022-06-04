import React, { } from "react"
import { FC } from "react"

interface Props{}


const Checkout: FC<Props> = (props) => {
    
    return (
        <div>
            <p>Kundvagn ska lista tillagda produkte, bild, title, antal, pris och kundvagnens totalpris
                - Betalsätt, fraktsätt, formulär
            </p>
        </div>

/* <>
 <NavLink style={{...navigationBack, ...fontFamily}} to={"/"}><ArrowBackIosIcon style={{fontSize: "1em"}}/>Fortsätt handla</NavLink>
<div style={floatcontainer}>
    
    <div style={floatchild}>
        <img style={imgStyle} src={foundProduct!.image} alt="" />
    </div>

    <div style={floatchild}>
        <h4>{foundProduct!.title}</h4>
        <p>{foundProduct!.desctiption}</p>
        <p>{foundProduct!.price + " " + "kr"}</p> 
    </div>

    <div style={float}> // Icon/knapp för att ändra antalet i varukorgen
        <Button style={btn} variant="contained" 
            onClick={() => console.log("clicked")}>Slutför köp
        </Button>
    </div>

</div>
</> */

    )
}


export default Checkout