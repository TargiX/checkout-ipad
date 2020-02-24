import React, { useContext, useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { store } from '../store';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


const Details = () => {

   const globalState = useContext(store);
   const { dispatch, state } = globalState;
   const [formData, setFormData] = useState({
       firstName: '',
       surName: '',
       email: '',
       phone: '',
       birthDate: '',
       weight: ''
      })

   return (
      <>
         <Container >
         
         <Form>
            <Row className="mb-5">
                  <Col md="6" >
                     <Form.Group controlId="formFirstName">
                        <Form.Label>FIRST NAME</Form.Label>
                        <Form.Control 
                           type="text"
                           placeholder="Enter your first name" 
                           value={formData.firstName}
                           onChange={event => setFormData({...formData, firstName: event.target.value})}   
                           />
                     </Form.Group>
                  </Col>
                  <Col  md="6" >
                     <Form.Group controlId="formSurName">
                        <Form.Label>SURNAME</Form.Label>
                        <Form.Control 
                           type="text"
                           placeholder="Enter your last name" 
                           value={formData.surName}
                           onChange={event => setFormData({...formData, surName: event.target.value})}  
                           />
                     </Form.Group>
                  </Col>
               </Row>   
               <Row className="mb-5" >
                  <Col  md="6" >
                     <Form.Group controlId="formEmail">
                        <Form.Label>EMAIL ADDRESS</Form.Label>
                        <Form.Control 
                           type="email"
                           placeholder="Enter your email address" 
                           value={formData.email}
                           onChange={event => setFormData({...formData, email: event.target.value})}  
                           />
                     </Form.Group>
                  </Col>
                  <Col  md="6" >
                     <Form.Group controlId="formEmail">
                        <Form.Label>PHONE NUMBER</Form.Label>
                        	<PhoneInput country={'us'} inputClass="form-control phone-icon" placeholder="Phone/Mobile" countryCodeEditable="false" value={formData.phone}  onChange={value => setFormData({...formData, phone: value})}  
                           inputExtraProps={{
  									required: true,
  									type: "tel",
  									id: "phoneNumber",
  									name: "phoneNumber",
									
  								}}
  							/>
                     </Form.Group>
                     </Col>
                  </Row>  
                  <Row >
                     <Col md="6" >
                        <Form.Group controlId="formBirthDate">
                           <Form.Label>DATE OF BIRTH</Form.Label>
                           <Form.Control 
                              type="text"
                              placeholder="MM-DD-YY" 
                              value={formData.birthDate}
                              onChange={event => setFormData({...formData, birthDate: event.target.value})}   
                              />
                        </Form.Group>
                     </Col>
                     <Col  md="6" >
                        <Form.Group controlId="formWeight">
                           <Form.Label>WEIGHT</Form.Label>
                           <Form.Control 
                              type="text"
                              placeholder="Enter your weight in lbs" 
                              value={formData.weight}
                              onChange={event => setFormData({...formData, weight: event.target.value})}  
                              />
                        </Form.Group>
                     </Col>
        
                  {/* <Button onClick={'getBookingData'}
                     variant="primary" type="submit">
                     Submit
                  </Button> */}
               </Row>
            </Form> 
         </Container>
      </>
   )
}

export default Details;