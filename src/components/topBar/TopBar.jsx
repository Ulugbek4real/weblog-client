import {Link} from 'react-router-dom';
import "./topBar.scss";
import profilePic from "../../assets/profilePic.jpeg";
import logo from "../../assets/w.png";
import SubMenu from '../subMenu/SubMenu';
import { useState } from 'react';

function TopBar() {
  const user = false;
  const [ isSubmenuOpen, setIsSubmenuOpen ] = useState(false);
  return (
    <>
      <div className="topBar">
        <div className="wrapper">
          <div className="top-left"><Link to="/"><h1>Weblog</h1></Link></div>
          <div className="top-right">
           { user ? <ul className="top-list">
              <li className="top-list-item dissappear">Our story</li>
              <li className="top-list-item dissappear">Logout</li>
              <li className="top-list-item dissappear"><Link to='/write'>Write</Link></li>
              <li className="top-list-item"><a href='/login'><i className="topIcon fa-regular fa-bookmark"></i></a></li>
              <li className="top-list-item"><img onClick={()=>setIsSubmenuOpen(!isSubmenuOpen)} className="profImg" src={profilePic}></img></li>
            </ul> : <ul className="top-list">
              <li className="top-list-item dissappear">Our story</li>
              <li className="top-list-item dissappear">Membership</li>
              <li className="top-list-item dissappear"><Link to='/write'>Write</Link></li>
              <li className="top-list-item dissappear"><Link to='/login'>Login</Link></li>
              <li className="top-list-item btn"><Link to='/register'>Get started</Link></li>
            </ul>}
        
            {isSubmenuOpen && <SubMenu />}
          </div>
        

        </div>
      </div>

    </>
  );
}

export default TopBar