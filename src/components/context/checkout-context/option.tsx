import { FC, useState, PropsWithChildren } from "react"
import { Payment } from "../../../data/paymentList"
import { Form} from 'formik';
import React from "react"    

interface Props{}

export interface OptionPaymentData {

}

const DefaultOptionPaymentData: OptionPaymentData = {


}



export const PaymentContext = React.createContext<OptionPaymentData>(DefaultOptionPaymentData)
// sparar state i context för alla 3 valen och sen ett state för varje betalsätt 

const OptionPayment: FC<Props> = (props) => {

    const [optionPaymentState, setOptionPaymentState] = useState<Payment[]>([])

   /*  function onchange som state sparas i proverden */

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

 /*    return (
        <PaymentContext.Provider 
        value={{}}>
            {props.children}
        </PaymentContext.Provider>
    ) */
}

export default OptionPayment