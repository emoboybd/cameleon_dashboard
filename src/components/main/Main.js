import React from "react";
import "./Main.css";
import Navbar from "./Navbar/Navbar";
import vistors_site_performance from "../../assets/vistors_site_performance.svg";
import page_views_show from "../../assets/page_views_show.svg";
import bounce_rate_chart from "../../assets/bounce_rate_chart.svg";
import Add_new_user from "../../assets/Add_new_user.svg";
import online_users_icon from "../../assets/online_users_icon.svg";
import unique_visitors_chart from "../../assets/unique_visitors_chart.svg";
import Card from "../card/Card";
import DashboardItem from "./dashboardItem/DashboardItem";
import Topsites from "./referringSite/Topsites";

function Main() {
  return (
    <div className="main">
      <Navbar className="navbar" />
      <h1 className="dashboard_text">DashBoard</h1>

      {/* site performance */}
      <DashboardItem
        className="site_performance_dashboard"
        dashBoard_title="Site performance"
        dashboard_date="Today vs 7 days ago"
        dashboard_calender="June 03, 22 to July 02, 22"
      />

      <div className="site_performance_wrapper">
        <Card
          iconTop={vistors_site_performance}
          amount="92,000"
          index="+3,840 (26,80%)"
          title="Visitors"
          active
        />
        <Card
          iconTop={page_views_show}
          amount="92,00k"
          index="-3,840 (26,80%)"
          title="Page views"
        />
        <Card
          iconTop={bounce_rate_chart}
          amount="80,00k"
          index="+3,840 (26,80%)"
          title="Bounce rates"
        />
        <a className="site_performance_link">{`View All >`}</a>
      </div>

      <DashboardItem
        className="user_stat_dashboard"
        dashBoard_title="Users statistics"
        dashboard_date="Today vs 2 days ago"
        dashboard_calender="June 03, 22 to July 02, 22"
      />

      <div className="user_stat_wrapper">
        <Card title="Unique Visitors" chart={unique_visitors_chart} active />
        <Card
          iconTop={Add_new_user}
          amount="17,805"
          index="+1,500 (4,17%)"
          title="New users"
        />
        <Card
          iconTop={online_users_icon}
          amount="1,800"
          index="+530 (8,38%)"
          title="Online users"
        />
        <a className="site_performance_link">{`View All >`}</a>
      </div>
      <Topsites />
    </div>
  );
}

export default Main;
