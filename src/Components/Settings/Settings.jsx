import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

//temporary start
import EduAlert from "../EsuAlert/EduAlert";
import Overlay from "../Overlay/Overlay";
//temporary end

import { useState } from "react";
import Button from "react-bootstrap/Button";
import Nav from "../Navbar/Nav";

let Settings = () => {
  //temporary start
  const [showAlert, setShowAlert] = useState(false);
  const handleAlert = () => {
    setShowAlert(true);
  };
  const closeAlert = () => {
    setShowAlert(false);
  };
  //temporary end

  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  const settingsStyle = {
    width: "100%", 
    border: "1px solid rgb(45, 45, 45)",
    color: "rgb(175, 175, 175)", //a235g
    backgroundColor: "rgb(19, 19, 19)", //a235g
    boxShadow: "0 10px 20px rgba(97, 97, 97, 0.1)",
    padding: "12px 18px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontWeight: "bold",
    marginBottom: "18px",
  };
  const settingsBtnstyle = {
    width: "48px",
    height: "24px",
    backgroundColor: isOn ? "#007bff" : "#6c757d",
    borderRadius: "12px",
    padding: "0",
    transition: "background-color 0.3s ease",
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
  };
  const btnAnotherStyle = {
    top: "2px",
    left: isOn ? "24px" : "2px",
    width: "20px",
    height: "20px",
    transition: "left 0.3s ease",
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "100%",
  };

  return (
    <>
      <Nav pageName="Settings" />
      <div className="container pt-3">
        <h1 className="text-center  fs-1  " style={{ margin: "80px" }}>
          Settings
        </h1>

        <div style={settingsStyle}>
          <span className="fs-3">Dark Mode</span>
          <Button
            onClick={toggleSwitch}
            className="btn btn-primary"
            style={settingsBtnstyle}
          >
            <span style={btnAnotherStyle}></span>
          </Button>
        </div>

        <div onClick={handleAlert} style={settingsStyle}>
          <span className="fs-3">Font Size</span>
          <FontAwesomeIcon className="fs-2" icon={faAngleDown} />
        </div>

        <div style={settingsStyle}>
          <span className="fs-3">New Content Alerts</span>
          <Button
            onClick={toggleSwitch}
            className="btn btn-primary"
            style={settingsBtnstyle}
          >
            <span style={btnAnotherStyle}></span>
          </Button>
        </div>

        <div onClick={handleAlert} style={settingsStyle}>
          <span className="fs-3">Dailly Reminders</span>
          <FontAwesomeIcon className="fs-2" icon={faAngleDown} />
        </div>

        <div onClick={handleAlert} style={settingsStyle}>
          <span className="fs-3">Location</span>
          <FontAwesomeIcon className="fs-2" icon={faAngleDown} />
        </div>

        <div onClick={handleAlert} style={settingsStyle}>
          <span className="fs-3">Change Language</span>
          <FontAwesomeIcon className="fs-2" icon={faAngleDown} />
        </div>

        <div onClick={handleAlert} style={settingsStyle}>
          <span className="fs-3">Bookmarks & Favorites</span>
          <FontAwesomeIcon className="fs-2" icon={faAngleDown} />
        </div>
      </div>

      {/* //temporary start */}
      {showAlert && (
        <EduAlert
          alertMessage="This setting is currently unavailable."
          closeAlert={closeAlert}
        />
      )}
      {showAlert ? <Overlay /> : ""}
      {/* //temporary end */}
    </>
  );
};

export default Settings;
