import React from "react";
import "./MenuItems.css";

function MenuItems({ icon, title, notification_type, last_item }) {
  return (
    <div className={`menu_items ${last_item ? "margin_btm_0" : ""}`}>
      <div className="menu_item_main">
        <img className="menu_item_icon" src={icon} />
        <h2 className="menu_item-name">{title}</h2>
      </div>
      {notification_type === "message" && (
        <div className="menu_notification_message_wrapper">
          <p className="menu_notification_message_text">3 new</p>
        </div>
      )}
      {notification_type === "invoice" && (
        <div className="menu_notification_invoice_wrapper">
          <p className="menu_notification_invoice_text">10+</p>
        </div>
      )}
    </div>
  );
}

export default MenuItems;
