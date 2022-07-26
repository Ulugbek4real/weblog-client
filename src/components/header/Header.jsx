import "./header.scss";
import banner from "../../assets/banner.svg"
const Header = () => {
  return (
    <div className="header">
   <div className="wrapper">
   <div className="left">
   <h1>Stay curious.</h1>
   <p>Discover stories, thinking, and expertise from writers on any topic.</p>
   <button>Start reading</button>
   </div>
   {/* <div className="right">
<img src={banner}></img>
   </div> */}
   </div>
    </div>
  );
}

export default Header