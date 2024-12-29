import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBell, faQuestion } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";

import "./Header.css";
import Sidebar, { MenuBar } from "../Sidebar/Sidebar";
import Notifications from "../Notifications/Notifications";
import Overlay from "../Overlay/Overlay";
import { NavLink } from "react-router-dom";

function Header() {
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth > 1000);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    // Initialize state on mount
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const [notificationsOpen, setnotificationsOpen] = useState(false);
  const handleNotifications = () => {
    setnotificationsOpen(true);
  };
  const closeNotifications = () => {
    setnotificationsOpen(false);
  };

  return (
    <>
      <nav className="navbar">
 
          <span className="menu-toggle menu-icon" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
          </span>
        

        <span className="forLargeDevice">
          <NavLink to="/">
            <img
              className="website-logo"
              src="./eduFaith-new-logo.png"
              alt="EduFaith logo"
            />
          </NavLink>
          <p className="pt-3">EduFaith</p>
        </span>

   
          <input
            className="nav-input "
            type="text"
            placeholder="Search..."
          ></input>
     
        <NavLink to="/helpCenter">
          <button className="btn btn-secondary m-2 helpBtn">Help</button>
        </NavLink> 
          <span onClick={handleNotifications} className="notification-icon">
            <FontAwesomeIcon id="notifa-icon" icon={faBell} />
          </span> 
      </nav>

      <div
        className={`sidebar ${sidebarOpen ? `sidebar-open` : `sidebar-closed`}`}
      >
        <Sidebar closeSidebar={closeSidebar} />
      </div>

      {sidebarOpen ? <Overlay closeSidebar={closeSidebar} /> : <MenuBar />}

      {notificationsOpen && <Notifications closePage={closeNotifications} />}
      {notificationsOpen ? <Overlay /> : ""}
    </>
  );
}

export default Header;
