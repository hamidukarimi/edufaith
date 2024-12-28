import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faClose } from "@fortawesome/free-solid-svg-icons";

import Nav from "../Navbar/Nav";
import "./Notifications.css";
import Overlay from "../Overlay/Overlay";

function Notifications({ closePage }) {
  return (
    <>
      {/* <Nav pageName="Notifications"/> */}

      <div className="notification-main">
        <span
          onClick={closePage}
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            fontSize: "25px",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faClose} />
        </span>

        <div className="notifi-parent">
          <span className="fs-1 text-warning" >
            <FontAwesomeIcon icon={faBell} />
          </span>
          <h5>Check back later</h5>
          <p>Your Notification list will Appear here</p>
        </div>
      </div>
    </>
  );
}

export default Notifications;
