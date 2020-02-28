import React, { useContext, useEffect, useState, useRef } from 'react'
import { Form,  Button, Container, Row, Col } from 'react-bootstrap'
import { Formik,  Field } from 'formik';
import * as yup from 'yup';
import Footer from '../components/Footer'
import { store } from '../store';
import PhoneInput from 'react-phone-input-2'
import { useHistory, useParams,  } from 'react-router-dom'
import CountryList from '../components/utility/CountryList';
import 'react-phone-input-2/lib/style.css'
import DatePicker from 'react-mobile-datepicker';


const Details = () => {

   const globalState = useContext(store);
   const { dispatch, state } = globalState;
   const history = useHistory();

   let { focusinput } = useParams();

   const [time, setTime] = useState(new Date())
   const [isOpen, setOpen] = useState(false)


   const [focusState, setFocus] = useState('')

   const handleClick = () => {
      setOpen(true);
   }

   const handleCancel = () => {
      setOpen(false);
   }

   const handleSelect = (newTime, setFieldValue) => {
      setTime(newTime);
      let convertedTime = (newTime.getMonth()+1)+'-'+newTime.getDate()+'-'+newTime.getFullYear();
      setFieldValue('birthDate', convertedTime, true)
      setOpen(false);
   }

   useEffect(() => {
      setFocus(focusinput)
      if (focusinput == 'dateRef' ) {
         setOpen(true);
      }
    },  []);

   useEffect(() => {
      if ( focusState ) {
         eval(focusState).current.focus();
      }
    },  [focusState]);

   const firstNameRef = useRef(null);
   const lastNameRef = useRef(null);
   const emailRef = useRef(null);
   const phoneRef = useRef(null);
   const dateRef = useRef(null);
   const weightRef = useRef(null);
   const address1Ref = useRef(null);
   const address2Ref = useRef(null);
   const cityRef = useRef(null);
   const stateRef = useRef(null);
   const countryRef = useRef(null);
   const zipcodeRef = useRef(null);
   
   
   const schema = yup.object({
      firstName: yup.string().required(),
      lastName: yup.string().required(),
      email: yup.string().email().required(),
      phone: yup.string().matches( /(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\s*[)]?[-\s\.]?[(]?[0-9]{1,3}[)]?([-\s\.]?[0-9]{3})([-\s\.]?[0-9]{3,4})/).required(),
      birthDate: yup.string().required(),
      address1: yup.string().required(),
      address2: yup.string(),
      city: yup.string().required(),
      country: yup.string().required(),
      state: yup.string().required(),
      zipcode: yup.string().required(),
      weight: yup.number().required().positive().integer()
    });
  
   return (
         <Formik 
            validationSchema={schema}
            onSubmit={ async (values) =>  { 
               
               let formattedValues = values
               formattedValues.phone = "+" + values.phone.replace(/\D/g,'');   
               
               await dispatch({
                  type: 'setUserData',
                  userData: formattedValues,
                  })
                  history.push("/details-confirm")
                  }
            }
            initialValues={{
               firstName: state.parent ?  state.user.details.parentName : state.userData ? state.userData.firstName : '',
               lastName: state.parent ?  state.user.details.parentSurName   : state.userData ? state.userData.lastName : '', 
               email: state.parent ?  state.user.details.parentEmail  : state.userData ? state.userData.email : '',
               phone: state.parent ?  state.user.details.parentPhone  : state.userData ? state.userData.phone : '',
               birthDate: state.userData ? state.userData.birthDate : '',
               weight: state.userData ? state.userData.weight : '',
               address1: state.userData ? state.userData.address1 : '',
               address2: state.userData ? state.userData.address2 : '',
               city: state.userData ? state.userData.city : '',
               country: state.userData ? state.userData.country : 'United States',
               zipcode: state.userData ? state.userData.zipcode : '',
               state: state.userData ? state.userData.state : '',
               emergency: ''
            }}
         >
         
         {({ handleSubmit,
             handleChange,
             handleBlur,
             values,
             touched,
             setFieldValue,
             validateField,
             isValid,
             errors}) => (

        <Form noValidate  onSubmit={handleSubmit}>
        
        <Container >
         <Row className="mb-2">
            <Col md="6" >
               <Form.Group controlId="firstName">
                  <Form.Label>FIRST NAME</Form.Label>
                  <Form.Control type={'text'}  ref={firstNameRef} placeholder="Enter your first name"  value={values.firstName} onChange={handleChange} isValid={touched.firstName && !errors.firstName}  isInvalid={!!errors.firstName} />
                  <Form.Control.Feedback></Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                     First name is a required field
                  </Form.Control.Feedback>
               </Form.Group>
            </Col>
            <Col md="6" >
               <Form.Group controlId="lastName">
                  <Form.Label>LAST NAME </Form.Label>
                  <Form.Control type={'text'}   ref={lastNameRef} placeholder="Enter your last name"  value={values.lastName} onChange={handleChange} isValid={touched.lastName && !errors.lastName}  isInvalid={!!errors.lastName} />
                  <Form.Control.Feedback type="invalid">
                     Last name is a required field
                  </Form.Control.Feedback>
               </Form.Group>
            </Col>
         </Row>
         <Row className="mb-2">
            <Col md="6" >
               <Form.Group controlId="email">
                  <Form.Label>EMAIL ADDRESS</Form.Label>
                  <Form.Control type={'email'} ref={emailRef} placeholder="Enter your email address"  value={values.email} onChange={handleChange} isValid={touched.email && !errors.email} isInvalid={!!errors.email}/>
                  <Form.Control.Feedback type="invalid">
                  {errors.email}
                  </Form.Control.Feedback>
               </Form.Group>
            </Col>
            <Col md="6" >
               <Form.Group controlId="phone">
                     <Form.Label>PHONE NUMBER</Form.Label>
                     <PhoneInput country={'us'} id="phone" name="phone" inputClass="form-control phone-icon" placeholder="Phone/Mobile" countryCodeEditable="false"  value={values.phone} 
                     inputProps={{
                        onChange: handleChange,  
                        ref: phoneRef,
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
         </Row>

         <Row className="mb-2">
            <Col md="12" >
               <Form.Group controlId="address1">
                  <Form.Label>ADDRESS 1</Form.Label>
                  <Form.Control type={'text'} ref={address1Ref} placeholder="Enter your address"  value={values.address1} onChange={handleChange} isValid={touched.address1 && !errors.address1}  isInvalid={!!errors.address1} />
                  <Form.Control.Feedback></Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                     Address is a required field
                  </Form.Control.Feedback>
               </Form.Group>
            </Col>
            <Col md="12" >
               <Form.Group controlId="address2">
                  <Form.Label>ADDRESS 2</Form.Label>
                  <Form.Control type={'text'} ref={address2Ref} placeholder=""  value={values.address2} onChange={handleChange} isValid={touched.address2 && !errors.address2}  isInvalid={!!errors.address2} />
                  <Form.Control.Feedback type="invalid">
                     
                  </Form.Control.Feedback>
               </Form.Group>
            </Col>
         </Row>

         <Row className="mb-2">
            <Col md="6" >
               <Form.Group controlId="city">
                  <Form.Label>CITY</Form.Label>
                  <Form.Control type={'text'} ref={cityRef} placeholder="Enter your city"  value={values.city} onChange={handleChange} isValid={touched.city && !errors.city}  isInvalid={!!errors.city} />
                  <Form.Control.Feedback></Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                     City is a required field
                  </Form.Control.Feedback>
               </Form.Group>
            </Col>
            <Col md="6" >
               <Form.Group controlId="state">
                  <Form.Label>STATE/REGION</Form.Label>
                  <Form.Control type={'text'} ref={stateRef} placeholder="Enter your state/region"  value={values.state} onChange={handleChange} isValid={touched.state && !errors.state}  isInvalid={!!errors.state} />
                  <Form.Control.Feedback type="invalid">
                     State/region is required field
                  </Form.Control.Feedback>
               </Form.Group>
            </Col>

         </Row>

         <Row className="mb-2">
            <Col md="6" >
               <Form.Group controlId="country">
                  <Form.Label>COUNTRY</Form.Label>
                  <Form.Control as="select" type={'text'} ref={countryRef}  value={values.country} onChange={handleChange} isValid={touched.country && !errors.country}  isInvalid={!!errors.country} >
                      <CountryList/>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                     Country is a required field
                  </Form.Control.Feedback>
               </Form.Group>
            </Col>

            <Col md="6">
               <Form.Group controlId="zipcode">
                  <Form.Label>ZIPCODE</Form.Label>
                  <Form.Control type={'text'} ref={zipcodeRef} placeholder="Enter your postal code"  value={values.zipcode} onChange={handleChange} isValid={touched.zipcode && !errors.zipcode}  isInvalid={!!errors.zipcode} />
                  <Form.Control.Feedback type="invalid">
                     Postal is a required field
                  </Form.Control.Feedback>
               </Form.Group>
            </Col>
         </Row>

         <Row className="mb-5">
            <Col md="4" >
               <Form.Group controlId="birthDate">
                  <Form.Label>DATE OF BIRTH</Form.Label>
                  <Form.Control type={'text'} ref={dateRef} placeholder="MM-DD-YY" readOnly={true} value={values.birthDate} onClick={handleClick} onChange={handleChange} isValid={touched.birthDate && !errors.birthDate} isInvalid={!!errors.birthDate}/>
                  <Form.Control.Feedback type="invalid">
                     {errors.birthDate}
                  </Form.Control.Feedback>
               </Form.Group>

               <DatePicker
                    confirmText={'Confirm'}
                    cancelText={'Cancel'}
                    value={time}
                    isOpen={isOpen}
                    onSelect={(newTime) => {handleSelect(newTime, setFieldValue,validateField)}}
                    onCancel={handleCancel} />
         
            </Col>
            <Col md="8" >
               <Form.Group controlId="weight">
                     <Form.Label>WEIGHT </Form.Label>
                     <Form.Control type={'number'} ref={weightRef} placeholder="Enter your weight in lbs" value={values.weight} onChange={handleChange} isValid={touched.weight && !errors.weight} isInvalid={!!errors.weight} />
                     <Form.Control.Feedback type="invalid">
                        {errors.weight}
                  </Form.Control.Feedback>
                     
               </Form.Group> 
            </Col>
         </Row>
         </Container>
      
         <Footer action={handleSubmit} location="/details-confirm" progress={16} />
        </Form>
        )}
         </Formik>
   );
}

export default Details;