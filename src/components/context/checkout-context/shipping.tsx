import { FC, CSSProperties, useContext, useState } from "react" 
import { Shipping } from "../../../data/shippingList"

interface Props {
 /*    shipping: Shipping[] */
}

// sparar state i context för alla 3 valen och sen ett state för varje betalsätt 

const ShippingCard: FC<Props> = (props) => {

const [shippingState, setShippingState] = useState()

    return (
        <div>

            
            {/* <ShippingCard></ShippingCard> */}
            
        </div>

    )
}

export default ShippingCard