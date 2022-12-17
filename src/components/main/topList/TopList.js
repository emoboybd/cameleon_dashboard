import React from "react";
import "./TopList.css";

function TopList({ no, title, link, totalClicks, referrerType }) {
  return (
    <div className="top_site_title">
      <ul className="top_site_list">
        <div className="top_site_list_left no_title_width">
          <li className="top_site_list_item">{no}</li>
          <li className="top_site_list_item">{title}</li>
        </div>
        <li className="top_site_list_item top_site_list_item_link">{link}</li>
        <div className="top_site_list_right">
          <li className="top_site_list_item clicks_width">{totalClicks}</li>
          <li className="top_site_list_item referee_width">{referrerType}</li>
        </div>
      </ul>
    </div>
  );
}

export default TopList;
