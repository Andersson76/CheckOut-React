/* import React from 'react'; */
/* import { Formik } from 'formik'; 
https://formik.org/docs/overview*/

import { CSSProperties, FC } from 'react'


/* Här ska vi ha formuläret som man fyller i på kassasidan */

interface Props {
    firstname: string,
    lastname: string,
    address: string,
    zipcode: number,
    phone: number,
    email: string
}

const Forminput: FC<Props> = (props) => {
    return (
        <div>
        
        </div>
    )
}

export default Forminput 


const item: CSSProperties = { 

}