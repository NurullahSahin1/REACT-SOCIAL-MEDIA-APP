import "../topbar/topbar.css";
import { CiSearch } from "react-icons/ci";
import { IoPerson } from "react-icons/io5";
import { FaRocketchat } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";

const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">
          Sahin <span className="logoName">Social</span>
        </span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <CiSearch className="searchIcon" />
          <input
            placeholder="Search for Friend, post or vide"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <IoPerson />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <FaRocketchat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <IoIosNotifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
      </div>
      <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />
    </div>
  );
};

export default Topbar;
