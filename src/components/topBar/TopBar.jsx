import {Link} from 'react-router-dom';
import "./topBar.scss";
import profilePic from "../../assets/profilePic.jpeg";
import logo from "../../assets/w.png";

function TopBar() {
  const user = true;
  return (
    <>
      <div className="topBar">
        <div className="wrapper">
          <div className="top-left"><a href='/'><h1>Weblog</h1></a></div>
          <div className="top-right">
           { user ? <ul className="top-list">
              <li className="top-list-item">Our story</li>
              <li className="top-list-item">Logout</li>
              <li className="top-list-item"><a href='/write'>Write</a></li>
              <li className="top-list-item"><a href='/login'><i className="topIcon fa-regular fa-bookmark"></i></a></li>
              <li className="top-list-item"><a href='/settings'><img className="profImg" src={profilePic}></img></a></li>
            </ul> : <ul className="top-list">
              <li className="top-list-item">Our story</li>
              <li className="top-list-item">Membership</li>
              <li className="top-list-item"><a href='/write'>Write</a></li>
              <li className="top-list-item"><a href='/login'>Login</a></li>
              <li className="top-list-item btn"><a href='/register'>Get started</a></li>
            </ul>}

          </div>
        </div>
      </div>

    </>
  );
}

export default TopBar