import { FC, useState, useContext } from "react" 
import { Shipping, shippingList } from "../../data/shippingList" 
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import { ShippingContext } from "../context/checkout-context/shipping-context"
import FormLabel from '@mui/material/FormLabel'



interface Props {}

const ShippingCard: FC<Props> = (props) => {

    const { shippingState, setShippingState } = useContext(ShippingContext) 
    
    const getShippingDate = (shippingOption: number | undefined) => {
        let actualDate: Date = new Date()
        actualDate = new Date(new Date().setHours(new Date().getHours() + shippingOption!))
        let newShippingDate = actualDate.toLocaleDateString()
        return newShippingDate
    }

    return (

        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Fraktsätt</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female" 
                    name="radio-buttons-group"
                >

                <>

                 {shippingList.map((shippingOption) => {
                    return (
                        <tr key={shippingOption.id}>
                    <>
                    <FormControlLabel 
                        value={shippingOption.id} control={<Radio />} label={shippingOption.title}
                        onChange={() => {setShippingState(shippingOption)}}
                        /> 
        
                        <p>{shippingOption.price} kr</p>
                        <p>{
                            shippingState && (shippingState.id == shippingOption.id)?
                            <h2>{getShippingDate(shippingOption.shippingDate)}</h2>:undefined
                            }</p>
                     
                  
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

export default ShippingCard