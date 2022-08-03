import "./home.scss";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Trending from "../../components/tranding/Trending";
import { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
  const [ posts, setPosts ] = useState([]);
  

  useEffect(()=>{
    const fetchPosts = async () => {
      const res = await axios.get("http://localhost:3000/api/posts");
      console.log(res);
     };
fetchPosts();
  },[])

  return (
<>
   <Trending />
    <div className='home'>
    <Sidebar />
    <Posts />
 
    </div>
    </>
  )
}

export default Home