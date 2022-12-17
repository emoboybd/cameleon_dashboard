import React from "react";
import "./DashBoardItem.css";
import Calendar from "../../../assets/Calendar.svg";

function DashboardItem({
  dashBoard_title,
  dashboard_date,
  dashboard_calender,
}) {
  return (
    <div className="site_performance_time_date_container">
      <h2 className="site_performance_text">{dashBoard_title}</h2>
      <div className="site_performance_time_date_wrapper">
        <p className="site_performance_time">{dashboard_date}</p>
        <div className="site_performance_date_wrapper">
          <img src={Calendar} />
          <p className="site_performance_date">{dashboard_calender}</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardItem;
