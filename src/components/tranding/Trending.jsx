import "./trending.scss";

import TrendingPost from "../../components/trendingPost/TrendingPost.jsx";

const Trending = () => {
  return (
    <div className="trending">
    <div className="wrapper">
    <div className="container">
        <TrendingPost className="post"/>
        <TrendingPost className="post"/>
        </div>
       <div className="container"> 
       <TrendingPost className="post"/>
        <TrendingPost className="post"/>
       </div>
        <div className="container">
        <TrendingPost className="post"/>
        <TrendingPost className="post"/>
        </div>

    </div>
       

    </div>
  )
}

export default Trending