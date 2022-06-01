import React from "react"
import {FC} from "react"

interface Props {
    socialMediaIcon: string,
    email: string,
    phone: number,
    address: string 
}




const Footer: FC<Props> = (props) => {

    return (
        <div>
        <h1>information</h1>
        </div>
    )
}

export default Footer