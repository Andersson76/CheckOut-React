import { FC, useState, PropsWithChildren } from "react"
import { Payment, paymentList } from "../../../data/paymentList"
import { Form} from 'formik'
import React from "react"    
import { useRadioGroup } from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


interface Props{
   /*  paymentOption: Payment */
}

export interface OptionPaymentData {
    paymentOption: Payment[]
    /* funktion? */

}

const DefaultOptionPaymentData: OptionPaymentData = {
    paymentOption: []
     /* funktion som speglar optionpaymentData? */
}


export const PaymentContext = React.createContext<OptionPaymentData>(DefaultOptionPaymentData)
// sparar state i context för alla 3 valen och sen ett state för varje betalsätt 

const OptionPayment: FC<PropsWithChildren<Props>> = (props) => {

    const [optionPaymentState, setOptionPaymentState] = useState()

   /*  function onchange som state som sparas i proverden */


   // Mapar vår paymentList - för att få ut valen

   /* {
    paymentList.map((paymentList) => {
    }
} */

return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Betalsätt</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="Kort" control={<Radio />} label="Kort" />
        <FormControlLabel value="Swish" control={<Radio />} label="Swish" />
        <FormControlLabel value="Resurs Bank" control={<Radio />} label="Resurs Bank" />
      </RadioGroup>
    </FormControl>
  );
}

    // Providern..

/*   return (
        <PaymentContext.Provider 
        value={{}}>
            {props.children}
        </PaymentContext.Provider>

    )  */
    

export default OptionPayment