import "./home.scss";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import Trending from "../../components/tranding/Trending";

const Home = () => {
  return (
<>
    <Header />
    <Trending />
    <div className='home'>
    <Posts />
    <Sidebar />
    </div>
    </>
  )
}

export default Home