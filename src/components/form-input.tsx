/* import React from 'react'; */
/* import { Formik } from 'formik'; 
https://formik.org/docs/overview*/

import {FC} from 'react'


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
        <h1>information</h1>
        </div>
    )
}

export default Forminput 