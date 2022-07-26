import "./login.scss";
const Login = () => {
  return (
    <div className="login">
    <div className="floating">
      <h2>LOGIN</h2>
     <form className="loginForm">
  
  <label className="inputLabel">EMAIL</label>
  <input className="input" type="email" required></input>
  <label className="inputLabel">PASSWORD</label>
  <input className="input" type="password"></input>
 <div  className="loginCheckbox" >
  <input type="checkbox" className="checkbox"></input><span>Show password</span>
 </div>
  <button className="loginUpdate">LOGIN</button>
<div className="createAccount">
  <span>Do not have an account?</span>
  <a href="#">Create One</a>
</div>
     </form>
    </div>
    </div>
  )
}

export default Login