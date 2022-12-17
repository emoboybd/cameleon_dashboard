import React from "react";
import "./Menu.css";
import mainLogo from "../../assets/cameleon_logo.svg";
import MenuItems from "./menu_items/MenuItems";
import category from "../../assets/main_menu_icon/Category.svg";
import Message from "../../assets/main_menu_icon/Message.svg";
import Notification from "../../assets/main_menu_icon/Notification.svg";
import reports from "../../assets/main_menu_icon/reports.svg";
import Bookmark from "../../assets/work_icon/Bookmark.svg";
import Conference from "../../assets/work_icon/Conference.svg";
import Info_Square from "../../assets/options_icon/Info_Square.svg";
import Setting from "../../assets/options_icon/Setting.svg";

function Menu() {
  return (
    <div className="menu">
      <div className="main_logo_wrapper">
        <img className="main_logo" src={mainLogo} />
      </div>
      <div className="menu_container">
        <div className="menu_wrapper">
          <h2 className="menu_title">Main Menu</h2>
          <MenuItems icon={category} title="Dashboard" />
          <MenuItems
            icon={Message}
            title="Message"
            notification_type="message"
          />
          <MenuItems icon={reports} title="Reports" />
          <MenuItems icon={Notification} title="Notifications" />
          <MenuItems
            icon={Message}
            title="Invoice"
            notification_type="invoice"
            last_item
          />
        </div>
        <div className="menu_dash_wrapper">
          <div className="menu_dash"></div>
        </div>
        <div className="menu_wrapper">
          <h2 className="menu_title">works</h2>
          <MenuItems icon={Bookmark} title="Bookmarks" />
          <MenuItems icon={Conference} title="Conferences" />
        </div>
        <div className="menu_dash_wrapper">
          <div className="menu_dash"></div>
        </div>
        <div className="menu_wrapper">
          <h2 className="menu_title">options</h2>
          <MenuItems icon={Setting} title="Settings" />
          <MenuItems icon={Info_Square} title="About" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
