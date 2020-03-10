import React, {useContext, useEffect, useRef }  from 'react'
import { store } from '../store';
import {
      Link, useHistory, 
 } from "react-router-dom";
import { useLocation,  } from "react-router";
import { Container, Button, Spinner } from 'react-bootstrap';
import IdleTimer from 'react-idle-timer'

function Header(props) {
      const globalState = useContext(store);
      const { dispatch, state } = globalState;

      let location = useLocation();
      let history = useHistory()
      let action =  props.action || "";
      let disabled = props.disabled || false;
      let bouncing = props.bouncing || '';
      let error =  props.error || "";
      let loading =  props.loading || "";

      const cleanState = () => {
        if (previousLocation == "/login/" + state.location)
        dispatch({
           type: 'resetState',
        })
      }

      useEffect(() => {
        if (location.pathname == '/terms') {
          window.addEventListener("popstate", () => {
            history.go(1);
          });
        }
      },  []);

     const idleTimer = useRef(null);

      const onAction = (e) => {
      
      }
    
      const onActive = (e) => {
       
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
              timeout={1000 * 60 * 5} />
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

                <Button className={`${bouncing && !disabled ? "bouncing" : ""}`} disabled={disabled} onClick={action}>
                    { loading ? <> <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      /> Loading... </> : 'Next'}
                    </Button>
            </Container>
          </div>
    )
      } else {
        return '';
      }
}

export default (Header);
