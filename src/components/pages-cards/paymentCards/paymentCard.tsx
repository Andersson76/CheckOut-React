import { FC, useState } from "react"
import { Payment } from "../../../data/paymentList"
import { Grid } from '@mui/material'
import { TextField } from 'formik-mui'
import { Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import FormLabel from '@mui/material/FormLabel'


interface Props {}

export interface PaymentCard {
    cardnumber: number,
    fullname: string,
    month: number,
    year: number,
    CVC: number
  }
  
  export const DefaultPaymentCard: PaymentCard = {
    cardnumber: 0,
    fullname: "",
    month: 0,
    year: 0,
    CVC: 0
  }
  
  const PaymentSchema = Yup.object().shape({
       cardnumber: Yup.number()
         .min(16, 'Vänligen fyll i fältet')
         .max(16, 'Vänligen fyll i fältet')
         .required('Vänligen fyll i fältet'),
       fullname: Yup.string()
         .min(2, 'Vänligen fyll i fältet')
         .max(50, 'Vänligen fyll i fältet')
         .required('Vänligen fyll i fältet'),
        month: Yup.number()
         .min(2, 'Vänligen fyll i fältet')
         .max(2, 'Vänligen fyll i fältet')
         .required('Required'),
       year: Yup.string()
         .min(2, 'Vänligen fyll i fältet')
         .max(2, 'Vänligen fyll i fältet')
         .required('Vänligen fyll i fältet'),
        CVC: Yup.number()
         .min(3, 'Too Short!')
         .max(3, 'Vänligen fyll i fältet')
         .required('Vänligen fyll i fältet'),
     })



const PaymentCard: FC<Props> = (props) => {

    const [cardState, setCardState] = useState<Payment>()

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
    onSubmit={(values, actions) => {
      alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }}
    >

{({ errors, touched }) => (   
  <Form>
    <FormLabel id="demo-radio-buttons-group-label">Kortbetalning</FormLabel>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Field
            component={TextField}
            name='Kortnummer'
            type='number' 
            label='Kortnummer' 
            placeholder='0000111100001111'
            fullWidth
            {...errors.cardnumber && touched.cardnumber ? (
              <div>{errors.cardnumber}</div>
              ) : null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            name='Giltighetsdatum' 
            fluid 
            options= 'monthOption' // monthOption - props
            label='Månad' 
            placeholder='12'
            fullWidth
            {...errors.month && touched.month ? (
              <div>{errors.month}</div>
              ) : null}
          />
        </Grid>
        <Grid item xs={12}sm={6}>
          <Field
            component={TextField}
            name='Giltighetsdatum' 
            fluid 
            options='yearOptions' /* {} */
            label='År' 
            placeholder='22'
            fullWidth
            {...errors.year && touched.year ? (
              <div>{errors.year}</div>
              ) : null}
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
            {...errors.CVC && touched.CVC ? (
              <div>{errors.CVC}</div>
              ) : null}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            component={TextField}
            name='Korthavare'
            label='Korthavare' 
            placeholder='Förnamn och Efternamn'
            fullWidth
            {...errors.fullname && touched.fullname ? (
              <div>{errors.fullname}</div>
              ) : null}
          />
        </Grid>
      </Grid>
    </Form>             
)}

</Formik>

    )
}

export default PaymentCard


