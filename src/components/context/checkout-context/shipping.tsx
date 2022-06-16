import { FC, PropsWithChildren, CSSProperties, useContext, useState } from "react" 
import { Shipping, shippingList } from "../../../data/shippingList"
import React from "react"   
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'

interface Props{}

export interface ShippingData {
    shipping: Shipping[]
    /* 
    shipping: Shipping 
    */
    /* funktion? */
       /*  function onchange som state som sparas i proverden - samma som i cartContext
       React.Dispatch<React.SetStateAction<undefined>>*/
}

const DefaultShippingData: ShippingData = {
    shipping: []
     /* funktion som speglar optionpaymentData? */
}


export const ShippingContext = React.createContext<ShippingData>(DefaultShippingData)
// sparar state i context för alla 3 valen och sen ett state för varje betalsätt 

const ShippingCard: FC<PropsWithChildren<Props>> = (props) => {

    const [shippingState, setShippingState] = useState()


   // Mapar vår shippinhtList - för att få ut valen

   /* {
    shippingList.map((shippingOption) => {
    }
} */

    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Fraktsätt</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >
              {/*   fraktsätt radiogrupp - onchange som sparas i nytt state i Provaidern */}
            <FormControlLabel value="Postnord" control={<Radio />} label="Postnord" /> {/* Ta in setSTate */}
            <FormControlLabel value="Instabox" control={<Radio />} label="Instabox" />
            <FormControlLabel value="Hämta i butik" control={<Radio />} label="Hämta i butik" />
            </RadioGroup>
        </FormControl>
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


