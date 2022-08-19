import "./home.scss";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Trending from "../../components/tranding/Trending";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";


const Home = () => {
  const [ posts, setPosts ] = useState([]);
  const {search} = useLocation();

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3000/api/posts"+search);
  setPosts(res.data)
     };
fetchPosts();
  },[search])

  return (
<>
{ !search &&    <Trending posts={posts} />}
    <div className='home'>
    <Sidebar />
    <Posts posts={posts}/>
 
    </div>
    </>
  )
}

export default Home