import {Link} from 'react-router-dom';
import "./topBar.scss";
import profilePic from "../../assets/profilePic.jpeg";
import logo from "../../assets/w.png";
import SubMenu from '../subMenu/SubMenu';
import { useState } from 'react';

function TopBar() {
  const user = true;
  const [ isSubmenuOpen, setIsSubmenuOpen ] = useState(false);
  return (
    <>
      <div className="topBar">
        <div className="wrapper">
          <div className="top-left"><a href='/'><h1>Weblog</h1></a></div>
          <div className="top-right">
           { user ? <ul className="top-list">
              <li className="top-list-item dissappear">Our story</li>
              <li className="top-list-item dissappear">Logout</li>
              <li className="top-list-item dissappear"><a href='/write'>Write</a></li>
              <li className="top-list-item"><a href='/login'><i className="topIcon fa-regular fa-bookmark"></i></a></li>
              <li className="top-list-item"><img onClick={()=>setIsSubmenuOpen(!isSubmenuOpen)} className="profImg" src={profilePic}></img></li>
            </ul> : <ul className="top-list">
              <li className="top-list-item">Our story</li>
              <li className="top-list-item">Membership</li>
              <li className="top-list-item"><a href='/write'>Write</a></li>
              <li className="top-list-item"><a href='/login'>Login</a></li>
              <li className="top-list-item btn"><a href='/register'>Get started</a></li>
            </ul>}
        
            {isSubmenuOpen && <SubMenu />}
          </div>
        

        </div>
      </div>

    </>
  );
}

export default TopBar