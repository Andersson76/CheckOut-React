import { FC } from 'react';
import { Grid } from '@mui/material';
import { TextField } from 'formik-mui';
import { Formik, Field, FormikErrors, FormikTouched, FormikProps, Form} from 'formik';
import * as Yup from 'yup';



interface Props {}

export interface FormData {
  firstname: string,
  lastname: string,
  address: string,
  zipcode: number,
  city: string,
  country: string,
  email: string,
  phone: number
}

export const DefaultFormList: FormData = {
  firstname: "",
  lastname: "",
  address: "",
  zipcode: 0,
  city: "",
  country: "",
  email: "",
  phone: 0
}

export interface FormProps {
  firstname: string,
  lastname: string,
  address: string,
  zipcode: string,
  city: string,
  country: string,
  email: string,
  phone: string
}

const FormSchema = Yup.object().shape({
     firstname: Yup.string()
       .min(2, 'Too Short!')
       .max(50, 'Too Long!')
       .required('Required'),
     lastname: Yup.string()
       .min(2, 'Too Short!')
       .max(50, 'Too Long!')
       .required('Required'),
      address: Yup.string()
       .min(2, 'Too Short!')
       .max(50, 'Too Long!')
       .required('Required'),
     zipcode: Yup.string()
       .min(2, 'Too Short!')
       .max(5, 'Too Long!')
       .required('Required'),
      city: Yup.string()
       .min(2, 'Too Short!')
       .max(50, 'Too Long!')
       .required('Required'),
     country: Yup.string()
       .min(2, 'Too Short!')
       .max(50, 'Too Long!')
       .required('Required'),
     email: Yup.string().email('Invalid email').required('Required'),
     phone: Yup.string()
     .min(2, 'Too Short!')
     .max(10, 'Too Long!')
     .required('Required'),
   });


export const FormB = () => {

  
  
  
  
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
       phone: '',
     }}

    validationSchema={FormSchema}
  //  initialValues={initialValues}
    onSubmit={(values, actions) => {
      console.log({ values, actions })
      alert(JSON.stringify(values, null, 2))
      actions.setSubmitting(false)
    }}
    >


{({ errors, touched }) => (
  <>
    <Form>
    {/* <Grid container spacing={2}>
      <Grid item xs={12} sm={6}> */}
        <Field
          component={TextField}
          label="Förnamn"
          name="firstname"
          variant="outlined"
          fullWidth
          {...errors.firstname && touched.firstname ? (
          <div>{errors.firstname}</div>
          ) : null}
        />
      {/* </Grid>
      <Grid item xs={12} sm={6}> */}
        <Field
          component={TextField}
          label="Efternamn"
          name="lastname"
          variant="outlined"
          fullWidth
        />
      {/* </Grid>
      <Grid item xs={12}> */}
        <Field
          component={TextField}
          label="Adress"
          name="address"
          variant="outlined"
          fullWidth
        />
      {/* </Grid>
      <Grid item xs={12} sm={6}> */}
        <Field
          component={TextField}
          label="Postnummer"
          name="zipcode"
          variant="outlined"
          fullWidth
        />
      {/* </Grid>
      <Grid item xs={12} sm={6}> */}
        <Field
          component={TextField}
          label="Stad"
          name="city"
          variant="outlined"
          fullWidth
        />
      {/* </Grid>
      <Grid item xs={12} sm={6}> */}
        <Field
          component={TextField}
          label="Land"
          name="country"
          variant="outlined"
          fullWidth
        />
      {/* </Grid>
      <Grid item xs={12}> */}
        <Field
          component={TextField}
          label="Mejl"
          name="email"
          variant="outlined"
          fullWidth
        />
      {/* </Grid> 
      <Grid item xs={12}> */}
           <Field
             component={TextField}
             label="Telefonnummer"
             name="phone"
             variant="outlined"
             fullWidth
           />
         {/* </Grid> 
    </Grid> */}
    </Form> 
    </>
  )}
    </Formik>
  );
}

export default FormB