import React from "react";
import "./Card.css";
import { IoSwapVerticalOutline } from "react-icons/io5";

function Card({ title, active, iconTop, amount, index, chart }) {
  return (
    <div className={`card ${active ? "active_card" : "normal_card"}`}>
      <div className="card_wrapper">
        <div className="card_top">
          <h2 className="card_name">{title ? title : ""}</h2>
          <img src={iconTop ? iconTop : ""} />
        </div>
        <h1
          className={`card_display_number ${
            active ? "card_number_white" : "card_number_blue"
          }`}
        >
          {amount ? amount : ""}
        </h1>
        {chart && <img src={chart} className="visitors_chart" />}
        <div className="card_btm">
          <p
            className={`card_botm_display_number ${
              active ? "index_neutral" : ""
            } ${index?.trim()[0] === "+" ? "index_up" : "index_down"}`}
          >
            {index ? index : ""}
          </p>

          {!chart && (
            <IoSwapVerticalOutline
              className={`card_btm_icon ${active ? "index_neutral" : ""} ${
                index?.trim()[0] === "+" ? "index_up" : "index_down"
              }`}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
