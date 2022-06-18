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
    setShippingState: () => void /* React.Dispatch<React.SetStateAction<undefined>>  */
}

const DefaultShippingData: ShippingData = {
    setShippingState: () => {}
}

export interface Option {
    shippingOption: Shipping
}


export const ShippingContext = React.createContext<ShippingData>(DefaultShippingData)


const ShippingCard: FC<PropsWithChildren<Props>> = (props) => {

    const [shippingState, setShippingState] = useState<Option>() // Kolla upp detdta??
    const [countDateState, setDateState] = useState()


 /*    {
        shippingList.map((shippingOption) =>  {

        }) */

    return (

        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Fraktsätt</FormLabel>
            <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
            >

              {/*   fraktsätt radiogrupp - onchange som sparas i nytt state i Provaidern 
              onChange={()}*/}
              
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


