import "./home.scss";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Trending from "../../components/tranding/Trending";
import { useEffect, useState } from "react";
import axios from "axios";


const Home = () => {
  const user = true;

  return (
<>
   {!user && <Header />}
   {!user && <Trending />}
    <div className='home'>
    <Posts />
    <Sidebar />
    </div>
    </>
  )
}

export default Home