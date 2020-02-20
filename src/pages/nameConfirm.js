import React, { useContext, useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { store } from '../store';
import { Redirect } from 'react-router-dom'
import axios from 'axios';


const nameConfirm = () => {
  
      return (
         <>
            <Container>
               <header >
             
               </header>
               
               
               <Row className="justify-content-center align-items-center" style={{height: '100vh'}}>
               
                  <Col lg="6" className="text-center ">

                  <img src="/img/giphy.png"  width="400px" />
                        <h3>Are you the Alex that made this booking?</h3>
                        <h5>Just a few things to clear before your jump.</h5>

                        <div> 
                              <Button onClick='{}'
                              variant="primary" >
                              Submit
                           </Button>     

                                 <Button onClick='{getBookingData}'
                              variant="primary" >
                              Submit
                           </Button>
                        </div>
                  </Col>
               </Row>
            </Container>
         </>
      )

}


export default nameConfirm;