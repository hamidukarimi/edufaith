import {
  faHeart as faSolidHeart,
  faShareFromSquare,
  faEye,
  faInfoCircle,
  faClose,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
// import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import "./Videos.css";
import Header from "../Header/Header";
import Menus from "../Menus/Menus";
import Sidebar from "../Sidebar/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import React, { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

// import Card from "react-bootstrap/Card";
// import { faHeart } from '@fortawesome/free-solid-svg-icons';

let PlayVideo = ({ video, isPlaying, setPlayingTrack, closePage }) => {
  const videoRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
      setPlayingTrack(null); // Reset if currently playing
    } else {
      setPlayingTrack(videoRef.current); // Set this video as the current track
      videoRef.current.play();
    }
  };

  const updateProgress = () => {
    const currentProgress =
      (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(currentProgress);
  };

  const handleProgressClick = (event) => {
    const progressContainer = event.target.getBoundingClientRect();
    const clickPosition = event.clientX - progressContainer.left;
    const newProgress = (clickPosition / progressContainer.width) * 100;

    videoRef.current.currentTime =
      (newProgress / 100) * videoRef.current.duration;

    setProgress(newProgress);
  };

  const resetvideo = () => {
    setProgress(0);
  };

  useEffect(() => {
    togglePlayPause();
  }, []);

  return (
    <div className="playVideoFather">
      <span
        onClick={closePage}
        style={{
          top: "15px",
          left: "15px",
        }}
        className="playComponentsCloseBtn"
      >
        <FontAwesomeIcon icon={faClose} />
      </span>
      <div className="playVideoMother">
        <video
          className="w-100 h-100"
          ref={videoRef}
          src={video}
          onTimeUpdate={updateProgress}
          onEnded={() => {
            resetvideo();
            setPlayingTrack(null); // Reset on video end
          }}
          onClick={togglePlayPause}
        ></video>

        <div
          style={{
            width: "100%",
            height: "10px",
            backgroundColor: "rgb(160, 160, 160)",
            overflow: "hidden",
          }}
          onClick={handleProgressClick}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              backgroundColor: "white",
              transition: "width 0.1s linear",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// let VideosNavbar = () => {
//   const pageNames = [
//     { name: "Home", path: "/videos" },
//     { name: "Featured", path: "/" },
//     { name: "Shorts", path: "/" },
//     { name: "Premium", path: "/premium" },
//   ];

//   return (
//     <div className="videos_navbar">
//       {pageNames.map((pageName) => (
//         <NavLink
//           className="VNav"
//           to={pageName.path}
//           exact
//           activeClassName=""
//           style={({ isActive }) => {
//             return {
//               borderBottom: isActive ? "2px solid rgb(178, 178, 178)" : "", //a235g
//             };
//           }}
//         >
//           <p className="px-1">{pageName.name}</p>
//         </NavLink>
//       ))}
//     </div>
//   );
// };

function Videos() {
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
        setLoading(false); // Set loading to false after fetching
      }
    }
    getUsers();
  }, []);

  const [playingTrack, setPlayingTrack] = useState(null);

  const handleSetPlayingTrack = (video) => {
    // Pause the currently playing track if it exists
    if (playingTrack && playingTrack !== video) {
      playingTrack.pause();
    }
    setPlayingTrack(video);
  };

  const styles = {
    container: {
      position: "absolute",
      top: "50%",
      left: "0",
      transform: "translate(-0, -50%)",
      backgroundColor: "black", //a235g
    },
    card: {
      textAlign: "center",
      padding: "2rem",
    },
    heading: {
      fontSize: "25px",
      fontWeight: "bold",
      color: "rgb(175, 175, 175)",
      margin: "0 0 1rem 0",
    },
    subText: {
      color: "rgb(175, 175, 175)",
    },
  };

  const [activeSection, setActiveSection] = useState("Home");

  return (
    <>
      <Header />
      <Menus />

      <div className="container">
        {/* <VideosNavbar /> */}

        <div className="vNavbar">
          {["Home", "Featured", "Shorts", "Premium"].map((section) => (
            <div
              key={section}
              className={`vNav-item ${
                activeSection === section ? "active" : ""
              }`}
              onClick={() => setActiveSection(section)}
            >
              {section}
            </div>
          ))}
        </div>

        <div className="content">
          {activeSection === "Home" && (
            <section>
              <h2>Videos in progress</h2>
              <div className="progressVideo">
                <img
                  className="progressCardImg"
                  src="./video-placeholder.jpg"
                />
                <div className="infoSection">
                  <p style={{ fontSize: "23px" }}>
                    Lorem Ispum Doller and something
                  </p>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "20px",
                      color: "rgb(68, 162, 255)",
                    }}
                  >
                    <span>
                      <span>0 </span>Total Likes{" "}
                    </span>
                    <span>
                      <span>0 </span>Total Views{" "}
                    </span>
                  </div>
                </div>
              </div>
              <br /> <br />
              <h4 className="mb-4">For You</h4>
              {loading ? (
                <div className="videoLoading">
                  <div className="bytes_spinner"></div>
                </div>
              ) : (
                <>
                  <div className="forYouSection">
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                      video="./Video2.mp4"
                      isPlaying={playingTrack?.src === "./Video1.mp4"}
                      setPlayingTrack={handleSetPlayingTrack}
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                      video="./Video1.mp4"
                      isPlaying={playingTrack?.src === "./Video1.mp4"}
                      setPlayingTrack={handleSetPlayingTrack}
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                      video="./Video1.mp4"
                      isPlaying={playingTrack?.src === "./Video1.mp4"}
                      setPlayingTrack={handleSetPlayingTrack}
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                      video="./Video1.mp4"
                      isPlaying={playingTrack?.src === "./Video1.mp4"}
                      setPlayingTrack={handleSetPlayingTrack}
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                      video="./Video1.mp4"
                      isPlaying={playingTrack?.src === "./Video1.mp4"}
                      setPlayingTrack={handleSetPlayingTrack}
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                      video="./Video1.mp4"
                      isPlaying={playingTrack?.src === "./Video1.mp4"}
                      setPlayingTrack={handleSetPlayingTrack}
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                      video="./Video1.mp4"
                      isPlaying={playingTrack?.src === "./Video1.mp4"}
                      setPlayingTrack={handleSetPlayingTrack}
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                      video="./Video1.mp4"
                      isPlaying={playingTrack?.src === "./Video1.mp4"}
                      setPlayingTrack={handleSetPlayingTrack}
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="5:14"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                  </div>
                  <br />
                  <br />
                  <div className="forYouSection">
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                  </div>
                  <br />
                  <br />
                  <div className="forYouSection">
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                  </div>
                  <br />
                  <br />
                  <br />
                  <h2>Top scholer in last 30 days</h2>
                  <div
                    style={{ position: "relative" }}
                    className="progressVideo"
                  >
                    <a href="#">
                      <span
                        style={{
                          position: "absolute",
                          left: "90%",
                          top: "12px",
                          fontSize: "24px",
                          color: "rgb(198, 198, 198)",
                        }}
                      >
                        <FontAwesomeIcon icon={faInfoCircle} />
                      </span>
                    </a>
                    <img
                      style={{
                        width: "100%",
                        height: "340px",
                        borderRadius: "10px",
                      }}
                      src="./placeholder_male.png"
                    />
                    <div className="topSchInfo">
                      <p style={{ fontSize: "30px", fontWeight: "bold" }}>
                        Ahmad Al-Salman
                      </p>
                      <p style={{ fontSize: "25px" }}>0.0k Views</p>
                    </div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div className="forYouSection">
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                    <Video
                      image="./video-placeholder.jpg"
                      text="Lorem Ispum Doller  "
                      likesNum={0}
                      views="0"
                      duration="0:00"
                    />
                  </div>
                </>
              )}
            </section>
          )}

          {activeSection === "Featured" && (
            <section>
              <h4 className="my-4">Featured</h4>

              <div className="forYouSection">
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video2.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video1.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video1.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video1.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video1.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video1.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video1.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video1.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="5:14"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
              </div>

              <br />
              <br />

              <div className="forYouSection">
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video2.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video1.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video1.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video1.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video1.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video1.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video1.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                  video="./Video1.mp4"
                  isPlaying={playingTrack?.src === "./Video1.mp4"}
                  setPlayingTrack={handleSetPlayingTrack}
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="5:14"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
                <Video
                  image="./video-placeholder.jpg"
                  text="Lorem Ispum Doller  "
                  likesNum={0}
                  views="0"
                  duration="0:00"
                />
              </div>
            </section>
          )}

          {activeSection === "Shorts" && (
            <section>
              <div style={styles.container}>
                <div
                  style={{
                    width: "100vw",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div style={styles.card}>
                    
                    <h1 style={styles.heading}>No shorts yet</h1>
                    <p style={styles.subText}>
                      We are still working on this section to add new features.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}

          {activeSection === "Premium" && (
            <section>
              <div style={styles.container}>
                <div
                  style={{
                    width: "100vw",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div style={styles.card}>
                    <FontAwesomeIcon
                      style={{
                        fontSize: "60px",
                        marginBottom: "18px",
                        color: "orange",
                      }}
                      icon={faCrown}
                    />
                    <h1 style={styles.heading}>No Premium Videos</h1>
                    <p style={styles.subText}>
                      Explore our premium section for exclusive content. Stay
                      tuned!
                    </p>
                  </div>
                </div>
              </div>
            </section>
          )}
        </div>

        <style jsx>{`
          .vNavbar {
            display: flex;
            justify-content: space-between;
            background-color: black;
            padding: 10px;
            overflow-x: scroll;
            scrollbar-color: transparent transparent;
          }
          .vNav-item {
            cursor: pointer;
            padding: 10px 20px;
            border-radius: 5px;
          }

          .vNav-item.active {
             {
              /* background-color: #333; */
            }
             {
              /* color: white; */
            }
            border-bottom: 1px solid white;
          }
        `}</style>

        <br />
        <br />
      </div>

      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export default Videos;

let Video = ({
  image,
  text,
  likesNum,
  views,
  video,
  duration,
  description,
  name,
  isPlaying,
  setPlayingTrack,
}) => {
  const [playMusicOpen, setPlayMusicOpen] = useState(false);
  const handlePlayMusic = () => {
    setPlayMusicOpen(true);
  };
  const closePlayMusic = () => {
    setPlayMusicOpen(false);
  };

  const [love, setLove] = useState(likesNum);
  const [isLoving, setIsLoving] = useState(true);
  const handleLove = () => {
    if (isLoving) {
      setLove(love + 1);
    } else {
      setLove(love - 1);
    }
    setIsLoving(!isLoving);
  };

  return (
    <>
      <div className="videoCard">
        <img
          style={{ cursor: "pointer" }}
          onClick={handlePlayMusic}
          className="videoCardImg pointer"
          src={image}
        />

        <div className="videoCardInfo">
          <p style={{ fontSize: "18px" }}>{text}</p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span style={{ cursor: "pointer" }} onClick={handleLove}>
              <FontAwesomeIcon
                className={`${isLoving ? "text-light" : "text-danger"}`}
                icon={isLoving ? faRegularHeart : faSolidHeart}
              />{" "}
              <span>{love}</span> Likes
            </span>
            <span>
              <FontAwesomeIcon icon={faEye} /> <span>{views}</span> Views
            </span>
            <span>{duration}</span>
          </div>
        </div>
      </div>

      {playMusicOpen && (
        <PlayVideo
          name={name}
          description={description}
          video={video}
          isPlaying={isPlaying}
          setPlayingTrack={setPlayingTrack}
          closePage={closePlayMusic}
        />
      )}
    </>
  );
};

// export let Premium = () => {

//   return (
//     <>
//       <Header />
//       <VideosNavbar />

//     </>
//   );
// };
