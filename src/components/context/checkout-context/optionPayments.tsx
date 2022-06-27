import { FC, useState, PropsWithChildren } from "react"
import { Payment, paymentList } from "../../../data/paymentList"
import React from "react"    
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { smallImageStyle } from "../../../css/common"
import DefaultPaymentCard from "../../pages-cards/paymentCards/paymentCard"
import DefaultPaymentSwish from "../../pages-cards/paymentCards/paymentSwish"
import DefaultPaymentResurs from "../../pages-cards/paymentCards/paymentResurs"


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
                    <>
                        <tr key={paymentOption.id}>
                    
                    <FormControlLabel 
                        value={paymentOption.id} control={<Radio />} label={paymentOption.title}
                        onChange={() => {setPaymentOption(paymentOption)}}
                    />
                      <img style={smallImageStyle} src={paymentOption.image}/>
                    
                    </tr>

                <div> 
                    { paymentOptionState && (paymentOption.id == paymentOptionState.id && paymentOptionState.id) == 1 ? <DefaultPaymentSwish/> : undefined } 
                    { paymentOptionState && (paymentOption.id == paymentOptionState.id && paymentOptionState.id) == 2 ? <DefaultPaymentCard/> : undefined } 
                    { paymentOptionState && (paymentOption.id == paymentOptionState.id && paymentOptionState.id) == 3 ? <DefaultPaymentResurs/> : undefined } 
                </div>

                </>
                )
            })
        }
        
                </>
            </RadioGroup>
        </FormControl>

    )

  return (
        <PaymentContext.Provider 
            value={{paymentOptionState, setPaymentOption}}> 
                {props.children}
        </PaymentContext.Provider>

    ) 
}
  
    

export default OptionPayment