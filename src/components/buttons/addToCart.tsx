import { CSSProperties, FC } from "react"
import {Link } from "react-router-dom"
import { Product, productList } from '../../data/productlist' 
import react, {useState} from "react"

interface Props {
    //product: Product
}

const AddToCart: FC<Props> = (props) => {

    const[count, setCount] = useState(0)

    return (

        <button onClick={() => setCount(count + 1)}>
            Lägg till i varukorgen
        </button>
    )
}


export default AddToCart

const item: CSSProperties = {

}