import React, { useContext, useEffect, useState } from 'react'
import { Form,  Button, Container, Row, Col } from 'react-bootstrap'
import { Formik,  Field } from 'formik';
import * as yup from 'yup';
import Footer from '../components/Footer'
import { store } from '../store';
import PhoneInput from 'react-phone-input-2'
import { useHistory } from 'react-router-dom'
import 'react-phone-input-2/lib/style.css'


const Terms = () => {

   const globalState = useContext(store);
   const { dispatch, state } = globalState;
   const history = useHistory();

   return (
      <>
         <Container  >
            <Row >
               <Col md="12"  className="confirm-item__label" >
                  <span>Terms and Conditions</span>  
               </Col>
            </Row>  

      </Container>
      <Footer action={'handleSubmit'} location="/emergency-contact" progress={90} />
      </>
   );
}

export default Terms;