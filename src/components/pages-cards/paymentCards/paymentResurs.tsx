import { FC, CSSProperties, useContext, useState } from "react"
import { Payment } from "../../../data/paymentList"
import { Grid, Button } from '@mui/material';
import { TextField } from 'formik-mui';
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import {styleBtn} from "../../../css/common"
import FormLabel from '@mui/material/FormLabel';


interface Props {}

export interface PaymentResurs {
  socialSecurityNumber: number,
    /* bankId: number */
  }
  
  export const DefaultPaymentResurs: PaymentResurs = {
    socialSecurityNumber: 0,
    /* bankId: 0, */
  }
  
  const PaymentSchema = Yup.object().shape({
      socialSecurityNumber: Yup.number()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),
   /*     fullname: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'), */
     })


const PaymentResurs: FC<Props> = (props) => {

    const [paymentResursState, setPaymentResursState] = useState()

    return (
    <Formik
    initialValues = {{
      socialSecurityNumber: "",
     }}


    validationSchema={PaymentSchema}
  //  initialValues={initialValues}
    onSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }}
    >

    <div>
    <Form>
    <FormLabel id="demo-radio-buttons-group-label">Resurs Bank</FormLabel>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Field
          component={TextField}
          name='Personnummer'
          type='number' 
          label='Personnummer' 
          placeholder='000000-0000'
          fullWidth
        />
    </Grid>
    </Grid>
    </Form>             
    </div>
    </Formik>

    )
}

export default PaymentResurs
