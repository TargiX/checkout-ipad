import React, {useContext }  from 'react'
import { store } from '../store';
import {
      Link, useHistory 
 } from "react-router-dom";
import { useLocation,  } from "react-router";
import { Container } from 'react-bootstrap';

function Header() {
      const globalState = useContext(store);
      const { state } = globalState;

      let location = useLocation();
      let history = useHistory()
      
      let previousLocation = location.pathname == "/details" ?  '/login' : location.pathname == "/details-confirm" ? '/details' : location.pathname == "/emergency-contact" ? '/details-confirm' : location.pathname == "/terms" ? '/emergency-contact' : ''
    
      if(location.pathname != "/" && location.pathname != "/login" && location.pathname != "/name-confirm"){
        return (
        
          <div className="header mb-5 ">
            <Link to={previousLocation}>
                <img  src="/img/back-arrow.svg"  height="15px" alt="GoJump Logo" style={{position: 'absolute', top: '30px', left: '40px' }}/>
           </Link>
      
            <Container className="d-flex justify-content-between align-items-center " style={{height: '100%'}}>
                <div>
                  { location.pathname == "/details-confirm" ? <span className="main-text">Confirm Details</span> :
                    location.pathname == "/emergency-contact" ? <span className="main-text">Emergency Contact</span> :
                    location.pathname == "/terms" ? <span className="main-text">Terms & Conditions</span> :
                    <img  src="/img/gojump-america-logo.png"  height="26px" alt="GoJump Logo"/>}
                </div>

                {
                  location.pathname != "/details-confirm" && location.pathname != "/emergency-contact" ?

                  <div>  
                    <div className="header__text-grey">Booking Ref:</div>
                    <div className="header__text-dark">{state.bookingId || ''} </div>
                  </div> 

                  : <div></div>

                }
                  
            </Container>
          </div>
    )
      } else {
        return null;
      }
}

export default (Header);
