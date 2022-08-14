import "./subMenu.scss"
import { Link, useLocation } from "react-router-dom"
import { Context } from "../../context/Context";
import { useContext } from "react";
const SubMenu = () => {
  const {dispatch} = useContext(Context);
  const handleLogout = () => {
  dispatch({type:"LOGOUT"})
  };
  return (
    <aside className="submenu">
    <Link to="/write">Write</Link>
    <Link to="/settings">Edit profile</Link>
    <Link to="/">Posts</Link>
    <Link to="/login" className="logout-red" onClick={handleLogout}>Logout</Link>
  

    </aside>
  )
}

export default SubMenu