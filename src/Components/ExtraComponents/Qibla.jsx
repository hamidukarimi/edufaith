import React, { useState, useEffect, useRef } from "react";
import Nav from "../Navbar/Nav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import EduAlert from "../EsuAlert/EduAlert";
import Overlay from "../Overlay/Overlay";

// Helper functions to convert between radians and degrees
const toRadians = (deg) => deg * (Math.PI / 180);
const toDegrees = (rad) => rad * (180 / Math.PI);

// Function to calculate the Qibla direction
const calculateQibla = (userLat, userLon, kaabaLat, kaabaLon) => {
  const userLatRad = toRadians(userLat);
  const userLonRad = toRadians(userLon);
  const kaabaLatRad = toRadians(kaabaLat);
  const kaabaLonRad = toRadians(kaabaLon);

  const deltaLon = kaabaLonRad - userLonRad;

  const x = Math.cos(kaabaLatRad) * Math.sin(deltaLon);
  const y =
    Math.cos(userLatRad) * Math.sin(kaabaLatRad) -
    Math.sin(userLatRad) * Math.cos(kaabaLatRad) * Math.cos(deltaLon);

  const qiblaAngle = toDegrees(Math.atan2(x, y));
  return (qiblaAngle + 360) % 360; // Normalize the angle to 0-360 degrees
};

const Qibla = () => {
  const [compassHeading, setCompassHeading] = useState(0);
  const [qiblaHeading, setQiblaHeading] = useState(0);
  const [status, setStatus] = useState("Waiting for location...");
  const [error, setError] = useState("");

  const kaabaCoords = { lat: 21.4225, lon: 39.8262 }; // Coordinates of Kaaba

  // Get user's location and calculate Qibla direction
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          const qiblaDirection = calculateQibla(
            latitude,
            longitude,
            kaabaCoords.lat,
            kaabaCoords.lon
          );
          setQiblaHeading(qiblaDirection);
          setStatus("Qibla direction calculated. Rotate your phone to align.");

          // Listen for device orientation
          if (window.DeviceOrientationEvent) {
            window.addEventListener("deviceorientation", (event) => {
              const compassDirection = event.alpha; // Adjust as per device compass calibration
              setCompassHeading((qiblaDirection - compassDirection) % 360);
            });
          } else {
            setError(
              "Compass not supported on this device. Please use another device."
            );
          }
        },
        (err) => {
          handleLocationError(err);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  }, []);

  // Handle location errors
  const handleLocationError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        setError("Permission to access location was denied.");
        break;
      case error.POSITION_UNAVAILABLE:
        setError("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        setError("The request to get your location timed out.");
        break;
      default:
        setError("An unknown error occurred.");
        break;
    }
  };

  // for alert

  const [showAlert, setShowAlert] = useState(true);
   const handleAlert = () => {
    setShowAlert(true);
   };
  const closeAlert = () => {
    setShowAlert(false);
    
  };

  return (
    <>
      {/* <Nav pageName="Qibla"/> */}
      {/* <EduAlert alertMessage="This feature may not be available in your browser or device."/> */}
      <span
        onClick={() => window.history.back()}
        style={{
          position: "fixed",
          left: "20px",
          top: "20px",
          fontSize: "23px",
          cursor: "pointer"
        }}
      >
        <FontAwesomeIcon icon={faArrowLeft} /> Back
      </span>

      <div style={styles.container}>
        <h1 className="p-5">Qibla Finder</h1>
        <div style={styles.compass}>
          <div
            style={{
              ...styles.pointer,
              transform: `translate(-50%, -100%) rotate(${compassHeading}deg)`,
            }}
          />
        </div>
        <p onClick={handleAlert} className="pt-5 text-warning">
          {status}
        </p>
        {error && <p style={styles.error}>{error}</p>}
      </div>

      {showAlert && (
        <EduAlert
          alertMessage="This feature may not be available in your browser or device."
          closeAlert={closeAlert}
        />
      )}
      {showAlert ? <Overlay /> : ""}
    </>
  );
};

// Styles

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    margin: 0,
    background: "radial-gradient(circle, #111 50%, #000)",
    color: "#fff",
  },
  compass: {
    position: "relative",
    width: "320px",
    height: "320px",
    border: "6px solid rgba(255, 255, 255, 0.2)",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255, 255, 255, 0.1) 40%, #222 100%)",
    boxShadow:
      "0 0 20px rgba(0, 255, 255, 0.2), 0 0 40px rgba(0, 255, 255, 0.4)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  pointer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 0,
    height: 0,
    borderLeft: "10px solid transparent",
    borderRight: "10px solid transparent",
    borderBottom: "140px solid #00ffff",
    boxShadow: "0 0 15px rgba(0, 255, 255, 0.8)",
  },
  error: {
    color: "#ff4c4c",
  },
};

export default Qibla;
