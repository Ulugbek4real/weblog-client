import "./singlePost.scss";
import PostPic from "../../assets/post.jpeg";
import AuthorPic from "../../assets/profilePic.jpeg";


const SinglePost = () => {
  return (
    <div className='singlePost'>
     <div className="singleHeader">
            <div className="left">
                <a className="author"><img src={AuthorPic} className="authorPic"></img></a>
                <div className="infoContainer">
                    <h4 className="name">Ulugbek4real</h4>
                    <div className="details">
                    <p className="postDate">11/11/2021</p>
                <p class="dot">·</p>
                <p className="readTime">4min</p>
                <p class="dot">·</p>
                <a className="" href="#"><i className=" play fa-regular fa-circle-play"></i> Listen</a>
                    </div>
                </div>
            </div>
            <div className="right">
        <i className="topIcon fa-brands fa-twitter"></i>
        <i className="topIcon fa-brands fa-facebook"></i>
        <i className="topIcon fa-brands fa-linkedin"></i>
        <i className=" save fa-regular fa-bookmark"></i>
            </div>
            </div>
        <h1 className="title">5 Books I Have Recommended Over 100 Times</h1>
        <h3 className="subTitle">And why I’ll never stop talking about them</h3>
        <img src={PostPic} className="postImg"></img>
        <p className="story">Some of the best books I have found are through recommendations. It’s either my bookworm friends or through podcasts of people I admire recommending a book that ends up on my shelf.

Although I refrain from pushing people to read books I have loved, but there are certain books that I can’t shut up about. They have helped me tremendously, and as my way of giving back to the authors, I have recommended some of these books over a hundred times.

They are poignant, thought-provoking, and helped me immensely, and I reckon they can be a beacon of inspiration for people following the same journey. Here’s a list of 5 such books.</p>
       
    </div>
  )
}

export default SinglePost