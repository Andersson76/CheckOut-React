import { FC, CSSProperties, useContext, useState } from "react"
import { Payment } from "../../../data/paymentList"
import { Grid, Button } from '@mui/material';
import { TextField } from 'formik-mui';
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import {styleBtn} from "../../../css/common"
import FormLabel from '@mui/material/FormLabel';


interface Props {}

export interface PaymentSwish {
    phonenumber: number,
    /* bankId: number */
  }
  
  export const DefaultPaymentSwish: PaymentSwish = {
    phonenumber: 0,
    /* bankId: 0, */
  }
  
  const PaymentSchema = Yup.object().shape({
       phonenumber: Yup.number()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),
   /*     fullname: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'), */
     })


const PaymentSwish: FC<Props> = (props) => {

    const [paymentSwishstate, setPaymentSwishState] = useState<Payment[]>([])

    return (
    <Formik
    initialValues = {{
       phone: "",
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
    <FormLabel id="demo-radio-buttons-group-label">Swish</FormLabel>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Field
          component={TextField}
          name='Mobilnummer'
          type='number' 
          label='Mobilnummer' 
          placeholder='+46'
          fullWidth
        />
    </Grid>
    </Grid>
    </Form>             
    </div>
    </Formik>

    )
}

export default PaymentSwish


