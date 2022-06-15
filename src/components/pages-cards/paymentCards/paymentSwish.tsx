import { FC, CSSProperties, useContext, useState } from "react"
import { Payment } from "../../../data/paymentList"
import { Grid, Button } from '@mui/material';
import { TextField } from 'formik-mui';
import { Formik, Field, Form} from 'formik';
import * as Yup from 'yup';
import {styleBtn} from "../../../css/common"


interface Props {}

export interface PaymentSwish {
    cardnumber: number,
    fullname: string,
    month: number,
    year: number,
    CVC: number
  }
  
  export const DefaultPaymentSwish: PaymentSwish = {
    cardnumber: 0,
    fullname: "",
    month: 0,
    year: 0,
    CVC: 0
  }
  
  const PaymentSchema = Yup.object().shape({
       cardnumber: Yup.number()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),
       fullname: Yup.string()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),
        month: Yup.number()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),
       year: Yup.string()
         .min(2, 'Too Short!')
         .max(5, 'Too Long!')
         .required('Required'),
        CVC: Yup.number()
         .min(2, 'Too Short!')
         .max(50, 'Too Long!')
         .required('Required'),
     })


const PaymentSwish: FC<Props> = (props) => {

    const [paymentSwishstate, setPaymentSwishState] = useState<Payment[]>([])

    return (
    <Formik
    initialValues = {{
       cardnumber: '', 
       fullname: '', 
       month: '', 
       year: '', 
       CVC: ''
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
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Field
          component={TextField}
          name='Kortnummer'
          type='number' 
          label='Kortnummer' 
          placeholder='0000111100001111'
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          name='Giltighetsdatum' 
          fluid 
          options= 'monthOption' // monthOption - props
          label='Månad' 
          fullWidth
        />
      </Grid>
      <Grid item xs={12}sm={6}>
        <Field
          component={TextField}
          name='Giltighetsdatum' 
          fluid 
          options='yearOptions' /* {} */
          label='År' 
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          name='cvc'
          type='number'
          label='CVC' 
          placeholder='123'
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          name='Korthavare'
          label='Korthavare' 
          placeholder='Förnamn och Efternamn'
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


