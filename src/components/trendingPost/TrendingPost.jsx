import "./trendingPost.scss";
import AuthorPic from "../../assets/profilePic.jpeg"

const TrendingPost = () => {
  return (
    <div className="trendingPost">
    <span className="order">01</span>
    <div className="wrapper">
    <div className="postInfo">
        <div className="postHeader">
            <img className="authorPic" src={AuthorPic}></img>
            <a href="#" className="author"><h4>Ulugbek4real</h4></a>
        </div>
        <div className="postTitle">
            <a href="#" className="title"><h2>8 High-Income Skills You Can Learn In Your Spare Time</h2></a>
        </div>
        <div className="postFooter">
            <div className="left">
            <p className="postDate">11/11/2021</p>
            <p class="dot">·</p>
            <p className="readTime">4min</p>
            <p class="dot">·</p>
            <a className="" href="#">education</a>
            </div>
        
        </div>

    </div>

    </div>
</div>
  )
}

export default TrendingPost