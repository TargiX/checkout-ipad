import React  from 'react'
import {Link} from "react-router-dom";

import { useLocation} from "react-router";
import { Container, Button, ProgressBar } from 'react-bootstrap';

function Footer() {
      let location = useLocation();

      let nextLocation = location.pathname == "/details" ?  'details-confirm' :  location.pathname == "/details-confirm" ?  'emergency-contact' : "";

      const now = 60;

      if (location.pathname != "/" && location.pathname != "/login" && location.pathname != "/name-confirm" ){
         
        return (
          <div className="footer">
            <Container className="d-flex justify-content-between align-items-center " style={{height: '100%'}}>
                <div style={{width: '200px'}}>
                  <div className="complete-text">0% completed</div>
                  <ProgressBar className="complete-bar" now={now}  />
                </div>
                
                <div>
                     <Link to={nextLocation}> 
                        <Button>
                           Next
                        </Button>
                     </Link>
                </div>
            </Container>
          </div>
      )
      } else {
        return null;
      }
}

export default Footer;
