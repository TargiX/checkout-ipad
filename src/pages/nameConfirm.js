import React, { useContext, useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { store } from '../store';
import { Redirect, Link } from 'react-router-dom'



const NameConfirm = () => {

   const globalState =  useContext(store);
   const { dispatch, state} = globalState;
      
  
   return (
         <> 
            <Container>
               <Row className="justify-content-center align-items-center" style={{height: '50vh'}}>
                  <Col lg="6" className="text-center ">
                  <img className="mb-5" src="/img/giphy.png"  width="400px" />
                        <h3>Are you the {state.user.details.parentName} that made this booking?</h3>
                        <h5>Just a few things to clear before your jump.</h5>

                        <div className="mt-5"> 
                           <Link to="/details" >
                              <Button className="mr-5"
                                 variant="primary" >
                                 No
                              </Button> 
                           </Link>
                           
                           <Link to="/details">
                              <Button 
                                 variant="primary" >
                                 Yes
                              </Button>
                           </Link>   
                        </div>
                  </Col>
               </Row>
            </Container>
         </>
      )

}


export default NameConfirm;