import { CSSProperties, FC } from "react"
import {Link } from "react-router-dom"
import { Product, productList } from '../../data/productlist' 
import { Button } from 'react-bootstrap'

interface Props {
    product: Product
}

const AddToCart: FC<Props> = (props) => {


    return (
       /*  <button onClick={() => console.log("clicked")}>
           Lägg till i varukorgen
        </button>  */

        <Button onClick={() => console.log("clicked")} variant="outline-primary">Lägg till i varukorgen</Button>
    )
}



/* 
 (Lägg till i varukorgen)
*/

// Button-hanterare 

{/* <button onClick={}>
    Lägg till i varukorgen
</button> */}

export default AddToCart

const item: CSSProperties = {

}