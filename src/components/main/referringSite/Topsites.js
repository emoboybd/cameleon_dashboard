import React from "react";
import TopList from "../topList/TopList";
import "./Topsites.css";
const top_site_data = [
  {
    no: "1",
    title: "Stack Overflow",
    link: "https://stackoverflow.com/question/..",
    totalClicks: "120",
    referrerType: "nofollow, noopener",
  },
  {
    no: "2",
    title: "Youtube",
    link: "https://www.youtube.com/?v=7wB1j..",
    totalClicks: "14,522",
    referrerType: "nofollow",
  },
  {
    no: "1",
    title: "Stack Overflow",
    link: "https://stackoverflow.com/question/..",
    totalClicks: "120",
    referrerType: "nofollow, noopener",
  },
];

function Topsites() {
  return (
    <div className="top_sites">
      <div className="top_sites_text_wrapper">
        <h1>Top referring sites</h1>
        <p className="top_sites_text">Outbond links that come to your site</p>
      </div>

      <div className="top_site_lists">
        <TopList
          no="No"
          title="Site title"
          link="Link"
          totalClicks="Total clicks"
          referrerType="Referrer type"
        />
        {top_site_data.map((data) => {
          return (
            <TopList
              no={data.no}
              title={data.title}
              link={data.link}
              totalClicks={data.totalClicks}
              referrerType={data.referrerType}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Topsites;
