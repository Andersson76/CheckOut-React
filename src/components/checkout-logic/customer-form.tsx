import { useContext } from 'react'
import { Grid, Button } from '@mui/material'
import { TextField } from 'formik-mui'
import { Formik, Field, Form} from 'formik'
import * as Yup from 'yup'
import { styleBtn } from "../../css/common"
import { CartContext } from '../context/cart-provider'


export interface FormData {
  firstname: string,
  lastname: string,
  address: string,
  zipcode: string,
  city: string,
  country: string,
  email: string,
  phonenumber: string
}

export const DefaultFormList: FormData = {
  firstname: "",
  lastname: "",
  address: "",
  zipcode: "",
  city: "",
  country: "",
  email: "",
  phonenumber: ""
}

const FormSchema = Yup.object().shape({
     firstname: Yup.string()
       .min(2, "Vänligen fyll i fältet")
       .max(50, "Vänligen fyll i fältet")
       .required('Vänligen fyll i fältet')
       /* .matches(/^[aA-zZ\s]+$/) */,
     lastname: Yup.string()
       .min(2, 'Vänligen fyll i fältet')
       .max(50, 'Vänligen fyll i fältet')
       .required('Vänligen fyll i fältet')
       /* .matches(/^[aA-zZ\s]+$/) */,
      address: Yup.string()
       .min(2, 'Vänligen fyll i fältet')
       .max(50, 'Vänligen fyll i fältet')
       .required('Vänligen fyll i fältet'),
     zipcode: Yup.string()
       .min(5, 'Postnumret måste innehålla 5 nummer')
       .max(5, 'Postnumret måste innehålla 5 nummer')
       .test((zipcode => String(zipcode).length <= 5)) 
       .required('Vänligen fyll i fältet'),
      city: Yup.string()
       .min(2, 'Vänligen fyll i fältet')
       .max(50, 'Vänligen fyll i fältet')
       .required('Vänligen fyll i fältet')
       /* .matches(/^[aA-zZ\s]+$/) */,
     country: Yup.string()
       .min(2, 'Vänligen fyll i fältet')
       .max(50, 'Vänligen fyll i fältet')
       .required('Vänligen fyll i fältet')
       /* .matches(/^[aA-zZ\s]+$/) */,
     email: Yup.string()
      .email('Vänligen ange korrekt mejladress')
      .required('Vänligen fyll i fältet'),
      phonenumber: Yup.string()
      .min(10, 'Telefonnumret måste innehålla 10 nummer')
      .max(10, 'Telefonnumret måste innehålla 10 nummer') 
      .test((phonenumber => String(phonenumber).length <= 10)) 
      .required('Vänligen fyll i fältet')

     /*  .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, */
   })



export const CustomerForm = () => {
  
  const {setInfoOfCustomer} = useContext(CartContext)

  return (
    
<Formik
    initialValues = {{
       firstname: '', 
       lastname: '', 
       address: '', 
       zipcode: '', 
       city: '', 
       country: '', 
       email: '', 
       phonenumber:"",
     }}

    validationSchema={FormSchema}
    onSubmit={values => {
      setInfoOfCustomer(values as FormData)
    }}
    >


{({ errors, touched }) => (
  <>
  <Form>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Förnamn*"
          name="firstname"
          variant="outlined"
          fullWidth
          {...errors.firstname && touched.firstname ? (
          <div>{errors.firstname}</div>
          ) : null}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Efternamn*"
          name="lastname"
          variant="outlined"
          fullWidth
          {...errors.lastname && touched.lastname ? (
            <div>{errors.lastname}</div>
            ) : null}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          label="Adress*"
          name="address"
          variant="outlined"
          fullWidth
          {...errors.address && touched.address ? (
            <div>{errors.address}</div>
            ) : null}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Postnummer*"
          name="zipcode"
          variant="outlined"
          fullWidth
          {...errors.zipcode && touched.zipcode ? (
            <div>{errors.zipcode}</div>
            ) : null}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Field
          component={TextField}
          label="Stad*"
          name="city"
          variant="outlined"
          fullWidth
          {...errors.city && touched.city ? (
            <div>{errors.city}</div>
            ) : null}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          label="Land*"
          name="country"
          variant="outlined"
          fullWidth
          {...errors.country && touched.country ? (
            <div>{errors.country}</div>
            ) : null}
        />
      </Grid>
      <Grid item xs={12}>
        <Field
          component={TextField}
          label="Mejl*"
          name="email"
          variant="outlined"
          fullWidth
          {...errors.email && touched.email? (
            <div>{errors.email}</div>
            ) : null}
        />
      </Grid> 
         <Grid item xs={12} >
           <Field
             component={TextField}
             label="Telefonnummer*"
             name="phonenumber"
             variant="outlined"
             placeholder='+46'
             fullWidth
             {...errors.phonenumber && touched.phonenumber ? (
              <div>{errors.phonenumber}</div>
              ) : null}
           />
         </Grid> 
    </Grid>
        <Button style={{...styleBtn, marginTop: "50px"}} type="submit" variant="contained">
          Spara
        </Button>
  </Form> 
  </>
  
  )}
</Formik>

  )
}


export default CustomerForm