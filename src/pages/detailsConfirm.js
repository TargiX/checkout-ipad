import React, { useContext, useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

const DetailsConfirm = () => {

   const [formData, setFormData] = useState({
       firstName: 'Rebecca',
       surName: 'Smith',
       email: 'rebecca.s@gmail.com',
       phone: '+44-202-555-0102',
       birthDate: '22/12/28',
       weight: '65lbs'
      })

   return (
      <>
         <Container className="confirm-item" >
               <Row >
                  <Col md="4" style={{lineHeight: '30px'}} >
                     <span>Your First Name  </span>  
                  </Col>
                  <Col md="6" >
                     <span className="confirm-item__details"> {formData.firstName} </span>  
                  </Col>
                  <Col md="2" className="confirm-item__edit">
                     <span>Edit</span>   
                  </Col>
               </Row>  

               <Row>
                  <Col md="4" style={{lineHeight: '30px'}} >
                     <span>Your Surname</span>  
                  </Col>
                  <Col md="6" >
                     <span className="confirm-item__details"> {formData.surName} </span>  
                  </Col>
                  <Col md="2" className="confirm-item__edit" >
                     <span>Edit</span>   
                  </Col>
               </Row>  

               <Row>
                  <Col md="4" style={{lineHeight: '30px'}} >
                     <span>Your Phone</span>  
                  </Col>
                  <Col md="6" >
                     <span className="confirm-item__details"> {formData.phone} </span>  
                  </Col>
                  <Col md="2" style={{lineHeight: '30px'}} >
                     <span>Edit</span>   
                  </Col>
               </Row>  

               <Row>
                  <Col md="4" style={{lineHeight: '30px'}} >
                     <span>Your Email  </span>  
                  </Col>
                  <Col md="6" >
                     <span style={{fontSize: '20px', fontWeight: '600', color: '#000'}}> {formData.email} </span>  
                  </Col>
                  <Col md="2" style={{lineHeight: '30px'}} >
                     <span>Edit</span>   
                  </Col>
               </Row>  

               <Row>
                  <Col md="4" style={{lineHeight: '30px'}} >
                     <span>Your Date of Birth  </span>  
                  </Col>
                  <Col md="6" >
                     <span style={{fontSize: '20px', fontWeight: '600', color: '#000'}}> {formData.birthDate} </span>  
                  </Col>
                  <Col md="2" style={{lineHeight: '30px'}} >
                     <span>Edit</span>   
                  </Col>
               </Row>  

               <Row>
                  <Col md="4" style={{lineHeight: '30px'}} >
                     <span>Your Weight  </span>  
                  </Col>
                  <Col md="6" >
                     <span style={{fontSize: '20px', fontWeight: '600', color: '#000'}}> {formData.weight} </span>  
                  </Col>
                  <Col md="2" style={{lineHeight: '30px'}} >
                     <span>Edit</span>   
                  </Col>
               </Row>  
         </Container>
      </>
   )
}

export default DetailsConfirm;