import "./post.scss";
import PostPic from "../../assets/post.jpeg";
import AuthorPic from "../../assets/profilePic.jpeg";
import { Link } from "react-router-dom";
const Post = ({post}) => {
  const PF  = "http://localhost:3000/images/"
  return (
    
    <div className="post">
        <div className="postInfo">
            <div className="postHeader">
                <img className="authorPic" src={AuthorPic}></img>
                <a href="#" className="author"><h4>{post.username}</h4></a>
            </div>
            <div className="postTitle">
                <Link to={`/post/${post._id}`} className="title"><h2>{post.title}</h2></Link>
                 <div className="subtitle"><Link to={`/post/${post._id}`}><p>{post.desc}</p></Link></div>
            </div>
            <div className="postFooter">
                <div className="left">
                <p className="postDate">{new Date(post.createdAt).toLocaleDateString()}</p>
                <p class="dot firstDot">·</p>
                <p className="readTime">4 min read</p>
                <p class="dot">·</p>
                {post.categories.map((name,index)=> (
                  <a key={index} className="" href="#">{name}</a>
                  ))}
               
                </div>
                <div className="right">
                <i className=" saved fa-regular fa-bookmark"></i>
                </div>
            </div>

        </div>
       <Link to={`/post/${post._id}`}><img className="postPic" src={PF + post.photo}></img></Link>
            
       
    </div>
  )
}

export default Post