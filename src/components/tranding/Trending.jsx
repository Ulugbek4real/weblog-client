import "./trending.scss";
import PostPic from "../../assets/post.jpeg";
import TrendingPost from "../../components/trendingPost/TrendingPost.jsx";

const Trending = () => {
  return (
    <div className="trending">
     
    <div className="wrapper">
    <div className="big-post POST">
    <div className="trending-br"><h3> <i class="fa-solid fa-arrow-trend-up up"></i> Trending on Weblog</h3></div>
      <img className="big-post-img" src={PostPic}></img>
      <div className="big-post-title"><h4>Featured project</h4>
      <h2>8 High-Income Skills You Can Learn In Your Spare Time</h2></div>
    </div>
        <TrendingPost className="POST"/>
        <TrendingPost className="POST"/>
        <TrendingPost className="POST"/>
        <TrendingPost className="POST"/>
    </div>
       

    </div>
  )
}

export default Trending