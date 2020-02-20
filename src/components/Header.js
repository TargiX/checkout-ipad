import React  from 'react'
import {
      Link
 } from "react-router-dom";

import { useLocation} from "react-router";

function Header() {
      let location = useLocation();
      console.log(location.pathname)

      if(location.pathname != "/" && location.pathname != "/login" && location.pathname != "/nameconfirm"){
        return (
         <nav>
           <ul>
             <li>
               <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/about">About</Link>
             </li>
             <li>
               <Link to="/users">Users</Link>
             </li>
           </ul>
         </nav>

    )
      } else {
        return null;
      }
}

export default (Header);
