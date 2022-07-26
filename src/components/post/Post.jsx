import "./post.scss";
import PostPic from "../../assets/post.jpeg";
import AuthorPic from "../../assets/profilePic.jpeg";
const Post = () => {
  return (
    <div className="post">
        <div className="postInfo">
            <div className="postHeader">
                <img className="authorPic" src={AuthorPic}></img>
                <a href="#" className="author"><h4>Ulugbek4real</h4></a>
            </div>
            <div className="postTitle">
                <a href="/post/postID" className="title"><h2>8 High-Income Skills You Can Learn In Your Spare Time</h2></a>
                 <div className="subtitle"><a href="/post/postID">The more skills you develop, the more money you'll make.</a></div>
            </div>
            <div className="postFooter">
                <div className="left">
                <p className="postDate">11/11/2021</p>
                <p class="dot">·</p>
                <p className="readTime">4 min read</p>
                <p class="dot">·</p>
                <a className="" href="#">education</a>
                </div>
                <div className="right">
                <i className=" saved fa-regular fa-bookmark"></i>
                </div>
            </div>

        </div>
       
            <img className="postPic" src={PostPic}></img>
       
    </div>
  )
}

export default Post