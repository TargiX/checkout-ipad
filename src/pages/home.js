import React, { useContext, useEffect, useState } from 'react'
import { Form, Button, Container, Row, Col } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import { store } from '../store';
import { useHistory, Link, useParams } from 'react-router-dom'


const Home = () => {
   const globalState = useContext(store);
   const { dispatch, state } = globalState;
   const history = useHistory();
   let { location } = useParams();


   const cleanState = () => {
      dispatch({
         type: 'resetState',
      })
      history.push(`/login/${location}`)
   }

  if (location != "lv" && location != "os" && location != "sc" && location != "dv"  && location != "ny") {
     return <Redirect to="/home/lv"/>
  }

   return (
      <>
         <Container onClick={cleanState}>
            <header >
               <img className="top-logo" src="/img/gojump-america-logo.png" width="252px" />
            </header>

            <Row className="justify-content-center">
               <Col className="start-box" lg="6" >
                     <p>Tap here to start pre-checkin</p>
               </Col>
            </Row>
         </Container>
      </>
   )

}


export default Home;