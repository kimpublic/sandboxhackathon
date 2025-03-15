import React from "react";
import { Link } from "react-router-dom";

const Inbox = () => {
  return (
    <>
      <div className="toolbar">
        <input type="checkbox" />
        <button>⟳</button>
        <button>⋮</button>
      </div>

      <div className="tabs">
        <button className="tab active">Primary</button>
        <button className="tab">Social</button>
        <button className="tab">Promotions</button>
      </div>

      <div className="email-list">
        <Link
          to="/email/1"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <EmailItem
            sender="GitHub"
            subject="You have a new notification"
            time="11:44 AM"
          />
        </Link>
        <Link
          to="/email/2"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <EmailItem
            sender="Twitter"
            subject="New login detected"
            time="10:20 AM"
          />
        </Link>
      </div>
    </>
  );
};

const EmailItem = ({ sender, subject, time }) => {
  return (
    <div className="email-item">
      <input type="checkbox" />
      <span className="star">⭐</span>
      <span className="sender">{sender}</span>
      <span className="subject">{subject}</span>
      <span className="time">{time}</span>
    </div>
  );
};

export default Inbox;
