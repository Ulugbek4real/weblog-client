import "./register.scss";
import ProfPic from "../../assets/profilePic.jpeg";
const Register = () => {
  return (
   <div className="register">
    <div className="floating">
      <h2>REGISTER</h2>
     <form className="registerForm">
    <div className="img-container">
    <img src={ProfPic} className="profPic"></img>
      <label className="imgLabel" htmlFor="fileInput">Upload profile picture</label>
       <input type="file" id="fileInput" style={{display:"none"}}></input>
    </div>
      
  <label className="inputLabel">USERNAME</label>
  <input className="input" type="text" required></input>
  <label className="inputLabel">EMAIL</label>
  <input className="input" type="email" required></input>
  <label className="inputLabel">PASSWORD</label>
  <input className="input" type="password"></input>
 <div  className="registerCheckbox" >
 
  <input type="checkbox"></input><span>Show password</span>
 </div>
  <button className="registerUpdate">REGISTER</button>
  <div className="loginAccount">
  <span>Already have an account?</span>
  <a href="#">Login</a>
</div>

     </form>
    </div>
    </div>
  )
}

export default Register