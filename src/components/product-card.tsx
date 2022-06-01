import { Product } from '../data/productlist' 
import {FC} from 'react'

interface Props {
    product: Product
}

const Productcard: FC<Props> = (props) => {
    return (
        <div>
        <h1>information</h1>
        </div>
    )
}

export default Productcard