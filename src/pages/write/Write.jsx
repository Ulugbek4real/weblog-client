import "./write.scss";
import PostImg from "../../assets/post.jpeg";
const Write = () => {
  return (
    <div className="write">
    <img className="writeImage" src={PostImg}></img>
      
      <form className="writeForm">
        <div className="writeFormGroup">
        <label htmlFor="fileInput">
           <i class="fa-solid fa-plus"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}}></input>
              <input type="text" placeholder="Enter your title..." className ="writeInput" autoFocus={true}></input>
          
        </div>
        <div className="writeFormGroup">
              <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
 
        </div>
   <button className="sumbit-btn" type="submit">Publish</button>
        </form>
  
    </div>
  )
}

export default Write