import HomeIcon from "../assets/icons/homes.png";
import SearchIcon from "../assets/icons/search.png";
import ExploreIcon from "../assets/icons/explore.png";
import AiIcon from "../assets/icons/Ai.png";
import ReelsIcon from "../assets/icons/reels.png";
import CreateIcon from "../assets/icons/Create.png";
import MessagesIcon from "../assets/icons/msg.png";
import NotificationsIcon from "../assets/icons/noti.png";
import UserIcon from "../assets/icons/user.png";
export default function Sidebar() {
  return (
    <aside>
      <nav className="sidebar_nav">
        <ul className="sidebar_list_items">
          <li>
            <img className="sidebar_icon" src={HomeIcon} />
            <a href="#">Home</a>
          </li>
          <li>
            <img className="sidebar_icon" src={SearchIcon} />
            <a href="#">Search</a>
          </li>
          <li>
            <img className="sidebar_icon" src={ExploreIcon} />
            <a href="#">Explore</a>
          </li>
          <li>
            <img className="sidebar_icon" src={CreateIcon} />
            <a href="#">Create</a>
          </li>
          <li>
            <img className="sidebar_icon" src={ReelsIcon} />
            <a href="#">Reels</a>
          </li>
          <li>
            <img className="sidebar_icon" src={MessagesIcon} />
            <a href="#">Messages</a>
          </li>
          <li>
            <img className="sidebar_icon" src={NotificationsIcon} />
            <a href="#">Notifications</a>
          </li>
          <li>
            <img className="sidebar_icon" src={UserIcon} />
            <a href="#">Profile</a>
          </li>
          <li>
            <img className="sidebar_icon" src={AiIcon} />
            <a href="#">Denver AI</a>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
