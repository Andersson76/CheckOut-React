
import { useState, useEffect, FC } from 'react'
import { Product } from '../../data/productlist'
import cartContext from './cartContext'

interface Props {
    product: Product
}

const cartLogic: FC<Props> = (props) => {
    
    const[cart, setCart] = useState();
    
    return (
        <div>
            

        </div>
    )
}

export default cartLogic
    