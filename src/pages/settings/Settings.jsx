import "./settings.scss";
import ProfPic from "../../assets/profilePic.jpeg";
const Settings = () => {
  return (
    <div className="settings">
    <div className="floating">
      <h2>UPDATE</h2>
     <form className="settingsForm">
    <div className="img-container">
    <img src={ProfPic} className="profPic"></img>
      <label className="imgLabel" htmlFor="fileInput">Update profile picture</label>
       <input type="file" id="fileInput" style={{display:"none"}}></input>
    </div>
      
  <label className="inputLabel">USERNAME</label>
  <input className="input" type="text" required></input>
  <label className="inputLabel">EMAIL</label>
  <input className="input" type="email" required></input>
  <label className="inputLabel">PASSWORD</label>
  <input className="input" type="password"></input>
 <div  className="settingsCheckbox" >
 
  <input type="checkbox"></input><span>Show password</span>
 </div>
  <button className="settingsUpdate">UPDATE</button>

     </form>
    </div>
    </div>
  )
}

export default Settings