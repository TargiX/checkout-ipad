import React, {useContext, useRef }  from 'react'
import { store } from '../store';
import {
      Link, useHistory, useParams, Redirect 
 } from "react-router-dom";
import { useLocation,  } from "react-router";
import { Container } from 'react-bootstrap';
import IdleTimer from 'react-idle-timer'

function Header() {
      const globalState = useContext(store);
      const { dispatch, state } = globalState;

      let location = useLocation();
      let history = useHistory()

      let { locationCity } = useParams();
      const cleanState = () => {
        if (previousLocation == "/login")
        dispatch({
           type: 'resetState',
        })
     }


     const idleTimer = useRef(null);

      const onAction = (e) => {
        console.log('user did something', e)
      }
    
      const onActive = (e) => {
        console.log('user is active', e)
      }
    
      const onIdle = (e) => {
        
        history.push(`/home/${state.location}` )
       
      }
      

      let previousLocation = location.pathname == "/details" ?  "/login/" + state.location : location.pathname == "/details-confirm" ? '/details' : location.pathname == "/emergency-contact" ? '/details-confirm' : location.pathname == "/terms" ? '/emergency-contact' : ''
      if( location.pathname != `/home/${location.pathname.slice(6)}` && 
          location.pathname != `/login/${location.pathname.slice(7)}` &&
          location.pathname != "/name-confirm" &&
          location.pathname != "/final-confirm" )
          {
        return (
          <div className="header mb-5 ">
              <IdleTimer
          ref={idleTimer}
          element={document}
          onActive={onActive}
          onIdle={onIdle}
          onAction={onAction}
          debounce={250}
          timeout={1000 * 60 * 1} />
            <Link to={previousLocation} onClick={cleanState}>
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
