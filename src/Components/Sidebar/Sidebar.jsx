import { Link, NavLink } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEye,
  faVideo,
  faImages,
  faMusic,
  faBookOpenReader,
  faGear,
  faQuestion,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { faCircleDot } from "@fortawesome/free-regular-svg-icons";
import { faGooglePlay, faApple } from "@fortawesome/free-brands-svg-icons";

import "./Sidebar.css";

function SidebarItem({ icon, name, path }) {
  return (
    <>
      <NavLink
        to={path}
        exact
        activeClassName=" "
        style={({ isActive }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            color: isActive ? "#1eb7f6" : "#d0d0d0", //a235g
            // backgroundColor: isActive ? "red" : "blue",
            fontSize: isActive ? "24px" : "",
          };
        }}
      >
        <div className="sidebar-divs d-block text-truncate page-type">
          <span className="sid-div-icons">
            <FontAwesomeIcon icon={icon} />
          </span>
          <span>{name}</span>
        </div>
      </NavLink>
    </>
  );
}

function Sidebar({ closeSidebar }) {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status
  useEffect(() => {
    async function getUsers() {
      try {
        const result = await axios("");
        setUsers(result.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    }
    getUsers();
  }, []);

  return (
    <>
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
          id="byteContainer"
          className=" "
        >
          <div
            style={{ width: "35px", height: "35px" }}
            className="bytes_spinner"
          ></div>
        </div>
      ) : (
        <div className="sidebar">
          <div className="sidebar-divs sidebar-logo-div">
            <div className="logo-and-name-parent">
              <img
                className="website-logo"
                src="./eduFaith-new-logo.png"
                alt="edufaith logo"
              />

              <span className="edufaith-logo-text-span">
                <p id="edufaith-logo-text">edufaith</p>
              </span>
            </div>

            {/* <div className="logo-and-name-parent"></div>
          <span onClick={closeSidebar} id="close-btn">
            <Fon  tAwesomeIcon icon={faClose} />
          </span> */}
          </div>

          <SidebarItem icon={faHome} name="Home" path="/" />
          <SidebarItem icon={faEye} name="Bytes" path="/bytes" />
          <SidebarItem
            icon={faImages}
            name="Islamic Photos"
            path="/islamicImages"
          />
          <SidebarItem icon={faVideo} name="Videos" path="/videos" />
          <SidebarItem icon={faMusic} name="Islamic Music" path="/music" />
          <SidebarItem
            icon={faBookOpenReader}
            name="Islamic Questions"
            path="/islamicQuestions"
          />
          <hr />
          <SidebarItem
            icon={faCircleDot}
            name="Quran"
            path="/quranCategories"
          />
          <SidebarItem
            icon={faCircleDot}
            name="Companions"
            path="/companions"
          />
          <SidebarItem icon={faCircleDot} name="Hadiths" path="/hadiths" />
          <SidebarItem icon={faCircleDot} name="Dua" path="/dua" />
          <SidebarItem
            icon={faCircleDot}
            name="Core Teachings"
            path="/coreTeachings"
          />
          <SidebarItem
            icon={faCircleDot}
            name="Qibla Direction"
            path="/qibla"
          />
          <SidebarItem
            icon={faCircleDot}
            name="Allah Names"
            path="/allahNames"
          />
          <SidebarItem icon={faCircleDot} name="Tasbeeh" path="/tasbeeh" />
          <SidebarItem
            icon={faCircleDot}
            name="Islamic Battles"
            path="/islamicBattles"
          />
          <SidebarItem icon={faCircleDot} name="Haj" path="/haj" />

          <hr />
          <p className="someHeading">Developers</p>

          <a
            href="https://www.facebook.com/profile.php?id=100090254793971"
            target="_blank"
          >
            <div className="sidebar-divs page-type">
              <span className="sid-div-icons">
                <img id="devlopers-img" src="./hamid-karimi.png" />
              </span>
              <span>Hamid Karimi</span>
            </div>
          </a>

          <hr />

          <SidebarItem icon={faGear} name="Settings" path="/settings" />
          <hr />

          <p className="someHeading">Download Mobile App</p>

          <SidebarItem icon={faGooglePlay} name="Android" path="/404error" />
          <SidebarItem icon={faApple} name="iOS" path="/404error" />
          <hr />
          <SidebarItem
            icon={faQuestion}
            name="Help Center"
            path="/helpCenter"
          />

          <hr />
          <p className="p-2 text-info">Copyright © 2024. edufaith</p>
          <br />
          <br />
          <br />
        </div>
      )}
    </>
  );
}

export default Sidebar;

export let MenuBar = () => {
  // const [selectedMenu, setSelectedMenu] = useState(null);

  // const handleClick = (item) => {
  //   setSelectedMenu(item);
  // };

  const items = [
    {
      objectId: 1,
      icon: faHome,
      name: "Home",
      path: "/",
    },
    {
      objectId: 2,
      icon: faEye,
      name: "Bytes",
      path: "/bytes",
    },
    {
      objectId: 3,
      icon: faVideo,
      name: "Videos",
      path: "/videos",
    },
    {
      objectId: 4,
      icon: faImages,
      name: "Photos",
      path: "/islamicImages",
    },
    {
      objectId: 5,
      icon: faMusic,
      name: "Music",
      path: "/music",
    },
    {
      objectId: 6,
      icon: faBookOpenReader,
      name: "Questions",
      path: "/islamicQuestions",
    },
  ];

  return (
    <>
      <div className="menu-bar">
        {items.map((item) => (
          <NavLink
            to={item.path}
            exact
            activeClassName=" "
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "dodgerblue" : "white",
              };
            }}
          >
            <div>
              <FontAwesomeIcon icon={item.icon} />
              <p>{item.name}</p>
            </div>
          </NavLink>
        ))}
      </div>
    </>
  );
};
