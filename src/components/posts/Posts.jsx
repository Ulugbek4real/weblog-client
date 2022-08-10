import "./posts.scss"
import Post from "../post/Post"
const Posts = ({posts}) => {
  return (
    <div className="posts">
    <div className="recent-br"><h3><i class="fa-regular fa-clock clock"></i> Recent on Weblog</h3></div>
        {posts.map((p)=>(
           <Post key={p._id} post={p}/>
      ))}
       
    </div>
  )
}

export default Posts