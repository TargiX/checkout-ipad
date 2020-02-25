import React, { useContext, useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Formik, Field } from 'formik';
import Footer from '../components/Footer'
import { store } from '../store';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const Details = () => {

   const globalState = useContext(store);
   const { state } = globalState;

   return (
      
        
         <Formik 
            initialValues={{
               firstName: state.parent ?  state.user.details.parentName : '',
               surName: state.parent ?  state.user.details.parentSurName   : '', 
               email: state.parent ?  state.user.details.parentEmail : '',
               phone: state.parent ?  state.user.details.parentPhone : '',
               birthDate: '',
               weight: ''
            }}
            onSubmit={() => console.log('form submitted!!')}


            validate={(values) => {
                  let errors = {};
                  if (!values.firstName) {
                        errors.firstName = 'First name is required';
                  }

                  if (!values.surName) {
                        errors.surName = 'Last name is required';
                  }

                  if (!values.email) {
                        errors.email = 'Email address is required';
                  }

                  if (!values.phone) {
                        errors.phone = 'Phone is required';
                  }

                  if (!values.birthDate) {
                        errors.birthDate = 'Birth date is required';
                  }

                  if (!values.weight) {
                        errors.weight = 'Weight is required';
                  }

                  return errors;
               }}
            render={({handleChange, handleSubmit, handleBlur, values, errors, validateForm}) => (
               <>
       
        <Form>
        <Container >
         <Row className="mb-5">
            <Col md="6" >
               <Field 
                  name="firstName"
                  render={({field, formProps}) => (
                     <Form.Group controlId="firstName">
                        <Form.Label>FIRST NAME</Form.Label>
                        <Form.Control type={'text'} placeholder="Enter your first name"  value={field.value} onChange={field.onChange} />
                     </Form.Group>
                  )}
                />
            </Col>
            <Col md="6" >
               <Field 
                  name="surName"
                  render={({field, formProps}) => (
                     <Form.Group controlId="surName">
                           <Form.Label>SURNAME </Form.Label>
                           <Form.Control type={'text'}  placeholder="Enter your last name"  value={field.value} onChange={field.onChange} />
                     </Form.Group>
                  )}
               />         
            </Col>
         </Row>
         <Row className="mb-5">
            <Col md="6" >
               <Field 
                  name="email"
                  render={({field, formProps}) => (
                     <Form.Group controlId="email">
                        <Form.Label>EMAIL ADDRESS</Form.Label>
                        <Form.Control type={'email'} placeholder="Enter your email address"  value={field.value} onChange={field.onChange} />
                     </Form.Group>
                  )}
                />
            </Col>
            <Col md="6" >
               <Field 
                  name="phone"
                  render={({field, formProps}) => (
                     <Form.Group controlId="phone">
                           <Form.Label>PHONE NUMBER </Form.Label>
                           <PhoneInput country={'us'} inputClass="form-control phone-icon" placeholder="Phone/Mobile" countryCodeEditable="false" value={field.value} onChange={field.onChange}  
                           inputExtraProps={{
  									required: true,
  									type: "tel",
  									id: "phone",
  									name: "phone",
									
  								}}
  							/>
                     </Form.Group>
                  )}
               />         
            </Col>
         </Row>
         <Row className="mb-5">
            <Col md="4" >
               <Field 
                  name="birthDate"
                  render={({field, formProps}) => (
                     <Form.Group controlId="birthDate">
                        <Form.Label>DATE OF BIRTH</Form.Label>
                        <Form.Control type={'text'} placeholder="MM-DD-YY"  value={field.value} onChange={field.onChange} />
                     </Form.Group>
                  )}
                />
            </Col>
            <Col md="8" >
               <Field 
                  name="weight"
                  render={({field, formProps}) => (
                     <Form.Group controlId="weight">
                           <Form.Label>WEIGHT </Form.Label>
                           <Form.Control type={'number'} placeholder="Enter your weight in lbs" value={field.value} onChange={field.onChange} />
                     </Form.Group>
                  )}
               />         
            </Col>
         </Row>
         </Container>

         <Footer action={validateForm} location="/details-confirm" progress={12} />
        </Form>
        
        
        </>
    )}
         />
   )
}

export default Details;