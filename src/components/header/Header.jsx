import "./header.scss";

const Header = () => {
  return (
    <div className="header">
    <ul className="headerTitles">
      <li className="headerLinks">Trending</li>
      <li className="headerLinks">Recent</li>
      <li className="headerLinks">Categories  <i class="fa-solid fa-caret-down"></i></li>
    </ul>
    </div>
  );
}

export default Header