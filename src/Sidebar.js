import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import Edevelopmark from "./assets/edevelopmark.png"



function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  const page = ( pageName , pageNotification, logo ) => (
    <div className="sidebar__page">
        <img src={logo} />
        <div className="sidebar__pageProfile">
        <h3>{pageName}</h3>
        <p>{pageNotification}</p>
        </div>
      </div>
  )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://media-exp1.licdn.com/dms/image/C5116AQEKBOpYvo31hw/profile-displaybackgroundimage-shrink_350_1400/0/1585119048034?e=1617235200&v=beta&t=XPjVAs9_GupGdP0KsL8n4iNXRhiiHHCOJVrliX14Tow"
          alt=""
        />
        <Avatar
          src={user?.photoUrl}
          style={{ height: "65px", width: "65px" }}
          className="sidebar__avatar"
        >
          {user?.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h5>{user.email} </h5>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">8,089</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">3,089</p>
        </div>
      </div>

      <div className="sidebar__upbottom">
        <p>My page</p>
        {page("Edevelopmark", "Page notifications", "./assets/edevelopmark.png")}
      </div>


      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("webdeveloper")}
        {recentItem("webdesign")}
        {recentItem("developer")}
        {recentItem("softwareengineering")}
      </div>
    </div>
  );
}

export default Sidebar;
