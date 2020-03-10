import React  from 'react'
import {Link} from "react-router-dom";

import { useLocation} from "react-router";
import { Container, Button, ProgressBar, Spinner } from 'react-bootstrap';

function Footer(props) {
      let location = useLocation();
      let disabled = props.disabled || false;
      let bouncing = props.bouncing || '';
      let action =  props.action || "";
      let error =  props.error || "";
      let loading =  props.loading || "";
      let progress =  props.progress;
      let nextLocation = location.pathname == "/details" ?  'details-confirm' :  location.pathname == "/details-confirm" ?  'emergency-contact' : "";

      if (location.pathname != "/" && location.pathname != "/login" && location.pathname != "/name-confirm" ){
         
        return (
          <div className="footer">
            <Container className="d-flex justify-content-between align-items-center " style={{height: '100%'}}>
                <div style={{width: '200px'}}>
                  <div className="complete-text">{progress}% completed</div>
                  <ProgressBar className="complete-bar" now={progress}  />
                </div>
                {  error ?   <div className="text-danger small"> 
                    {error}
                </div> : ''}
               

                <div>
                    <Button className={`${bouncing && !disabled ? "bouncing" : ""}`} disabled={disabled} onClick={action}>
                    { loading ? <> <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      /> Loading... </> : 'Next'}
                    </Button>
                </div>
            </Container>
          </div>
      )
      } else {
        return null;
      }
}

export default Footer;
