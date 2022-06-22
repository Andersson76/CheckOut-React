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


interface Props{}

export interface OptionPaymentData {
  paymentOptionState: Payment | undefined,
  setPaymentOption: React.Dispatch<React.SetStateAction<Payment | undefined>> 
}

const DefaultOptionPaymentData: OptionPaymentData = {
  paymentOptionState: undefined,
  setPaymentOption: () => {}  
}

export const PaymentContext = React.createContext<OptionPaymentData>(DefaultOptionPaymentData)


const OptionPayment: FC<PropsWithChildren<Props>> = (props) => {

    const [paymentOptionState, setPaymentOption] = useState<Payment | undefined>()

    return (

        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Betalsätt</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female" 
                    name="radio-buttons-group"
                >

                <>

                 {paymentList.map((paymentOption) => {
                    return (
                        <tr key={paymentOption.id}>
                    <>
                    <FormControlLabel 
                        value={paymentOption.id} control={<Radio />} label={paymentOption.title}
                        onChange={() => {setPaymentOption(paymentOptionState)}}
                    />
                    </>
                    </tr>
                )
            })
        }
        </>
          
               
            </RadioGroup>
        </FormControl>

    )
}

    // Providern..

/*   return (
        <PaymentContext.Provider 
        value={{}}>
            {props.children}
        </PaymentContext.Provider>

    )  */
    

export default OptionPayment