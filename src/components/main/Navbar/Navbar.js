import React from "react";
import "./Navbar.css";
import Search from "../../../assets/Search.svg";
import notification from "../../../assets/notification.svg";
import profile_avatar from "../../../assets/profile_avatar.png";
import Arrow_down from "../../../assets/Arrow_down.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="mav_left_wrapper">
        {/* search component 🔽*/}
        <div className="search_wrapper">
          <div className="search_inner_wrapper">
            <input
              className="search_input"
              type="text"
              placeholder="Search..."
            />
            <img className="search_icon" src={Search} />
          </div>
        </div>
        {/* search links 🔽*/}
        <div className="navigation_links">
          <ul className="navigation_link_items">
            <li className="navigation_link_item">Analytics</li>
            <li className="navigation_link_item">Earnings</li>
            <li className="navigation_link_item">Ads Experiments</li>
          </ul>
        </div>
      </div>

      {/* user account 🔽*/}
      <div className="mav_right_wrapper">
        <img className="nav_bell_icon" src={notification} />
        <div className="user_account">
          <img className="user_account_img" src={profile_avatar} />
          <div className="user_name_wrapper">
            <p className="user_welcome">Welcome</p>
            <div className="user_name_text_wrapper">
              <p className="user_name_text">Daniel Estasmos</p>
              <img src={Arrow_down} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
