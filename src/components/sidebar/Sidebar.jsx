import "./sidebar.scss"

const Sidebar = () => {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <span className="sidebarTitle">DISCOVER MORE OF WHAT MATTERS TO YOU</span>
        <div className="sidebarLinks">
            
            <a className="sidebarLink" href="#"><p>Self </p></a>
            <a className="sidebarLink" href="#"><p>Relationships</p></a>
            <a className="sidebarLink" href="#"><p>Data Science</p></a>
            <a className="sidebarLink" href="#"><p>Programming</p></a>
            <a className="sidebarLink" href="#"><p>Productivity</p></a>
            <a className="sidebarLink" href="#"><p>Javascript</p></a>
            <a className="sidebarLink" href="#"><p>Machine Learning</p></a>
            <a className="sidebarLink" href="#"><p>Politics</p></a>
            <a className="sidebarLink" href="#"><p>Heath</p></a>

        </div>
        <div className="extraLinks">
        <a className="extraLink" href="#"><p>Help </p></a>
        <a className="extraLink" href="#"><p>Status </p></a>
        <a className="extraLink" href="#"><p>Writers </p></a>
        <a className="extraLink" href="#"><p>Blog </p></a>
        <a className="extraLink" href="#"><p>Careers </p></a>
        <a className="extraLink" href="#"><p>Privacy</p></a>
        <a className="extraLink" href="#"><p>Terms </p></a>
        <a className="extraLink" href="#"><p>About </p></a>
        <a className="extraLink" href="#"><p>Knowable </p></a>
        </div>

        </div>
    </div>
  )
}

export default Sidebar