import React, { useContext, useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { store } from '../store';
import { Redirect } from 'react-router-dom'
import axios from 'axios';


const Login = () => {
   const [formData, setFormData] = useState({ bookingId: '', firstName: ''})
   const [redirectPath, setPath] = useState('')
   
   const globalState = useContext(store);
   const { dispatch, state} = globalState;


   const getBookingData = async (event) => {
      event.preventDefault();
      const result = await axios(
         `https://booking.staging.dzmanage.com/api/v1/verifyBookingId/${formData.bookingId}/${formData.firstName}`,
         );
         
         dispatch({
         type: 'getBookingData',
         user: result.data
         })
      }

      if (state.user.success === true) {
         if (state.user.details.parent && state.user.details.parentName == formData.firstName ) {
            return <Redirect to='/name-confirm'/>
         } else {
            return <Redirect to='/details' />
         }
       }

      return (
         <>
            <Container>
               <header >
               <img className="top-logo" src="/img/gojump-america-logo.png"  width="252px" />
               </header>
               {/* <div>This is it {state.user  ? <div>{state.user.details.parentName} </div> : ''}</div> */}
               
               <Row className="justify-content-center">
                  <Col className="form-wrapper" lg="6" >
                     <Form>
                     <Form.Group controlId="formBasicEmail">
                        <Form.Label>Enter booking ID</Form.Label>
                        <Form.Control 
                           type="text"
                           placeholder="Booking Id" 
                           value={formData.bookingId}
                           onChange={event => setFormData({...formData, bookingId: event.target.value})}   
                           />
                     </Form.Group>

                     <Form.Group controlId="formBasicPassword">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control 
                           type="text"
                           placeholder="Enter customer's first name" 
                           value={formData.firstName}
                           onChange={event => setFormData({...formData, firstName: event.target.value})}  
                           />
                     </Form.Group>

                     <Button onClick={getBookingData}
                        variant="primary" type="submit">
                        Submit
                     </Button>
                  </Form>   
                  </Col>
               </Row>
            </Container>
         </>
      )

}


export default Login;