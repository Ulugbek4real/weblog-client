import "./trending.scss";
import PostPic from "../../assets/post.jpeg";
import TrendingPost from "../../components/trendingPost/TrendingPost.jsx";
import { Link } from "react-router-dom";
const Trending = ({posts}) => {
  return (
  
    <div className="trending">
     
    <div className="wrapper">
    <div className="big-post POST">
    <div className="trending-br"><h3> <i class="fa-solid fa-arrow-trend-up up"></i> Trending on Weblog</h3></div>
     <Link to="/post/62f7e0c2248d77bd50df08a7"> <img className="big-post-img" src={PostPic}></img></Link>
      <div className="big-post-title"><h4>Featured project</h4>
      <h2>8 High-Income Skills You Can Learn In Your Spare Time</h2></div>
    </div>
    {posts.map((p,index)=>{ 
      return <TrendingPost key={index} post={p}className="POST"/>
    })}
    </div>
       

    </div>
  )
}

export default Trending