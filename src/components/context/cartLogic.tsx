
import { useState, useEffect, FC } from 'react'
import { Product } from '../../data/productlist'
import cartContext from './cartContext'

interface Props {
    product: Product
}

const cartLogic: FC<Props> = (props) => {
    
    const[cart, setCart] = useState();

    //Ska ligga i contextmappen
/*   const[count, setCart] = useState(0)
  const handleAddToCart = () => {(props.product.id, 1);}
 */
    
    return (
        <div>
            

        </div>
    )
}

export default cartLogic
    