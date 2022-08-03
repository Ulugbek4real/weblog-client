import "./trendingPost.scss";
import AuthorPic from "../../assets/profilePic.jpeg"
import PostPic from "../../assets/post.jpeg";
const TrendingPost = () => {
  return (
    <div className="trendingPost">
     <div className="post trending-post">
     <a className="cat" href="#">education</a>
     <img className="postPic" src={PostPic}></img>
        <div className="postInfo">
            
            <div className="postTitle">
                <a href="/post/postID" className="title"><h2>8 High-Income Skills You Can Learn In Your Spare Time</h2></a>
                 <div className="subtitle"><a href="/post/postID">The more skills you develop, the more money you'll make.</a></div>
            </div>
            <div className="postHeader">
                <a href="#" className="author "><h4 className="trending-author"> By Ulugbek4real</h4></a>
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