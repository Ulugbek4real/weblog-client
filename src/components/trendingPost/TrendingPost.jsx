import "./trendingPost.scss";
import AuthorPic from "../../assets/profilePic.jpeg"
import PostPic from "../../assets/post.jpeg";
import { Link } from "react-router-dom";
const TrendingPost = () => {
  return (
    <div className="trendingPost">
     <div className="post trending-post">
     <a className="cat" href="#">education</a>
    <Link to="/post/postID"><img className="postPic" src={PostPic}></img></Link>
        <div className="postInfo">
            
            <div className="postTitle">
                <Link to="/post/postID" className="title"><h2>8 High-Income Skills You Can Learn In Your Spare Time</h2></Link>
                 <div className="subtitle"><Link to="/post/postID">The more skills you develop, the more money you'll make.</Link></div>
            </div>
            <div className="postHeader">
                <Link to="#" className="author "><h4 className="trending-author"> By Ulugbek4real</h4></Link>
            </div>
            <div className="postFooter">
                <div className="left">
                <p className="postDate">11/11/2021</p>
                <p class="dot">·</p>
                <p className="readTime">4 min read</p>
          
                </div>
                <div className="right">
                <i className=" saved fa-regular fa-bookmark"></i>
                </div>
            </div>

        </div>
       
           
       
    </div>
</div>
  )
}

export default TrendingPost