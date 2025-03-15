import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      {/* Header */}
      <header className="header">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            <img src="logo.png" alt="Logo" style={{width: "35px", marginLeft: "10px" }}/>
          </Link>
        </div>
        <input type="text" placeholder="Search mail" className="search-bar" />
        <div className="profile">
          <img src="https://via.placeholder.com/40" alt="Profile Picture" />
        </div>
      </header>

      <div className="container">
        {/* Sidebar */}
        <aside className="sidebar">
          <button className="compose-btn">Compose</button>
          <ul className="sidebar-menu">
            <li>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                Inbox
              </Link>
            </li>
            <li>Starred</li>
            <li>Sent</li>
            <li>Drafts</li>
            <li>Trash</li>
          </ul>
        </aside>

        {/* 메인 컨텐츠 영역 */}
        <main className="main-content">
          <Outlet />
        </main>
      </div>

      {/* Pop-up Sidebar */}
      <div id="popUpSidebar" className="pop-up-sidebar">
        <a href="#" className="close-btn">
          ×
        </a>
        <a href="#">Profile</a>
        <a href="#">Settings</a>
        <a href="#">Log Out</a>
      </div>

      {/* Overlay */}
      <div id="overlay" className="overlay"></div>

      {/* Open Sidebar Button */}
      <button id="openPopupBtn" className="open-popup-btn">
        +
      </button>
    </div>
  );
};

export default Layout;
