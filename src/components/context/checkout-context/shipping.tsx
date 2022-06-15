import { FC, PropsWithChildren, CSSProperties, useContext, useState } from "react" 
import { Shipping, shippingList } from "../../../data/shippingList"
import { Form} from 'formik';
import React from "react"   

interface Props{}

export interface ShippingData {
    shipping: Shipping[]
    /* funktion? */

}

const DefaultShippingData: ShippingData = {
    shipping: []
     /* funktion som speglar optionpaymentData? */
}


export const ShippingContext = React.createContext<ShippingData>(DefaultShippingData)
// sparar state i context för alla 3 valen och sen ett state för varje betalsätt 

const ShippingCard: FC<PropsWithChildren<Props>> = (props) => {

    const [shippingState, setShippingState] = useState()

    //fraktsätt radiogrupp - onchange som sparas i nytt state i Provaidern


   /*  function onchange som state som sparas i proverden */


   // Mapar vår shippinhtList - för att få ut valen

   /* {
    shippinhList.map((shippingList) => {
    }
} */

    return (

    <Form>
        <input
            name='gateway' 
            type='radio'
            value='test_gateway'
        />
        <label htmlFor="test_gateway">Test Gateway</label>
        <input
            name='gateway' 
            type='radio'
            value='stripe'
        />
        <label htmlFor="stripe">Credit Card</label>
        <input
            name='gateway' 
            type='radio'
            value='stripe'
        />
        <label htmlFor="stripe">Credit Card</label>
</Form>
    )

    // Providern..

  return (
        <ShippingContext.Provider 
        value={{}}>
            {props.children}
        </ShippingContext.Provider>

    ) 
}

export default ShippingCard


