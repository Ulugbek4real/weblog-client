import "./subMenu.scss"

const SubMenu = () => {
  return (
    <aside className="submenu">
    <a href="/write">Write</a>
    <a href="/settings">Edit profile</a>
    <a href="/">Posts</a>
    <a  className="logout-red" href="#">Logout</a>
  

    </aside>
  )
}

export default SubMenu