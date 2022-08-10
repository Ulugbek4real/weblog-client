import "./subMenu.scss"
import { Link } from "react-router-dom"
const SubMenu = () => {
  return (
    <aside className="submenu">
    <Link to="/write">Write</Link>
    <Link to="/settings">Edit profile</Link>
    <Link to="/">Posts</Link>
    <Link to="/settings" className="logout-red">Logout</Link>
  

    </aside>
  )
}

export default SubMenu