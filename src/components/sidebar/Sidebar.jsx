import "./sidebar.scss"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios";

const Sidebar = () => {
  const [ cats, setCats ] = useState([]);

  useEffect(()=>{
const getCats = async () => {
const res = await axios.get("http://localhost:3000/api/categories/");
setCats(res.data);
};
getCats();
  },[])
  return (
    <div className="sidebar">
        <div className="sidebarItem">
        <span className="sidebarTitle">DISCOVER MORE OF WHAT MATTERS TO YOU</span>
        <div className="sidebarLinks">
            {cats.map((c,index) => ( <Link key={index} to={`/?cat=${c.name}`} className="sidebarLink"><p>{c.name}</p></Link>))}
           

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