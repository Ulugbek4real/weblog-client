import "./singlePost.scss";
import PostPic from "../../assets/post.jpeg";
import AuthorPic from "../../assets/profilePic.jpeg";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const SinglePost = () => {
const location = useLocation();
const path = location.pathname.split("/")[2];
const [ post, setPost ] = useState({});
useEffect(()=>{
const getPost = async () => {
    const res = await axios.get("http://localhost:3000/api/posts/"+path);
    setPost(res.data)
};
getPost();

},[path])

  return (
    <div className='singlePost'>
        <h1 className="title">{post.title}</h1>
        <h3 className="subTitle">{post.desc}</h3>
        <img src={PostPic} className="postImg"></img>
        <p className="story">{post.text}</p>
<div className="singleHeader">
            <div className="left">
                <Link to={`/?user=${post.username}`} className="author"><img src={AuthorPic} className="authorPic"></img></Link>
                <div className="infoContainer">
                    <Link className="Link" to={`/?user=${post.username}`}><h4 className="name">{post.username}</h4></Link>
                    <div className="details">
                    <p className="postDate">{new Date(post.createdAt).toLocaleDateString()}</p>
                <p class="dot ">·</p>
                <p className="readTime">4min</p>
                <p class="dot firstDot">·</p>
                <a className="listen" href="#"><i className=" play fa-regular fa-circle-play"></i> Listen</a>
                    </div>
                </div>
            </div>
            <div className="right">
        <i className="topIcon fa-brands fa-twitter twitter"></i>
        <i className="topIcon fa-brands fa-facebook facebook"></i>
        <i className="topIcon fa-brands fa-linkedin linkedin"></i>
        <i className=" save fa-regular fa-bookmark bookmark"></i>
            </div>
            </div>
       
    </div>
  )
}

export default SinglePost