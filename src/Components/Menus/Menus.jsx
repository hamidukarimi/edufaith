import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faEye,
  faMusic,
  faVideo,
  faBookOpenReader,
  faImages,
} from "@fortawesome/free-solid-svg-icons";
// import { faEye } from '@fortawesome/free-regular-svg-icons';

import "./Menus.css";
import { Link, NavLink } from "react-router-dom";

function Menus() {
  const menusItems = [
    {
      objectId: 1,
      src: faHome,
      name: "Home",
      path: "/",
    },
    {
      objectId: 2,
      src: faEye,
      name: "Byte",
      path: "/bytes",
    },
    {
      objectId: 3,
      src: faMusic,
      name: "Music",
      path: "/music",
    },
    {
      objectId: 4,
      src: faVideo,
      name: "Video",
      path: "/videos",
    },
    {
      objectId: 5,
      src: faImages,
      name: "Photo",
      path: "/islamicImages",
    },
  ];

  return (
    <>
      <menus>
        {menusItems.map((menusItem) => (
          <NavLink
            key={menusItem.objectId}
            to={menusItem.path}
            exact
            activeClassName=" "
            style={({ isActive }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "#1eb7f6" : "#d0d0d0", //a235g
                borderTop: isActive ? "2px solid white" : "",
              };
            }}
          >
            <div className="menus-item">
              <span style={{ textAlign: "center", lineHeight: 0.7 }}>
                <FontAwesomeIcon icon={menusItem.src} />
                <span style={{ fontSize: "14px" }}>{menusItem.name}</span>
              </span>
            </div>
          </NavLink>
        ))}
      </menus>
    </>
  );
}

export default Menus;
