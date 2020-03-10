import React, { useContext, useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import * as yup from 'yup';
import { store } from '../store';
import PhoneInput from 'react-phone-input-2'
import { Formik } from 'formik';
import 'react-phone-input-2/lib/style.css'
import { useHistory } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'


const EmergencyContact = () => {
   const globalState = useContext(store);
   const { dispatch, state } = globalState;
   const history = useHistory();

   const schema = yup.object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      relation: yup.string().required(),
      phone: yup.string().matches( /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/).required(),
    });
  
   return (
      <Formik 
            validationSchema={schema}
            validateOnChange={false}
            onSubmit={ async (values) =>  { 
               let userEmergency =  state.userData
               userEmergency.emergency = values
               userEmergency.emergency.phone = "+" + values.phone.replace(/\D/g,'');   
    
               console.log(userEmergency)
               await dispatch({
               type: 'setUserData',
               userData: userEmergency,
               })
               history.push("/terms")
               }
            }
            initialValues={{
               firstName: state.userData.emergency ? state.userData.emergency.firstName : '',
               lastName: state.userData.emergency ? state.userData.emergency.lastName : '', 
               phone:  state.userData.emergency ? state.userData.emergency.phone : '',
               relation: state.userData.emergency ? state.userData.emergency.relation : '',
            }}
         >

         {({ handleSubmit,
             handleChange,
             handleBlur,
             values,
             touched,
             isValid,
             errors}) => (
        <Form noValidate  onSubmit={handleSubmit}>
        <Header action={handleSubmit} location="/terms"  ></Header>
        <Container >
         <Row className="mb-5">
            <Col md="6" >
                     <Form.Group controlId="firstName">
                        <Form.Label>FIRST NAME</Form.Label>
                        <Form.Control type={'text'} placeholder="Enter their first name"  value={values.firstName} onChange={handleChange} isValid={touched.firstName && !errors.firstName}  isInvalid={!!errors.firstName} />
                        <Form.Control.Feedback></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                           First name is a required field
                        </Form.Control.Feedback>
                     </Form.Group>
            </Col>
            <Col md="6" >
                     <Form.Group controlId="lastName">
                        <Form.Label>LAST NAME </Form.Label>
                        <Form.Control type={'text'}  placeholder="Enter their last name"  value={values.lastName} onChange={handleChange} isValid={touched.lastName && !errors.lastName}  isInvalid={!!errors.lastName} />
                        <Form.Control.Feedback type="invalid">
                           Last name is a required field
                        </Form.Control.Feedback>
                     </Form.Group>
                      
            </Col>
         </Row>
         <Row className="mb-5">
            <Col md="6" >
                        <Form.Group controlId="phone">
                              <Form.Label>PHONE NUMBER</Form.Label>
                              <PhoneInput country={'us'} id="phone" name="phone" inputClass="form-control phone-icon" placeholder="Phone/Mobile" countryCodeEditable="false"  value={values.phone} 
                              inputProps={{
                              onChange: handleChange,  
                              required: true,
                              type: "tel",
                              id: "phone",
                              name: "phone",
                           }}
                        />
                           <Form.Control.Feedback type="invalid" style={{'display': !!errors.phone ? 'block' : 'none' }}>
                              Must be a valid phone number
                           </Form.Control.Feedback>
                        </Form.Group>   
            </Col>
            <Col md="6" >
                     <Form.Group controlId="relation">
                        <Form.Label>RELATION</Form.Label>
                        <Form.Control type={'text'} placeholder="How are you related to them?"  value={values.relation} onChange={ handleChange} isValid={touched.relation && !errors.relation} isInvalid={!!errors.relation}/>
                        <Form.Control.Feedback type="invalid">
                           {errors.relation}
                        </Form.Control.Feedback>
                     </Form.Group>
            </Col>
         </Row>

         </Container>
      
         <Footer action={handleSubmit} location="/terms" progress={70} />
        </Form>
        )}
         </Formik>
   )
}

export default EmergencyContact;