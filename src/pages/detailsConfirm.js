import React, { useContext, useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { useHistory } from 'react-router-dom'


import { store } from '../store';

const DetailsConfirm = () => {
   const globalState = useContext(store);
   const { dispatch, state } = globalState;
   const history = useHistory();

   const handleSubmit = () => {
      history.push("/emergency-contact")
   }

   return (
      <>
         <Container className="confirm-item" >
               <Row >
                  <Col md="4"  className="confirm-item__label" >
                     <span>Your First Name  </span>  
                  </Col>
                  <Col md="6" >
                     <span className="confirm-item__details"> {state.userData.firstName} </span>  
                  </Col>
                  <Col md="2" className="confirm-item__edit">
                     <Link to="/details/firstNameRef">
                        Edit
                     </Link>  
                  </Col>
               </Row>  

               <Row>
                  <Col md="4"  className="confirm-item__label" >
                     <span>Your lastName</span>  
                  </Col>
                  <Col md="6" >
                     <span className="confirm-item__details">{state.userData.lastName} </span>  
                  </Col>
                  <Col md="2" className="confirm-item__edit" >
                     <Link to="/details/lastNameRef">
                        Edit
                     </Link>  
                  </Col>
               </Row>  

               <Row>
                  <Col md="4"  className="confirm-item__label" >
                     <span>Your Phone</span>  
                  </Col>
                  <Col md="6" >
                     <span className="confirm-item__details"> {state.userData.phone} </span>  
                  </Col>
                  <Col md="2" className="confirm-item__edit" >
                     <Link to="/details/phoneRef">
                        Edit
                     </Link>  
                  </Col>
               </Row>  

               <Row>
                  <Col md="4" className="confirm-item__label" >
                     <span>Your Email  </span>  
                  </Col>
                  <Col md="6" >
                     <span style={{fontSize: '20px', fontWeight: '600', color: '#000'}}> {state.userData.email} </span>  
                  </Col>
                  <Col md="2" className="confirm-item__edit" >
                     <Link to="/details/emailRef">
                        Edit
                     </Link> 
                  </Col>
               </Row>  

               <Row>
                  <Col md="4" className="confirm-item__label" >
                     <span>Your Date of Birth  </span>  
                  </Col>
                  <Col md="6" >
                     <span style={{fontSize: '20px', fontWeight: '600', color: '#000'}}>{state.userData.birthDate} </span>  
                  </Col>
                  <Col md="2" className="confirm-item__edit" >
                     <Link to="/details/dateRef">
                        Edit
                     </Link>
                  </Col>
               </Row>  

               <Row>
                  <Col md="4" className="confirm-item__label" >
                     <span>Your Weight  </span>  
                  </Col>
                  <Col md="6" >
                     <span style={{fontSize: '20px', fontWeight: '600', color: '#000'}}> {state.userData.weight} lbs</span>  
                  </Col>
                  <Col md="2" className="confirm-item__edit" >
                     <Link to="/details/weightRef">
                        Edit
                     </Link>
                  </Col>
               </Row>  
         </Container>
         <Footer action={handleSubmit} location="/emergency-contact" progress={50} />
      </>
   )
}

export default DetailsConfirm;