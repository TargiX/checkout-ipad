import React, { useContext, useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'

import { store } from '../store';
import { useHistory, Link, Redirect } from 'react-router-dom'


const FinalConfirm = () => {
   const globalState = useContext(store);
   const { dispatch, state } = globalState;
   const history = useHistory();
   
   const cleanState = () => {
      dispatch({
         type: 'resetState',
      })
   }
   
   useEffect(() => {
      console.log('setTimeout')
      const timer = setTimeout(() => {
         
         history.push(`/home/${state.location}`) 
      }, 25000);
      return () => clearTimeout(timer);
   }, []);


   return (
        <Container>
               <Row className="justify-content-center align-items-center" style={{height: '90vh'}}>
                  <Col lg="6" className="text-center ">
                  <img className="mb-5" src="/img/giphy3.png"  width="400px" />
                     <h3>You’re good to go, {state.userData ? state.userData.firstName : 'Undefined'}! </h3>
                        <div className="mt-5"> 
                           <Link to={`/home/${state.location}`} onClick={cleanState}>
                              <Button 
                                 variant="primary"
                                 size="lg" >
                                 Awesome!
                              </Button>
                           </Link>   
                        </div>
                  </Col>
               </Row>
         </Container>
   )
}


export default FinalConfirm;


