import React  from 'react'
import {
      Link, useHistory 
 } from "react-router-dom";
import { useLocation,  } from "react-router";
import { Container } from 'react-bootstrap';

function Header() {
      let location = useLocation();
      let history = useHistory()
      
      let previousLocation = location.pathname == "/details" ?  '/name-confirm' : location.pathname == "/details-confirm" ? '/details' : location.pathname == "/emergency-contact" ? '/details-confirm' : ''
    
      if(location.pathname != "/" && location.pathname != "/login" && location.pathname != "/nameconfirm"){
        return (
        
          <div className="header mb-5 ">
            <Link to={previousLocation}>
                <img  src="/img/back-arrow.svg"  height="15px" alt="GoJump Logo" style={{position: 'absolute', top: '30px', left: '40px' }}/>
           </Link>
      
            <Container className="d-flex justify-content-between align-items-center " style={{height: '100%'}}>
                <div>
                  { location.pathname == "/details-confirm" ? <span className="main-text">Confirm Details</span> :
                    location.pathname == "/emergency-contact" ? <span className="main-text">Emergency Contact</span>
                          : <img  src="/img/gojump-america-logo.png"  height="26px" alt="GoJump Logo"/>}
                </div>
                

                {
                  location.pathname != "/details-confirm" && location.pathname != "/emergency-contact" ?

                  <div>  
                    <div className="header__text-grey">Booking Ref:</div>
                    <div className="header__text-dark">1A2B3C</div>
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
