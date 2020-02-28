import React, { useContext, useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'


const Home = () => {
   const [redirect, setRedirect] = useState(false)
   if (redirect === true) {
      return <Redirect to='/login' />
    }

   return (
      <>
         <Container onClick={() => setRedirect(true)}>
            <header >
               <img className="top-logo" src="/img/gojump-america-logo.png" width="252px" />
            </header>
            
            <Row className="justify-content-center">
               <Col className="start-box" lg="6" >
                     <p>Tap anywhere to start pre-checkin</p>
               </Col>
            </Row>
         </Container>
      </>
   )

}


export default Home;