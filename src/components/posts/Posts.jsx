import "./posts.scss"
import Post from "../post/Post"
const Posts = () => {
  return (
    <div className="posts">
    <div className="recent-br"><h3><i class="fa-regular fa-clock clock"></i> Recent on Weblog</h3></div>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default Posts